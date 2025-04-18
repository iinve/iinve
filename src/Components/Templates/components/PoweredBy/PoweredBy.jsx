import { ASSETS } from '@/lib/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PoweredBy = ({ isWhiteBackground }) => {
  return (
    <div className='flex justify-center items-center py-4 pt-10 opacity-50'>
      <span className={`${isWhiteBackground ? "!text-black" : "!text-white"} flex items-center justify`}>Powered by <Link href="https://viiew.me" target='_blank'><Image src={isWhiteBackground ? ASSETS?.Logo.dark : ASSETS?.Logo?.light} width={80} height={100} alt='logo' className='ml-2' /></Link></span>
    </div>
  )
}

export default PoweredBy