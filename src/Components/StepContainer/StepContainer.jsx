'use client'
import { useScroll } from 'framer-motion';
import GradientCircle from '../GradientCircle/GradientCircle';
import { ShootingStars } from '../ShootingStars/ShootingStars';

import StepCard from './StepCard/StepCard';
import Style from "./StepContainer.module.scss";
import { useRef } from 'react';

import { StarsBackground } from '../StarBackground copy/StarBackground';
import { Assets } from '@/assets/assets';

const stepCardData = [
  {
    id: 1,
    heading: "Wedding Invitations",
    description: "Design elegant, heartfelt wedding invites with RSVP, photo galleries, event schedules, and more  all in one shareable link.",
    image: {
      url: Assets.steps.create_account,
    }
  },
  {
    id: 2,
    heading: "Business Events",
    description: "Create sleek digital invitations for product launches, corporate meetups, conferences, or seminars. Professional and easy to share.",
    image: {
      url: Assets.steps.user_name
    }
  },
  {
    id: 3,
    heading: "Birthday Parties",
    description: "Send fun and vibrant birthday invites for all age groups. Add event details, location, and get RSVPs instantly.",
    image: {
      url: Assets.steps.tempalate
    }
  },
  {
    id: 4,
    heading: "Engagements & Anniversaries",
    description: "Celebrate love by crafting beautiful digital invites for your engagement or anniversary celebration with ease.",
    image: {
      url: Assets.steps.customize,
    }
  },
  {
    id: 5,
    heading: "Custom Events",
    description: "No matter the occasion  housewarming, baby shower, or reunion — iinve lets you create an invite that fits perfectly.",
    image: {
      url: Assets.steps.final_step,
      style: { top: "-20px" }
    }
  },
]


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

