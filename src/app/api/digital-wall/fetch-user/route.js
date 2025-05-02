import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Create Supabase client
    const supabase = createRouteHandlerClient({ cookies });
    
    // Get user_id from request
    const { user_id } = await request.json();
    
    if (!user_id) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }
    
    // Use the exact column name 'id' and no transformations
    const { data, error } = await supabase
      .from('digital_wall_users')
      .select('*')  // Select all columns
      .eq('id', user_id)
      .maybeSingle(); // Use maybeSingle to handle 0 or 1 result cases
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    if (!data) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    // Return the user data
    return NextResponse.json({ success: true, user: data });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}