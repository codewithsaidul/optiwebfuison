"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineAddCircle } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Menus = [
  {
    title: "Home",
    href: "/dashboard",
    icon: <FaHome size={24} color="#fff" />,
  },
  {
    title: "Services",
    href: "/dashboard/services",
    icon: <FaUserGear size={24} color="#fff" />,
  },
  {
    title: "Blog",
    href: "/dashboard/blog",
    icon: <MdOutlineAddCircle size={24} color="#fff" />,
  },
];


const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  console.log(path);

  return (
    <div
      className={`${
        open ? "w-60" : "w-24"
      } bg-gray-800 shadow-[0_4px_12px_rgba(10,10,10,0.9)] h-screen p-4 relative duration-1000`}
    >
      <div className="absolute top-4 -right-2 bg-slate-400 p-1 rounded-full">
        <Image
          src="/img/left-chevron.png"
          alt="arrow"
          width={24}
          height={24}
          onClick={() => setOpen(!open)}
          className={`w-4 h-4 ${!open && "-rotate-180"}`}
        />
      </div>
      <div className="border-b border-gray-700 pb-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image src="/img/logo.png" alt="logo image" width={32} height={32} />
          <h2
            className={`text-lg font-bold text-white ${
              !open && "scale-0"
            } duration-300`}
          >
            OptiWebFusion
          </h2>
        </Link>
      </div>

      <div className="mt-6">
        <div className="flex flex-col gap-5">
          {Menus.map(({ title, href, icon }) => (
            <Link
              href={href}
              key={title + 1}
              className={`flex items-center gap-4 ${path === href && "border border-gray-700 p-1 rounded-xl"}`}
            >
              <span>{icon}</span>
              {/* <Image src={icon} alt={title} width={1000} height={1000} className="w-6 h-6" /> */}
              <span
                className={`text-lg font-bold text-white ${
                  !open && "scale-0"
                } duration-300`}
              >
                {title}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-5 border-t pt-5 border-gray-700">
          <button className="flex items-center gap-3">
            <span>
              <AiOutlineLogout size={24} color="#fff" />
            </span>
            <span
              className={`text-sm font-bold text-white ${
                !open && "scale-0"
              } duration-300`}
            >
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
