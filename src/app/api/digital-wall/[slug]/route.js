// app/api/wall/[slug]/route.js

import supabase from "lib/supabase";


export async function GET(request, { params }) {
  const { slug } = params;
  
  const { data, error } = await supabase
    .from('digital_wall')
    .select('*')
    .eq('wall_slug', slug)
    .single();

  if (error || !data) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
