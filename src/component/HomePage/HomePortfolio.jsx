"use client";
import { portfolios } from "@/data/Data.js";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



const HomePortfolio = () => {




  return (
    <div className="mt-40">
      {/* Portfolio Section Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center max-[767px]:gap-5">
        <div>
          <h2 className="text-4xl font-bold text-primary dark:text-secondary font-raleway">
            Our Portfolio
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-montserrat">
            Some of Our{" "}
            <span className="text-primary dark:text-secondary">
              Recent Works
            </span>
          </p>
        </div>

        <div>
          <button className="text-base font-semibold font-montserrat py-2 px-6 bg-primary dark:bg-secondary text-white dark:text-text rounded-full">
            <Link href="/portfolio">See All Projects</Link>
          </button>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1  gap-10 relative">
          {portfolios.slice(0, 4).map((portfolio) => {
            return (
              <motion.div
                key={portfolio.id}
                initial={{ scale: 1, opacity: 1 }}
                whileInView={{ scale: 0.95, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the item is in view
                className={`sticky  top-20 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_0px_2px_0px_rgba(220,220,180,0.3)] p-6 rounded-xl border-2 border-transparent hover:border-primary dark:hover:border-secondary duration-700 hover:duration-700 bg-white hover:bg-slate-50 dark:bg-gray-900 dark:hover:bg-gray-800 min-h-min lg:h-96`}
              >
                {/* Portfolio Content */}
                
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  {/* Portfolio Title */}
                  <Link href={portfolio.link} target="_blank">
                    <h2 className="text-3xl cursor-pointer font-bold text-text dark:text-slate-400 font-raleway mb-7 hover:underline hover:duration-500">
                      <span className="text-primary dark:text-secondary">
                        {portfolio.subTitle}
                      </span>{" "}
                      - {portfolio.title}
                    </h2>
                  </Link>

                  {/* Portfolio Description */}
                  <p className="text-base font-normal font-montserrat text-text dark:text-slate-400">
                    {portfolio.description}
                  </p>

                  {/* Portfolio Technologies */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {portfolio.technologies.map((technology, index) => (
                      <span
                        key={index}
                        className="text-sm font-semibold font-montserrat py-2 px-4 bg-primary text-white dark:text-text hover:bg-primary/90 dark:bg-secondary dark:hover:bg-secondary/90 rounded-full duration-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Portfolio Image */}
                <figure className="w-full lg:w-1/2 order-1 lg:order-2">
                  <Image
                    src={portfolio.image}
                    alt={portfolio.subTitle}
                    className="rounded-xl"
                    width={800}
                    height={500}
                    priority
                    quality={100}
                  />
                </figure>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePortfolio;
