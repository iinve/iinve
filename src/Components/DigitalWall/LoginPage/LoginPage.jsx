'use client'
import { addToast, Button, Form, Input } from '@heroui/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Logo } from 'Components/Logo/Logo'

const LoginPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClientComponentClient()

  async function handleLogin(e) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.target)
      const email = formData.get('email')
      const password = formData.get('password')

      // Use Supabase Auth directly instead of a custom API endpoint
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        throw error
      }

      // No need to store in localStorage - Supabase handles the session
      addToast({
        title: 'Success',
        description: 'Login successful',
        type: 'success',
        color: 'success',
        variant: 'bordered',
      })
      router.push('/wall/dashboard')
    } catch (error) {
      console.error('Login Failed:', error.message)
      addToast({
        title: 'Error',
        description: error.message || 'Login failed',
        type: 'error',
        color: 'danger',
        variant: 'bordered',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-white'>
        <div className='flex justify-center items-center fixed top-6 left-0 right-0'>
          <Logo width={100} height={100} />
        </div>
      <div className='md:border border-gray-600 rounded-2xl p-10 w-full max-w-md'>
        <h2 className='mb-2 text-2xl font-bold text-center text-gray-900'>Welcome back!</h2>
        <span className='mb-8 text-2xl font-bold text-center text-gray-400 block'>Login to your account</span>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            label="Email"
            name='email'
            variant='bordered'
            style={{ color: '#000' }}
            isRequired
            disabled={isLoading}
          />
          <Input
            type="password"
            label="Password"
            name='password'
            variant='bordered'
            style={{ color: '#000' }}
            isRequired
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            color='primary' 
            style={{ marginTop: 10, width: '100%' }}
            isLoading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage