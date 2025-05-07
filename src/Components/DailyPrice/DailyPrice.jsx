import React from 'react'
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { formatPriceWithComma } from 'utils/utils';

const DailyPrice = ({ price, style, isLightTheme }) => {
  const { t } = useTranslation();
  if(style === 'table'){
    return (
      <div className="rounded-lg md:w-[500px] w-[90%] mx-auto mt-8">
        <h4 className={`text-2xl text-center mb-4 ${isLightTheme ? 'text-black' : 'text-white'}`}>Daily Price</h4>
        <div className={`${isLightTheme ? 'text-black' : 'text-white'}`}>
          {price.map((item, idx)=>(
            <div key={`card-${idx}`} className='flex justify-between border border-[#ffb300] rounded-lg p-2 mb-2'>
              <h4>{item.label}</h4>
              <h4>₹{formatPriceWithComma(Number(item.amount))}</h4>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg p-4 w-[90%] mx-auto mt-4">
      <h4 className="text-2xl text-center mb-4 text-white">Daily Price</h4>

      <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] mx-auto">
        {price?.slice(0, 2).map((item, index) => (
          <motion.div
            key={index}
            animate={{
              scale: [1, 1.04, 1],
              opacity: [1, 0.95, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            className="border border-[#ffb300] rounded-lg p-4 bg-white/10 backdrop-blur-lg text-center"
          >
            <h2 className="text-2xl font-bold text-[#ffb300]">₹{formatPriceWithComma(item.amount)}</h2>
            <span className='text-white'>{item.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 w-full md:w-[60%] mx-auto">
        {price?.[2] && (
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [1, 0.95, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="border border-[#ffb300] rounded-lg p-4 bg-white/10 backdrop-blur-lg text-center"
          >
            <h2 className="text-2xl font-bold text-[#ffb300]">₹{formatPriceWithComma(price[2].amount)}</h2>
            <span className='text-white'>{price[2].label}</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default DailyPrice;
