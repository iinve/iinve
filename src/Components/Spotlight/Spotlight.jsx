"use client"



import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
// import { useState } from 'react'
import ActionButton from '../../ProUI/ActionButton/ActionButton'
import { HeroHighlight } from '../HeroHighlight/HeroHighlight'
import HomeTemplates from '../HomeTemplates/HomeTemplates'
// import TemplateChip from '../TemplateChip/TemplateChip'
import SpotlightTags from 'Components/SpotlightTags/SpotlightTags'
import ProHeading from 'ProUI/ProHeading/ProHeading'
import { useToggleVisibility } from 'utils/sheetUtils'
import useWindowDimensions from 'utils/useWindowDimensions'
import Style from './Spotlight.module.scss'
// import { addToast } from '@heroui/react'

const blurVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
}

const Spotlight = () => {
  const { isMobile } = useWindowDimensions()
//   const [isLoading, setIsLoading] = useState(false);
  const { toggleSheetVisibility } = useToggleVisibility()
  const router = useRouter();
//   const handleClick = () => {
//     setIsLoading(true)
//     router.push('/auth')
//   }
const handleClickDemo = () => {
  window.location.href = 'https://api.whatsapp.com/send?phone=918075952456&text=Hello%2C%0A%0AI+hope+this+message+finds+you+well.+I+am+interested+in+creating+a+wedding+invitation+website+for+my+upcoming+wedding.+Could+you+please+provide+me+with+more+details+about+your+services%2C+packages%2C+and+pricing%3F%0A%0AThank+you';
};

  return (
    <HeroHighlight>
      <motion.div
        id='spotlight'
        className={Style.spotlight}
        initial="hidden"
        animate="visible"
        variants={blurVariants}
      >
        {isMobile && <SpotlightTags />}
        <motion.div className={Style.main} variants={blurVariants}>
          <motion.div variants={blurVariants}>
            {/* <TemplateChip /> */}
            <motion.div variants={blurVariants}>
              <ProHeading className={Style.heading}>Create <span>Magic</span> for You!{!isMobile && <br/>}</ProHeading>
            </motion.div>
          </motion.div>
          <motion.span className={Style.quote} variants={blurVariants}>
          Let your invitations reflect the beauty of your event. With iinve, you can send personalized digital invites that are both stylish and eco-friendly.
          </motion.span>
          <motion.div variants={blurVariants}>
            {/* <HomeInput /> */}
            <div className='flex md:justify-start justify-center'>
              {/* <ActionButton color='primary' size='lg' className='mr-4' onClick={handleClick} isLoading={isLoading}>Create Yours</ActionButton> */}
              <ActionButton size='lg' color='primary' onClick={handleClickDemo}>Create Yours</ActionButton>
            </div>
          </motion.div>
        </motion.div>
        <div className='w-[150px]'>
          {!isMobile && <HomeTemplates />}
        </div>
      </motion.div>
    </HeroHighlight >

  )
}

export default Spotlight
