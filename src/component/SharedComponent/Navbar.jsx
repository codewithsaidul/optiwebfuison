"use client";

import Image from "next/image";
// import logo from "/img/logo.png";
import Link from "next/link";

import "@/app/globals.css";
import { usePathname } from "next/navigation";
import { IoClose, IoSunnyOutline } from "react-icons/io5";
import {
  FaBarsStaggered,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {

  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('');

   // Initialize theme state from localStorage
   useEffect(() => {
    // Check for saved theme in localStorage
      const savedTheme = localStorage.getItem('theme'); // Log the saved theme
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.querySelector('html').setAttribute('data-theme', 'dark');
    }
  }, []);



  // Apply theme to document
  useEffect(() => {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const Links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 shadow-md dark:bg-gray-900 bg-white`}
    >
      <nav className="flex items-center justify-between  w-full  px-4 py-4 md:px-12 lg:px-24">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/img/logo.png"
            alt="OptiWebFusion"
            width={48}
            height={48}
            quality={100}
            priority
          />

          <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary font-raleway transition-all duration-300">
            OptiWebFusion
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="flex items-center gap-10">
          <ul className="hidden lg:flex  flex-row justify-between items-center gap-8 m-0 p-0">
            {Links.map((link) => (
              <li key={link.name} className="relative">
                <Link
                  href={link.path}
                  className={`${
                    path === link.path
                      ? "text-primary dark:text-secondary font-bold text-xl font-raleway before__effect dark:darkbefore__effect active"
                      : "before__effect dark:darkbefore__effect text-xl font-raleway dark:text-white text-text  font-semibold hover:text-primary dark:hover:text-secondary transition-all duration-300"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Desktop Navigation Links */}

        {/* Mobile Navigation Links */}
        <div
          className={`absolute top-0 right-0 w-60 h-screen dark:bg-gray-900 bg-white shadow-md duration-700 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-all duration-70`}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer absolute top-0 right-0 m-2 w-10 h-10 flex items-center justify-center bg-primary rounded-full text-white hover:bg-[#1D5D9BE6] transition-all duration-300 lg:hidden"
          >
            <IoClose size={20} />
          </div>

          <div className="mt-10">
            <a href="/" className="flex flex-col items-center gap-2">
              <Image
                src="/img/logo.png"
                alt="OptiWebFusion"
                width={48}
                height={48}
                quality={100}
                priority
              />
              <span className="text-2xl font-bold text-primary font-raleway hover:text-secondary transition-all duration-300">
                OptiWebFusion
              </span>
            </a>
          </div>

          <hr className="border-b border-gray-300 dark:border-gray-700 my-5 w-4/5 mx-auto" />

          <ul className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mt-4 p-0">
            {Links.map((link) => (
              <li
                key={link.name}
                className="relative"
                onClick={() => setIsOpen(false)}
              >
                <Link
                  href={link.path}
                  className={`text-base font-raleway pl-4 font-semibold text-text hover:text-primary dark:text-white dark:hover:text-secondary transition-all duration-300 after__effect ${
                    path === link.path && "active after__effect textCollor"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <hr className="border-b border-gray-300 dark:border-gray-700 my-10 w-4/5 mx-auto" />

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href="https://www.facebook.com/optiwebfusion"
              target="_blank"
              className="hover:text-primary transition-all duration-300 text-text"
            >
              <FaFacebook size={24} />
            </a>

            <a
              href="https://www.instagram.com/optiwebfusion"
              target="_blank"
              className="hover:text-primary transition-all duration-300 text-text   "
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.linkedin.com/company/optiwebfusion"
              target="_blank"
              className="hover:text-primary transition-all duration-300 text-text"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.twitter.com/optiwebfusion"
              target="_blank"
              className="hover:text-primary transition-all duration-300 text-text"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Button */}

        <div className="flex items-center gap-2">
          <div>
            <button
              onClick={toggleTheme}
              className={`${theme === "dark" ? "text-white" : "text-text"}`}
            >
              {theme === "dark" ? (
                <IoSunnyOutline size={24} />
              ) : (
                <FaRegMoon size={24} />
              )}
            </button>
          </div>
          <div className="lg:hidden w-10 h-10 flex items-center justify-center bg-primary hover:bg-[#1D5D9BE6] transition-all duration-300 rounded-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-raleway font-semibold text-white transition-all duration-300"
            >
              <FaBarsStaggered size={20} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
