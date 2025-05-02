
'use client'
import { addToast, Button, Form, Input } from '@heroui/react'
import { Logo } from 'Components/Logo/Logo';
import React from 'react'

const SignUpPage = () => {

  async function handleCreateUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const wall_slug = formData.get('wall_slug');
    const shop_name = formData.get('shop_name');

    const res = await fetch('/api/digital-wall/sign-up', {
      method: 'POST',
      body: JSON.stringify({ email, password, wall_slug, shop_name }),
    });

    const data = await res.json();

    if (res.ok) {
      addToast({
        title: 'Success',
        description: 'User Created Successfully',
        type: 'success',
        color: 'success',
        variant: 'bordered',
      });

      // Redirect user or show success message
    } else {
      console.error('User Creation Failed:', data.error);
      // Show error message
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-white'>
       <div className='flex justify-center items-center fixed top-6 left-0 right-0'>
          <Logo width={100} height={100} />
        </div>
      <div className='md:border border-gray-600 rounded-2xl md:p-10 md:w-1/2 w-full p-6'>
        <h2 className='mb-2 text-2xl font-bold text-center text-gray-900'>Create Your Digital Wall</h2>
        <span className='mb-8 text-2xl font-bold text-center text-gray-400 block'>Register a new account</span>
        <Form onSubmit={handleCreateUser}>
          <Input
            type="email"
            label="Email"
            name="email"
            variant="bordered"
            style={{ color: '#000' }}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            variant="bordered"
            style={{ color: '#000' }}
          />
          <Input
            type="text"
            label="Wall Slug"
            name="wall_slug"
            variant="bordered"
            style={{ color: '#000' }}
          />
          <Input
            type="text"
            label="Shop Name"
            name="shop_name"
            variant="bordered"
            style={{ color: '#000' }}
          />
          <Button type="submit" color="primary" style={{ marginTop: 10, width: '100%' }}>
            Create Account
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default SignUpPage
