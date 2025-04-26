import React from 'react'
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { formatPriceWithComma } from 'utils/utils';

const DailyPrice = ({ price }) => {
  const { t } = useTranslation();
  
  return (
    <div className="rounded-lg p-4 w-[90%] mx-auto mt-4">
      <h4 className="text-2xl text-center mb-4">{t("gold_rate")}</h4>

      <div className="grid grid-cols-2 gap-4">
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
            <h2 className="text-2xl font-bold text-[#ffb300]">₹{formatPriceWithComma(item.price)}</h2>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4">
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
            <h2 className="text-2xl font-bold text-[#ffb300]">₹{formatPriceWithComma(price[2].price)}</h2>
            <span>{price[2].label}</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default DailyPrice;
