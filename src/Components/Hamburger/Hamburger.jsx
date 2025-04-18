"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Style from './Hamburger.module.scss';

const Hamburger = ({ navItems }) => {
  const [isActive, setIsActive] = useState(false);
  const [inView, setInView] = useState(false);
  const handleClickHamburger = () => {
    setIsActive(!isActive);
    if (typeof window !== "undefined") {
      document.body.classList.toggle('overflow-hidden');
    }
    if (!isActive) {
      setInView(true);
    } else {
      setInView(false);
    }

  };
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        document.body.classList.remove('overflow-hidden');
      }
    }
  }, [])
  return (
    <div className={Style.Hamburger}>
      <div className={Style.nav} onClick={handleClickHamburger}>
        <input type="checkbox" checked={isActive} />
        <svg>
          <use href="#menu" />
          <use href="#menu" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56" id="menu">
            <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
          </symbol>
        </svg>
      </div>
      <div
        className={`${Style.Hamburger_content} ${isActive ? Style.active : ''} ${inView ? Style.wave : ''}`}
      >
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: isActive ? 1 : 0 }}>
          {navItems.map((menu, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.1 }}
              onClick={handleClickHamburger}
            >
              <Link href={menu.link}>{menu.name}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Hamburger;
