'use client'
import useWindowDimensions from "@/utils/useWindowDimensions";

import GradientCard from "../GradientCard/GradientCard";
import { bentoData } from "@/data/bentoData";

const Bento = () => {

  const { isMobile } = useWindowDimensions()

  if (isMobile) {
    return (
      <div className="pt-24 pb-10 px-4" >
        <div className='h-auto mx-auto'>
          {bentoData?.map(({ heading, sub_heading, image, style }, i) => (
            <GradientCard key={i} cardKey={i + 1} heading={heading} sub_heading={sub_heading} image={image} style={style} isMobile />
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="py-24 px-24">
      <div className='grid grid-cols-4 auto-cols-auto gap-6 h-[650px] px-24 container mx-auto'>
        {bentoData?.map(({ heading, sub_heading, image, style }, i) => (
          <GradientCard key={i} cardKey={i + 1} heading={heading} sub_heading={sub_heading} image={image} style={style} />
        ))}
      </div>
    </div>

  )
}

export default Bento;

