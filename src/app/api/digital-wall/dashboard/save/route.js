import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

async function uploadFileToSupabase(supabase, file, bucket, folder) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  console.log(file, "======checking...")
  // Get file extension from original filename
  const fileExtension = file.name.split('.').pop().toLowerCase();
  
  // Create a cleaner filename with timestamp
  const timestamp = Date.now();
  const randomString = Math.floor(Math.random() * 1e6).toString(36);
  const uniqueName = `${timestamp}-${randomString}.${fileExtension}`;
  const filePath = folder ? `${folder}/${uniqueName}` : uniqueName;

  // Upload to Supabase
  const { error } = await supabase.storage.from(bucket).upload(filePath, buffer, {
    contentType: file.type,
    upsert: false
  });

  if (error) {
    console.error('Storage upload error:', error);
    throw new Error(`Failed to upload file: ${error.message}`);
  }

  // Get Supabase URL
  const { data: { publicUrl } } = supabase.storage.from(bucket).getPublicUrl(filePath);
  
  // Create custom URL with proper extension
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return `${publicUrl}/assets/uploads/${uniqueName}`;
}

export async function POST(request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const storageBucket = 'digital-wall-assets';
    const fileMap = {};
    const formValues = {};

    // Log the formData to check keys and values
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'object' && 'arrayBuffer' in value) {
        try {
          const publicUrl = await uploadFileToSupabase(supabase, value, storageBucket, 'uploads');
          fileMap[key] = publicUrl; // ✅ This must be the correct URL
        } catch (error) {
          fileMap[key] = null;
        }
      } else {
        formValues[key] = value;
      }
    }
    

    console.log('File map:', fileMap);

    const digitalWallId = formValues.digitalWallId;
    const categories = JSON.parse(formValues.categories || '[]');
    const daily_prices = JSON.parse(formValues.daily_prices || '[]');
    const offers = JSON.parse(formValues.offers || '{}');
    const spotlightRaw = JSON.parse(formValues.spotlight || '{}');
    const productsRaw = JSON.parse(formValues.products || '[]');
    const bannersRaw = JSON.parse(formValues.banners || '[]');
    const newArrivalsRaw = JSON.parse(formValues.newArrivals || '[]');
    const company_details = JSON.parse(formValues.company_details || '{}');
    const spotlight_image = JSON.parse(formValues.spotlight_image || '{}');

    const spotlight = {
      ...spotlightRaw,
      image: fileMap['spotlight_image'] || spotlightRaw.image || null,
    };

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
      company_details,
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
      console.error('Supabase DB error:', error);
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
