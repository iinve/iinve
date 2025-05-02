import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// GET function to fetch all digital walls for the current authenticated user
export async function GET(request) {
  try {
    // Create Supabase client
    const supabase = createRouteHandlerClient({ cookies });
    
    // Check if user is authenticated
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized: You must be logged in to access this data' },
        { status: 401 }
      );
    }
    
    // Get user ID from the session
    const userId = session.user.id;
    
    // Fetch digital walls that belong to the current user
    const { data, error } = await supabase
      .from('digital_wall')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: `Database error: ${error.message}` },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true,
      data 
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: `Server error while fetching data: ${error.message}` },
      { status: 500 }
    );
  }
}

// GET function to fetch a specific digital wall by ID (ensuring it belongs to the user)
export async function fetchDigitalWallById(request, { params }) {
  try {
    const { id } = params;
    
    // Create Supabase client
    const supabase = createRouteHandlerClient({ cookies });
    
    // Check if user is authenticated
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized: You must be logged in to access this data' },
        { status: 401 }
      );
    }
    
    // Get user ID from the session
    const userId = session.user.id;
    
    // Fetch the specific digital wall, ensuring it belongs to the current user
    const { data, error } = await supabase
      .from('digital_wall')
      .select('*')
      .eq('id', id)
      .eq('user_id', userId)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Digital wall not found or you do not have permission to access it' },
          { status: 404 }
        );
      }
      
      console.error('Database error:', error);
      return NextResponse.json(
        { error: `Database error: ${error.message}` },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true,
      data 
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: `Server error while fetching data: ${error.message}` },
      { status: 500 }
    );
  }
}