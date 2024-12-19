"use client"


import Image from "next/image";
import Link from "next/link";
import Logo from "@/assects/img/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Footer = () => {

  const pathname = usePathname();
  

  if (pathname === "/dashboard") return null;

  return (
    <footer className="mt-20 dark:bg-gray-900 bg-white border-t-2 dark:border-gray-800 border-gray-100">
      <div className="w-full px-4 py-4 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 border-b-2 border-gray-100 dark:border-gray-800 py-10">
          <h3 className="text-center md:text-left font-raleway w-full sm:w-96 text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-white capitalize">
            Have a Project in Mind? Let&apos;s work together
          </h3>

          <button className="bg-primary text-white hover:bg-primary/80 dark:bg-secondary dark:text-text dark:hover:bg-secondary/80 transition-all duration-300 px-4 py-2 rounded-md text-xl font-semibold font-raleway">
            <Link href="/contact">Let&apos;s Talk</Link>
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1  min-[740px]:grid-cols-2 lg:grid-cols-4 gap-10 border-b-2 border-gray-100 dark:border-gray-800 pb-10">
          {/* Footer Logo */}
          <div className="flex flex-col items-center text-center min-[740px]:items-start min-[740px]:text-left">
            <Link href="/">
              <figure className="flex items-center gap-2 cursor-pointer">
                <Image
                  src={Logo}
                  alt="OptiWebFusion Logo"
                  width={48}
                  height={48}
                  priority
                  quality={100}
                />
                <figcaption className="text-2xl font-semibold font-raleway text-gray-700 dark:text-white">
                  OptiWebFusion
                </figcaption>
              </figure>
            </Link>
            <p className="text-gray-700 dark:text-slate-400 text-base font-montserrat mt-4">
              OptiWebFusion specializes in creating dynamic and tailored web
              solutions, helping businesses grow and succeed in the digital
              landscape.
            </p>

            {/* social media */}
            <div className="flex justify-center items-center gap-2 mt-4">
              <Link
                className="text-white p-2 bg-primary hover:bg-primary/80 duration-700 hover:duration-700 dark:bg-secondary dark:hover:bg-secondary/80 rounded-full dark:text-text"
                href="https://www.facebook.com/optiwebfusion"
                target="_blank"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                className="text-white p-2 bg-primary hover:bg-primary/80 duration-700 hover:duration-700 dark:bg-secondary dark:hover:bg-secondary/80 rounded-full dark:text-text"
                href="https://www.instagram.com/optiwebfusion"
                target="_blank"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                className="text-white p-2 bg-primary hover:bg-primary/80 duration-700 hover:duration-700 dark:bg-secondary dark:hover:bg-secondary/80 rounded-full dark:text-text"
                href="https://x.com/optiwebfusion"
                target="_blank"
              >
                <FaTwitter size={20} />
              </Link>

              <Link
                className="text-white p-2 bg-primary hover:bg-primary/80 duration-700 hover:duration-700 dark:bg-secondary dark:hover:bg-secondary/80 rounded-full dark:text-text"
                href="https://www.linkedin.com/company/optiwebfusion"
                target="_blank"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-3 text-center">
            <h3 className="text-2xl font-semibold font-raleway text-gray-700 dark:text-white">
              Quick Links
            </h3>

            <ul className="mt-4 flex flex-col gap-4">
              <li className="text-lg font-semibold font-raleway text-text dark:text-slate-400 hover:text-primary hover:dark:text-secondary transition-all duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="text-lg font-semibold font-raleway text-text dark:text-slate-400 hover:text-primary hover:dark:text-secondary transition-all duration-300">
                <Link href="/about">About</Link>
              </li>
              <li className="text-lg font-semibold font-raleway text-text dark:text-slate-400 hover:text-primary hover:dark:text-secondary transition-all duration-300">
                <Link href="/services">Services</Link>
              </li>
              <li className="text-lg font-semibold font-raleway text-text dark:text-slate-400 hover:text-primary hover:dark:text-secondary transition-all duration-300">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Office Address */}
          <div className="mt-3  min-[740px]:text-left">
            <h3 className="text-2xl font-semibold font-raleway text-gray-700 dark:text-white">
              Office
            </h3>

            <div className="mt-4 flex flex-col gap-4">
              <a href="https://maps.app.goo.gl/3VE1vNqiHpFLnyi89" target="_blank">
                <span className="text-lg font-semibold font-raleway text-gray-700 dark:text-slate-400">
                  5th Floor, Blue Water Shoping City, Zindabazar, Sylhet,
                  Bangladesh
                </span>
              </a>

              <a href="https://wa.me/+8801913017997" target="_blank">
                <span className="text-lg font-semibold font-raleway text-gray-700 dark:text-slate-400">
                  {" "}
                  +880 1913-017997
                </span>
              </a>

              <a href="mailto:info@optiwebfusion.com" target="_blank">
                <span className="text-lg font-semibold font-raleway text-gray-700 dark:text-slate-400">
                  info@optiwebfusion.com
                </span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-3">
            <h3 className="text-2xl font-semibold font-raleway text-text dark:text-slate-400">
              Subscribe to our Newsletter
            </h3>

            <form className="mt-4 flex items-center gap-2 border-b-2  border-gray-100 dark:border-gray-800 rounded-md pb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent p-2 border-0 outline-none text-lg font-medium text-text dark:text-slate-400"
              />

              <button type="submit" className="bg-primary text-white hover:bg-primary/80 dark:bg-secondary dark:text-text dark:hover:bg-secondary/80 transition-all duration-300 p-2 rounded-md text-lg font-semibold font-raleway">
                <FiSend size={20} />
              </button>
            </form>
          </div>
        </div>


        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 mt-10">
          <span className="text-gray-700 dark:text-slate-400 text-sm font-montserrat">
            &copy; {new Date().getFullYear()} OptiWebFusion. All rights reserved.
          </span>

          <span className="text-gray-700 dark:text-slate-400 text-sm font-montserrat">
            Developed by{" "}
            <Link href="https://www.facebook.com/its.me.shuvoHasan" target="_blank" className="text-primary hover:text-primary/80 dark:text-secondary dark:hover:text-secondary/80 transition-all duration-300">
              CodeWithSaidul
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
