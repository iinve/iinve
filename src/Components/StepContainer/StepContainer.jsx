'use client'
import { useScroll } from 'framer-motion';
import GradientCircle from '../GradientCircle/GradientCircle';
import { ShootingStars } from '../ShootingStars/ShootingStars';

import StepCard from './StepCard/StepCard';
import Style from "./StepContainer.module.scss";
import { useRef } from 'react';

import { StarsBackground } from '../StarBackground copy/StarBackground';
import { stepCardData } from '../../data/stepCardData';

const StepContainer = () => {
  const container = useRef(null);
  const headingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  return (
    <div id='how_it_works' className='relative' ref={headingRef}>
      <div ref={container} className={Style.StepContainer}>
      {stepCardData.map(({ id, image, heading, description }, i) => {
        const targetScale = 1 - ((stepCardData.length - i) * 0.05);
        return <StepCard
          i={i}
          key={id}
          id={id}
          image={image}
          heading={heading}
          description={description}
          progress={scrollYProgress}
          range={[i * .25, 1]}
          targetScale={targetScale}
        />
      })}
      <GradientCircle />
      <ShootingStars />
      <StarsBackground />
    </div>
    </div>
  );
};

export default StepContainer;

