"use client"

import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div 
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-[80] bg-primary"
      initial={{x:"100%", width:"100%"}}
      animate={{x:"0%", width: "0%"}}
      transition={{duration: 0.8, ease: "easeInOut"}}
      exit={{x: ["0%", "100%"], width: ["0%", "100%"]}}
       />


      <motion.div 
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-[70] bg-black"
      initial={{x:"100%", width:"100%"}}
      animate={{x:"0%", width: "0%"}}
      transition={{delay: 0.2, duration: 0.8, ease: "easeInOut"}}
       />


      <motion.div 
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-[60] bg-secondary"
      initial={{x:"100%", width:"100%"}}
      animate={{x:"0%", width: "0%"}}
      transition={{delay: 0.4, duration: 0.8, ease: "easeInOut"}}
       />
    </>
  );
};

export default TransitionEffect;