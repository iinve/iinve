import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const fileMap = {};
    const formValues = {};

    // Process form entries
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'object' && 'arrayBuffer' in value) {
        const bytes = await value.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uniqueName = `${Date.now()}-${Math.floor(Math.random() * 1e6)}-${value.name.replace(/\s+/g, '_')}`;
        const filePath = `uploads/${uniqueName}`;

        const { error: uploadError } = await supabase.storage
          .from('digital-wall') // Your Supabase storage bucket name
          .upload(filePath, buffer, {
            contentType: value.type,
            upsert: true,
          });

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase
          .storage
          .from('digital-wall')
          .getPublicUrl(filePath);

        fileMap[key] = publicUrl;
      } else {
        formValues[key] = value;
      }
    }

    // Structured parsing
    const digitalWallId = formValues.digitalWallId;
    const categories = JSON.parse(formValues.categories || '[]');
    const daily_prices = JSON.parse(formValues.daily_prices || '[]');
    const offers = JSON.parse(formValues.offers || '{}');

    const spotlight = {
      text: formValues.spotlight_text || '',
      image: fileMap['spotlight_image'] || null,
    };

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
