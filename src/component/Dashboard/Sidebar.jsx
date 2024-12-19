"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Sidebar = () => {

    const [open, setOpen] = useState(false);

  return (
    <div className={`${open ? 'w-72' : 'w-20'} bg-gray-800 shadow-[0_4px_12px_rgba(10,10,10,0.9)] h-screen py-6 px-6`}>
        <div className='border-b border-gray-700 pb-6'>
            <Link href="/dashboard" className='flex items-center gap-2'>
                <Image src="/img/logo.png" alt='logo image' width={40} height={40} />
                <h2 className='text-xl font-bold text-white'>OptiWebFusion</h2>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar