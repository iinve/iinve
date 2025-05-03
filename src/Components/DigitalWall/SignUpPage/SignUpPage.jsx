
'use client'
import { addToast, Button, Form, Input, Select, SelectItem } from '@heroui/react'
import { Logo } from 'Components/Logo/Logo';
import React, { useState } from 'react'
import { allDigitalWallTemplates } from 'utils/templateUtils';

const SignUpPage = () => {
  const [template, setTemplate] = useState(allDigitalWallTemplates[0].name);
  const [isLoading, setIsLoading] = useState(false);
  async function handleCreateUser(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const wall_slug = formData.get('wall_slug');
    const shop_name = formData.get('shop_name');

    const res = await fetch('/api/digital-wall/sign-up', {
      method: 'POST',
      body: JSON.stringify({ email, password, wall_slug, shop_name, template }),
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
      setIsLoading(false);
      // Redirect user or show success message
    } else {
      addToast({
        title: 'Error',
        description: data.error  || 'User Creation Failed',
        variant: 'bordered',
        color: 'danger',
      });
      console.error('User Creation Failed:', data.error);
      // Show error message
    }
    setIsLoading(false);
  }

  return (
    <div className='flex justify-center items-center h-screen bg-white'>
      <div className='flex justify-center items-center fixed top-6 left-0 right-0'>
        <Logo width={100} height={100} />
      </div>
      <div className='md:border border-gray-600 rounded-2xl md:p-10 md:w-1/2 w-full p-6'>
        <h2 className='mb-2 text-2xl font-bold text-center text-gray-900'>Create Your Digital Wall</h2>
        <span className='mb-8 text-2xl font-bold text-center text-gray-400 block'>Register a new account</span>
        <Form onSubmit={handleCreateUser} className='!text-black'>
          <Input
            type="email"
            label="Email"
            name="email"
            variant="bordered"
            style={{ color: '#000 !important' }}
            autoComplete='off'
            isRequired
          />
          <Input
            type="password"
            label="Password"
            name="password"
            variant="bordered"
            style={{ color: '#000' }}
            autoComplete='off'
            isRequired
          />
          <Input
            type="text"
            label="Wall Slug"
            name="wall_slug"
            variant="bordered"
            style={{ color: '#000' }}
            autoComplete='off'
            isRequired
          />
          <Input
            type="text"
            label="Shop Name"
            name="shop_name"
            variant="bordered"
            style={{ color: '#000' }}
            autoComplete='off'
            isRequired
          />
          <Select
            value={template}
            onChange={(e) => {
              setTemplate(e.target.value)
            }}
            className="w-full text-black"
            label="Design"
            isRequired
          >
            <SelectItem value="" className='text-black'>Select Template</SelectItem>
            {allDigitalWallTemplates.map((temp, idx) => (
              <SelectItem key={temp.slug} value={temp.name} className='text-black'>
                {temp.name}
              </SelectItem>
            ))}
          </Select>
          <Button type="submit" color="primary" isLoading={isLoading} style={{ marginTop: 10, width: '100%' }}>
            Create Account
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default SignUpPage
