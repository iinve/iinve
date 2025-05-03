import { Button } from '@heroui/react'
import { Assets } from 'assets/assets'
import ProductSlider from 'Components/DigitalWall/ProductSlider/ProductSlider'
import Image from 'next/image'
import React from 'react'

const GridMax = () => {
  const data = {
    categories: [
      {
        name: 'Category 1',
      },
      {
        name: 'Category 2',
      },
      {
        name: 'Category 3',
      }
    ],
    products: [
      {
        name: 'Product 1',
        imagePreview: Assets.Banner,
        category: 'Category 1',
      },
      {
        name: 'Product 2',
        imagePreview: Assets.Banner,
        category: 'Category 2',
      },
      {
        name: 'Product 3',
        imagePreview: Assets.Banner,
        category: 'Category 3',
      }
    ]
  }
  return (
    <div className='min-h-screen bg-[#FFE4B3] p-6'>
      <div className='container mx-auto'>
        <div className="relative rounded-3xl md:h-[400px] h-[200px] overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538947151057-dfe933d688d1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-70" />
          {/* Content */}
          <div className="relative z-10 p-4 h-full flex items-center justify-center">
            <div className="text-center">
              <div>
                <Image src={Assets.Banner} alt="grid-max" width={120} height={120} />
              </div>
              <h2 className="text-2xl font-bold mt-4 text-white">Grid Max</h2>
            </div>
          </div>
        </div>
      </div>
      <ProductSlider data={data} color='#FFD700' />
      {/* <Banner data={data} /> */}
      <div className='flex justify-center'>
        <Button style={{ backgroundColor: '#FFD700', color: '#000' }}>View All</Button>
      </div>
    </div>
  )
}

export default GridMax
