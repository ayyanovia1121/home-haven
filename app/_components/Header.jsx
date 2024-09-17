'use client'
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

const Header = () => {
  const path = usePathname();

  useEffect(() => {
    console.log(path)
  })
  return (
    <div className="p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white">
      <div className="flex gap-12 items-center">
        <div className="flex gap-2">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <p className="font-bold text-primary">HomeHaven.com</p>
        </div>
        <ul className="hidden md:flex gap-10">
          <Link href="/">
            <li
              className={`'hover:text-primary font-medium text-sm cursor-pointer'${path=="/"&&" text-primary"}`}
            >
              Sale
            </li>
          </Link>
          <li className="hover:text-primary font-medium text-sm cursor-pointer">
            Rent
          </li>
          <li className="hover:text-primary font-medium text-sm cursor-pointer">
            Our Agent
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <Button variant="default" className="rounded-full flex gap-2">
          <Plus className="w-4 h-4" />
          Post an Ad
        </Button>
        <Button variant="outline" className="rounded-full flex gap-2">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Header