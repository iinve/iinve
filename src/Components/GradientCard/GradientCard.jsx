"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Style from './GradientCard.module.scss';

const GradientCard = (props) => {
  const { cardKey, heading, sub_heading, image, style, isMobile} = props;

  function getClassName() {
    switch (true) {
      case [1, 3].includes(cardKey):
        return 'top_to_bottom';
      case [2, 4, 5].includes(cardKey):
        return 'bottom_to_top';
      default:
        return '';
    }
  }

  const className = getClassName();
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`${Style.GradientCard} ${Style[className]}`}
      style={{...style, height: isMobile ? '250px' : 'auto', marginBottom: isMobile ? '20px' : '0px'}}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      transition={{
        duration: 0.5,
        delay: cardKey * 0.1
      }}
      viewport={{ once: true }}
    >
      <div className={Style.head}>
        <h4>{heading}</h4>
        <p>{sub_heading}</p>
      </div>
      <div className={Style.image_container} style={image?.style}>
        <Image src={image?.url} width={600} height={600} alt='Bento-image' />
      </div>
    </motion.div>
  );
}

export default GradientCard;
