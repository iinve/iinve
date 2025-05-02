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

    for (const [key, value] of formData.entries()) {
      if (typeof value === 'object' && 'arrayBuffer' in value) {
        const arrayBuffer = await value.arrayBuffer();
        const fileName = `${Date.now()}-${Math.floor(Math.random() * 1e6)}-${value.name.replace(/\s+/g, '_')}`;
        const { data, error } = await supabase.storage
          .from('uploads')  // Your Supabase Storage bucket name
          .upload(fileName, Buffer.from(arrayBuffer), {
            contentType: value.type,
          });

        if (error) {
          console.error('Upload error:', error);
          return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
        }

        fileMap[key] = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/uploads/${fileName}`;
      } else {
        formValues[key] = value;
      }
    }

    // Proceed with your normal logic, using fileMap[key] for images
    // (no need to handle mkdir, writeFile etc.)

    // ... your other logic (prepare wallData, save to Supabase DB, etc.)

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
