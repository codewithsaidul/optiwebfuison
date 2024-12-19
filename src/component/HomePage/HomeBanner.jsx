"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// import { FaPlay } from "react-icons/fa6";

const HomeBanner = () => {


  return (
    <div className="mt-20 min-h-screen">
      <motion.div
        initial={{ y: 100, opacity: 0 }} // Initial position (100px below) and opacity 0
        animate={{ y: 0, opacity: 1 }} // Final position (at its original spot) and opacity 1
        transition={{ duration: 2, ease: "easeOut" }} // Controls speed and easing
        className="flex flex-col md:flex-row items-center gap-10"
      >
        {/* ========== Banner Content ========== */}
        <div className="order-2 md:order-1 text-center flex flex-col">
          <h1 className="text-3xl min-[900px]:text-4xl lg:text-6xl my-4 text-gray-700 dark:text-white font-raleway font-semibold">
            Where{" "}
            <span className="text-primary dark:text-secondary">Creativity</span>{" "}
            meets{" "}
            <span className="text-primary dark:text-secondary">Innovation</span>
          </h1>
          <p className="text-sm lg:text-base font-montserrat font-medium text-text dark:text-slate-400">
            We are a team of designers and developers that are passionate about
            creating beautiful and functional websites.
          </p>
          {/* <div className="flex items-stretch justify-center gap-4 mt-4"> */}
          <button className="bg-primary dark:bg-secondary mt-5 text-white font-raleway px-4 py-2 items-stretch  rounded-md duration-500 hover:bg-[#1D5D9BE3]">
            <a
              href="https://calendly.com/optiwebfusion5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Meeting
            </a>
          </button>
          {/* </div> */}
        </div>

        {/* ========== Banner Image ========== */}
        <div className="img__animation order-1 md:order-2">
          <Image
            src="/img/banner.svg"
            alt="Banner Image OptiWebFusion"
            width={1200}
            height={1200}
            priority
            quality={80}
            sizes="(max-width: 600px) 150px, (max-width: 1024px) 300px, 400px"
          />
        </div>

      </motion.div>
    </div>
  );
};

export default HomeBanner;
