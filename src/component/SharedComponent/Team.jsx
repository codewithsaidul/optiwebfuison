"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import { teamMembers } from "@/data/Data.js";

const TeamMembers = () => {
  return (
    <div className="my-20 text-white text-4xl">
      {/* Team Title */}
      <div className="w-full md:w-2/4">
        <h2 className="text-4xl font-raleway text-primary dark:text-secondary font-bold">
          Our Team
        </h2>
        <p className="text-base font-montserrat text-text dark:text-slate-300 font-medium">
          Get to know our knowledgeable Team at Optiwebfusion.{" "}
          <span className="block">
            A Driven team of experts committed to providing creative digital
            solutions for the expansion of your company.
          </span>
        </p>
      </div>

      {/* Team Members Container  */}
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper mt-10"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide
            key={index}
            className="relative group bg-white rounded-lg dark:bg-gray-800 shadow-xl"
          >
            <figure>
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={400}
                className="rounded-lg h-96 w-full object-cover"
                quality={80}
                sizes="(max-width: 600px) 150px, (max-width: 1024px) 300px, 400px"
              />
            </figure>
            <div className="absolute bottom-0 left-0 w-full text-center dark:border-secondary  py-2 px-4 bg-primary hover:bg-primary/95 dark:bg-secondary hover:dark:bg-secondary/95  duration-500  hover:duration-500 rounded-lg">
              <h3 className="text-white dark:text-text text-2xl font-bold">
                {member.name}
              </h3>
              <p className="text-white dark:text-text text-sm">
                {member.designation}
              </p>
            </div>

            <div className="absolute mr-1 p-4 top-1/2 right-0 -translate-y-1/2  max-w-max  flex flex-col gap-6 items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 duration-500  hover:duration-500 rounded-lg">
              {member.social.map((social, index) => {
                return (
                  <a href={social.link} target="_blank" key={index}>
                    <social.icon size={24} />
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamMembers;
