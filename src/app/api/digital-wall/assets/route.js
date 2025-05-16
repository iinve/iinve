// app/api/assets/[...filename]/route.js

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  // Get the full filename with extension
  if (!params?.filename) {
    return new NextResponse('Filename is required', { status: 400 });
  }
  
  const filename = Array.isArray(params?.filename) 
    ? params.filename.join('/') 
    : params.filename;
  
  // Extract extension for content type
  const fileExtension = filename.split('.').pop().toLowerCase();
  
  const supabase = createRouteHandlerClient({ cookies });
  
  // Determine the path in your bucket (you may need to adjust this logic)
  const filePath = `uploads/${filename}`;
  
  // Download the file from Supabase
  const { data, error } = await supabase.storage
    .from('digital-wall-assets')
    .download(filePath);
    
  if (error || !data) {
    console.error('File download error:', error);
    return new NextResponse('File not found', { status: 404 });
  }
  
  // Map extensions to content types
  const contentTypeMap = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'webp': 'image/webp',
    'svg': 'image/svg+xml',
    'pdf': 'application/pdf',
  };
  
  // Get content type based on extension
  const contentType = contentTypeMap[fileExtension] || 'application/octet-stream';
  
  // Return the file with proper content type
  return new NextResponse(data, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}