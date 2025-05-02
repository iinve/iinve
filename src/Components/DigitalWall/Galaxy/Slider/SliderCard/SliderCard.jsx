import React from 'react'
import Style from './SliderCard.module.scss'

function SliderCard({data}) {
  return (
    <div className='bg-white/10 backdrop-blur-lg border border-white/20 w-full text-sm md:text-base h-28 md:h-40 overflow-hidden rounded-3xl mx-2'>
      <p className={Style.text} dangerouslySetInnerHTML={{ __html: data?.offer }}></p>
    </div>
  )
}

export default SliderCard
