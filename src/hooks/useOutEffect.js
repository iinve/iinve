'use client'
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const useOutEffect =(ref)=>{
  const [blur, setBlur]= useState()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start']
  });


  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const blurAmount = latest > 0.7 ? (latest - 0.5) * 10 : 0;
      setBlur(blurAmount);
    });
  }, [scrollYProgress]);
  
  
  const scale = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]); 
  const y = useTransform(scrollYProgress, [0.3, 1], [0, 30]); 
  const x = useTransform(scrollYProgress, [0.5, 1], [0, 30]); 


  return{scale, blur, opacity, y,scrollYProgress,x}
}