import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Style from './StepCard.module.scss';

const StepCard = (props) => {
  const { id, i, heading, description, image, progress, range, targetScale } = props
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  function getClassName() {
    switch (true) {
      case [1, 3, 5].includes(id):
        return 'top_to_bottom';
      case [2, 4].includes(id):
        return 'bottom_to_top';
      default:
        return '';
    }
  }
  const className = getClassName();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']

  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  
  return (
    <div ref={container} className={`${Style.card_container} card`}>
      <motion.div className={`${Style.card} ${Style[className]}`} style={{ scale, opacity, top: `calc(-5vh + ${i * 25}px)` }}>
        <div className={Style.contents}>
          <span className={Style.number}>{id}</span>
          <h2 className={Style.heading}>{heading}</h2>
          <div className={Style.text}>{description}</div>
        </div>
        <motion.div className={Style.img_container} style={{ ...image?.style, scale: imageScale }}>
          <Image
            src={image?.url}
            height={800}
            width={500}
            alt='create_card'
          />
        </motion.div>
      </motion.div>

    </div>
  )
}

export default StepCard
