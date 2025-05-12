import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function POST(req) {
  const { email, password, wall_slug, shop_name, template } = await req.json()
  

  // Validate password
  if (!password || password.length < 6) {
    return Response.json({ 
      error: 'Password must be at least 6 characters long' 
    }, { status: 400 })
  }

  // Regular client for auth
  const supabase = createRouteHandlerClient({ cookies })

  // Sign up user in Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    console.error('Auth error:', error)
    return Response.json({ error: error.message }, { status: 400 })
  }

  if (!data.user) {
    console.error('No user returned from signUp')
    return Response.json({ error: 'Failed to create user' }, { status: 500 })
  }

  const user_id = data.user.id

  // Call the database function to create user profile
  const { data: fnData, error: fnError } = await supabase
    .rpc('create_digital_wall_user', { 
      p_user_id: user_id, 
      p_email: email, 
      p_wall_slug: wall_slug, 
      p_shop_name: shop_name,
      p_password: password,
      p_template: template
    })

  if (fnError) {
    console.error('Database function error:', fnError)
    return Response.json({ error: fnError.message }, { status: 500 })
  }

  return Response.json({ 
    message: 'User created successfully', 
    user: { id: user_id, email, wall_slug, shop_name },
    session: data.session
  }, { status: 201 })
}