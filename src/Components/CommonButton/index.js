"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import styles from "./CommonButton.module.scss";

const CommonButton = ({
  text,
  icon,
  onClick,
  loading = false,
  variant = "primary",
  ...props
}) => {
  return (
    <motion.div
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      className={styles.wrapper}
    >
      <Button
        radius="full"
        size="lg"
        onClick={onClick}
        isLoading={loading}
        endContent={!loading && icon}
        className={`${styles.button} ${styles[variant]} px-8 py-3 text-base`}
        {...props}
      >
        <span className={styles.text}>{text}</span>
        <span className={styles.shimmer}></span>
      </Button>
    </motion.div>
  );
};

export default CommonButton;
