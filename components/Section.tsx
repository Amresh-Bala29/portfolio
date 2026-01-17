"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export const Section = ({ children, id, className = "", delay = 0 }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};
