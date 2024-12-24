"use client"

import Sidebar from "@/component/Dashboard/Sidebar";
import { useState } from "react";



export default function DashboardLayout({ children }) {

  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
        {/* <meta name="description" content={metadata.description} /> */}
      </head>

      <body className={`font-montserrat dark:bg-gray-900 bg-white`}>
        <div className="flex">
          <Sidebar open={open} setOpen={setOpen} />
          <main className={`w-full flex-1 ${open && "w-[80%]"}`}>{children}</main>
        </div>
        
      </body>
    </html>
  );
}
