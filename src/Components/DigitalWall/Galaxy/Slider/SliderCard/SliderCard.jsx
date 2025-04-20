import React from 'react'
import Style from './SliderCard.module.scss'

function SliderCard() {
  return (
    <div className='border-2 border-yellow-500 w-full text-sm md:text-base h-28 md:h-40 overflow-hidden rounded-3xl '>
      <p className={Style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
  )
}

export default SliderCard
