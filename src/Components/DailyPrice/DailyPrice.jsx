import React from 'react'
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


const DailyPrice = ({price}) => {
  const { t } = useTranslation();
  return (
    <div className="rounded-lg p-4 w-[90%] mx-auto mt-4">
    <h4 className="text-2xl text-center mb-4">{t("gold_rate")}</h4>
    <div className="flex sm:flex-row justify-between gap-4 text-center">
      {price?.map((item, index) => (
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
          className="flex-1 border border-[#ffb300] rounded-lg p-4 bg-white/10 backdrop-blur-lg"
        >
          <span>{item.label}</span>
          <h2 className="text-2xl font-bold text-[#ffb300]">{item.price}</h2>
        </motion.div>
      ))}
    </div>
  </div>
  )
}

export default DailyPrice