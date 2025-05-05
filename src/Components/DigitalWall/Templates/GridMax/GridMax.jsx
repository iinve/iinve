import { Button } from '@heroui/react'
import { Assets } from 'assets/assets'
import DailyPrice from 'Components/DailyPrice/DailyPrice'
import Slider from 'Components/DigitalWall/Galaxy/Slider/Slider'
import ProductSlider from 'Components/DigitalWall/ProductSlider/ProductSlider'
import Image from 'next/image'
import ActionButton from 'ProUI/ActionButton/ActionButton'
import ProIcon from 'ProUI/Icons/icons'
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
        weight: '100g',
        title: 'Product 2',
        imagePreview: Assets.Banner,
        category: 'Category 2',
      },
      {
        name: 'Product 2',
        weight: '100g',
        title: 'Product 2',
        imagePreview: Assets.Banner,
        category: 'Category 2',
      },
      {
        name: 'Product 2',
        weight: '100g',
        title: 'Product 2',
        imagePreview: Assets.Banner,
        category: 'Category 2',
      },
      {
        name: 'Product 2',
        weight: '100g',
        title: 'Product 2',
        imagePreview: Assets.Banner,
        category: 'Category 2',
      },
      {
        name: 'Product 2',
        weight: '100g',
        title: 'Product 2',
        imagePreview: Assets.Banner,
        category: 'Category 2',
      },
      {
        name: 'Product 2',
        weight: '100g',
        title: 'Product 2',
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
  const offerz = {
    offers: [
      {
        title: 'Offer 1',
        offer: 'Offer 1 description',
      },
      {
        title: 'Offer 1',
        offer: 'Offer 1 description',
      }
    ]
  }
  const dailyPrice = [
    {
      amount: '100',
      label: 'Daily Price',
    },
    {
      amount: '100',
      label: 'Daily Price',
    },
    {
      amount: '100',
      label: 'Daily Price',
    }
  ]
  return (
    <div className='min-h-screen bg-[#FFE4B3] py-6'>
      <div className='container mx-auto px-6'>
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
      <DailyPrice price={dailyPrice} style='table' /> 
      <ProductSlider data={data} color='#FFD700' />
      {/* <Banner data={data} /> */}
      <div className='flex flex-col gap-2 justify-center w-fit px-6 mx-auto fixed bottom-4 right-2 z-10'>
        <Button color='warning' isIconOnly className='w-fit ml-2 text-black'><ProIcon name={'FaPhone'} color='#333' size={20} /></Button>
        <Button color='warning' isIconOnly className='w-fit ml-2 text-black'><ProIcon name={'FaWhatsapp'} color='#333' size={20} /></Button>
      </div>
      <Slider data={offerz} type='card'/>

    </div>
  )
}

export default GridMax
