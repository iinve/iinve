import React from 'react'
import Style from './SliderCard.module.scss'

function SliderCard({data, color}) {
  return (
    <div className='bg-white/50 backdrop-blur-lg border w-full text-sm md:text-base h-28 md:h-40 overflow-hidden rounded-3xl mx-2' style={{borderColor:color.theme.color}}>
      <p className={Style.text} dangerouslySetInnerHTML={{ __html: data?.offer }}></p>
    </div>
  )
}

export default SliderCard
