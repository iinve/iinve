import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function fetchDigitalWallUserById(userId) {
  console.log(typeof userId, '==userId')
  try {
    const { data, error } = await supabase
      .from('digital_wall_users')
      .select('wall_slug, shop_name')
      .eq('id', '6c641c04-e8ef-4ecb-9f6e-817da85b60c3') 
    console.log(data, '==SUPABASE')
    if (error) {
      console.error('Error fetching digital wall user:', error);
      return null;
    }
    console.log(data, '==222')
    return data;
  } catch (error) {
    console.error('Exception when fetching digital wall user:', error);
    return null;
  }
}

