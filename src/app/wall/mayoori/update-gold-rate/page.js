'use client'
import { addToast, Button, Form, Input } from '@heroui/react';
import { Assets } from 'assets/assets';
import { DigitalWallHeader } from 'Components/DigitalWall/DigitalWallHeader/DigitalWallHeader';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getGreeting } from 'utils/greetingUtils';

export default function UpdateGoldRate() {
  const [oneGram, setOneGram] = useState('');
  const [eightGram, setEightGram] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rate, setRate] = useState({ oneGram: '', eightGram: '' });
  // Check login status from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') setIsLoggedIn(true);
    fetch('/api/gold-rate')
      .then((res) => res.json())
      .then((data) => {
        setRate(data)
        setOneGram(data.oneGram)
        setEightGram(data.eightGram)
      });
  }, []);
 

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace this with your own login credentials
    if (username === 'mayoori' && password === 'mayoori321') {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      addToast({
        title: "Success",
        description: "Logged in successfully",
        color: "success",
        variant: 'bordered'
      });
    } else {
      addToast({
        title: 'Login Failed',
        description: 'Invalid credentials',
        color: 'danger',
        variant: 'bordered'
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(oneGram === '' || eightGram === '') {
      addToast({
        title: "Failed!",
        description: "Please enter all rates.",
        color: "danger",
        variant: 'bordered'
      });
      return;
    }
    const res = await fetch('/api/gold-rate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ oneGram, eightGram }),
    });

    if (res.ok) {
      setMessage('Gold rate updated successfully!');
      addToast({
        title: "Updated Successfully",
        description: "Gold rate updated successfully!",
        color: "success",
        variant: 'bordered'
      });
    } else {
      setMessage('Failed to update rate.');
      addToast({
        title: "Failed!",
        description: "Please try again.",
        color: "danger",
        variant: 'bordered'
      });
    }
  };

  return (
    <div className='h-screen pt-24 bg-gray-100'>
      <DigitalWallHeader />
      <div className='flex flex-col justify-center items-center'>
        <Image src={Assets.mayoori_logo} alt='mayoori' width={100} height={100} />  
        <h2 className='my-4 text-2xl font-bold text-center text-gray-900 block'>{getGreeting()}, Mayoori!</h2>
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: 20 }}>
        {isLoggedIn ? (
          <>
            <h2 className='mb-4 text-lg font-bold text-gray-900'>Update Gold Rates</h2>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                value={oneGram}
                onChange={(e) => setOneGram(e.target.value)}
                label="1 Gram Rate"
                variant='bordered'
                style={{ color: '#000' }}
                isRequired
              />
              <Input
                type="text"
                value={eightGram}
                onChange={(e) => setEightGram(e.target.value)}
                label="8 Gram Rate"
                variant='bordered'
                style={{ color: '#000' }}
                isRequired
              />
              <Button type="submit" color='primary' style={{ padding: 10, width: '100%', marginTop: 10 }}>
                Update Rates
              </Button>
            </Form>
            <Button
              onPress={handleLogout}
              variant='bordered'
              color='default'
              style={{ marginTop: 20, width: '100%', color: 'gray' }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <div className='border border-gray-600 rounded-md p-10'>
            <h2 className='mb-4 text-2xl font-bold text-center text-gray-900'>Login to Update Rates</h2>
            <Form onSubmit={handleLogin}>
              <Input
                type="text"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant='bordered'
                style={{ color: '#000' }}
              />
              <Input
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant='bordered'
                style={{ color: '#000' }}
              />
              <Button type="submit" color='primary' style={{ marginTop: 10, width: '100%' }}>
                Login
              </Button>
            </Form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
