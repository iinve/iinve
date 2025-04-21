import React from 'react'
import Style from './SliderCard.module.scss'

function SliderCard({data}) {
  return (
    <div className='border-2 border-yellow-500 w-full text-sm md:text-base h-28 md:h-40 overflow-hidden rounded-3xl '>
      <p className={Style.text} dangerouslySetInnerHTML={{ __html: data?.text }}></p>
    </div>
  )
}

export default SliderCard
