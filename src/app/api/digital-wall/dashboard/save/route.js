import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { mkdir, writeFile } from 'fs/promises';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { dirname, join } from 'path';
import { cwd } from 'process';

// Ensure directory exists
async function ensureDirectoryExists(directory) {
  try {
    await mkdir(directory, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

// Save a file
async function saveFile(file, uploadPath) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  await ensureDirectoryExists(dirname(uploadPath));
  await writeFile(uploadPath, buffer);
  return uploadPath;
}

export async function POST(request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const uploadDir = join(cwd(), 'public', 'uploads');
    await ensureDirectoryExists(uploadDir);

    const fileMap = {};
    const formValues = {};

    // Process form entries
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'object' && 'arrayBuffer' in value) {
        const uniqueName = `${Date.now()}-${Math.floor(Math.random() * 1e6)}-${value.name.replace(/\s+/g, '_')}`;
        const uploadPath = join(uploadDir, uniqueName);
        await saveFile(value, uploadPath);
        fileMap[key] = `/uploads/${uniqueName}`;
      } else {
        formValues[key] = value;
      }
    }

    // Structured data
    const digitalWallId = formValues.digitalWallId;
    const categories = JSON.parse(formValues.categories || '[]');
    const daily_prices = JSON.parse(formValues.daily_prices || '[]');
    const offers = JSON.parse(formValues.offers || '{}');

    const spotlight = {
      text: formValues.spotlight_text || '',
      image: fileMap['spotlight_image'] || null,
    };

    // Parse array fields from JSON
    const productsRaw = JSON.parse(formValues.products || '[]');
    const bannersRaw = JSON.parse(formValues.banners || '[]');
    const newArrivalsRaw = JSON.parse(formValues.newArrivals || '[]');

    const products = productsRaw.map((p, i) => ({
      ...p,
      image: fileMap[`products[${i}][image]`] || null,
    }));

    const banners = bannersRaw.map((b, i) => ({
      ...b,
      image: fileMap[`banners[${i}][image]`] || null,
    }));

    const newArrivals = newArrivalsRaw.map((n, i) => ({
      ...n,
      image: fileMap[`newArrivals[${i}][image]`] || null,
    }));
    console.log(formValues, '==formValues')
    // Prepare data
    const wallData = {
      spotlight,
      categories,
      products,
      banners,
      new_arrivals: newArrivals,
      offers,
      updated_at: new Date().toISOString(),
      user_id: session.user.id,
      wall_slug: formValues.wall_slug,
      shop_name: formValues.shop_name,
      template: formValues.template,
      daily_prices,
    };

    let dbOperation;

    if (digitalWallId) {
      const { data: existingWall, error: fetchError } = await supabase
        .from('digital_wall')
        .select('id')
        .eq('id', digitalWallId)
        .eq('user_id', session.user.id)
        .single();

      if (fetchError || !existingWall) {
        return NextResponse.json({ error: 'Permission denied or wall not found' }, { status: 403 });
      }

      dbOperation = supabase
        .from('digital_wall')
        .update(wallData)
        .eq('id', digitalWallId)
        .select();
    } else {
      wallData.created_at = new Date().toISOString();
      dbOperation = supabase
        .from('digital_wall')
        .insert(wallData)
        .select();
    }

    const { data, error } = await dbOperation;

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: digitalWallId ? 'Wall updated successfully' : 'Wall created successfully',
      data,
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
