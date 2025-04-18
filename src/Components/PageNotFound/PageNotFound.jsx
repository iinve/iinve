'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "../../lib/assets";
import ActionButton from "../../ProUI/ActionButton/ActionButton";

const PageNotFound = () => {
  return (
    <motion.div
      className="container mx-auto text-center h-screen flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div className="relative">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={ASSETS.world_icon}
              width={430}
              height={430}
              alt="404"
              priority={true}
              className="mx-auto my-[-130px] opacity-70 w-[100%] max-w-[430px] h-auto"
            />
            <div className="absolute inset-0 bg-primary opacity-30 blur-[100px] -z-1 rounded-full" />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Oh! You’ve Lost the viiew! 👀
        </motion.h1>
        <motion.p
          className="text-base md:text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          This page is out of the viiew’s showcase.
        </motion.p>
        <ActionButton
          variant={"bordered"}
          size="lg"
          className="bg-dark_gray border border-primary !px-12 mt-4"
        >
          <Link href="/">
          Go to Viiew
          </Link>
        </ActionButton>
      </motion.div>
    </motion.div>
  );
};

export default PageNotFound;
