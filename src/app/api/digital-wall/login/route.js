import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function POST(req) {
  const { email, password } = await req.json()
  
  // Log request data (remove in production)
  console.log('Login request:', { 
    email, 
    passwordProvided: !!password
  })
  
  // Validate input
  if (!email || !password) {
    return Response.json({ 
      error: 'Email and password are required' 
    }, { status: 400 })
  }

  // Create Supabase client
  const supabase = createRouteHandlerClient({ cookies })

  // Attempt to sign in
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error('Login error:', error)
    return Response.json({ error: error.message }, { status: 400 })
  }

  if (!data.user) {
    console.error('No user returned from login')
    return Response.json({ error: 'Invalid login credentials' }, { status: 401 })
  }

  console.log('User logged in:', data.user.id)

  // Get user profile data
  const { data: userData, error: userError } = await supabase
    .from('digital_wall_users')
    .select('*')
    .eq('user_id', data.user.id)
    .single()

  if (userError && userError.code !== 'PGRST116') { // Not found error
    console.error('Error fetching user data:', userError)
  }

  return Response.json({ 
    message: 'Login successful',
    user: userData || { id: data.user.id, email: data.user.email },
    session: data.session
  }, { status: 200 })
}