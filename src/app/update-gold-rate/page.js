'use client'
import { addToast, Button, Form, Input } from '@heroui/react';
import { DigitalWallHeader } from 'Components/DigitalWall/DigitalWallHeader/DigitalWallHeader';
import { useState } from 'react';

export default function UpdateGoldRate() {
  const [oneGram, setOneGram] = useState('');
  const [eightGram, setEightGram] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        variant:'bordered'
      })
      setOneGram('');
      setEightGram('');
    } else {
      setMessage('Failed to update rate.');
      addToast({
        title: "Failed!",
        description: "Please try again.",
        color: "danger",
        variant:'bordered'
      })
    }
  };

  return (
   <div className='h-screen pt-24'>
     <DigitalWallHeader />
     <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h2 className='mb-4 text-2xl font-bold text-center'>Update Gold Rates</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={oneGram}
          onChange={(e) => setOneGram(e.target.value)}
          // placeholder="1 Gram Rate (e.g. 6,280)"
          label="1 Gram Rate"
        />
        <Input
          type="text"
          value={eightGram}
          onChange={(e) => setEightGram(e.target.value)}
          label="8 Gram Rate"
        />
        <Button type="submit" color='primary' style={{ padding: 10, width: '100%', marginTop: 10 }}>
          Update Rates
        </Button>
      </Form>
    </div>
   </div>
  );
}