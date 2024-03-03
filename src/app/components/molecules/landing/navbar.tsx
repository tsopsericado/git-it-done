"use client";

import Link from "next/link";
import React from "react";
// import { signOut, useSession } from "next-auth/react";
import { links } from "@/app/lib";
import DarkModeToggle from "@/app/components/atom/DarkModeToggle/DarkModeToggle";



const Navbar = () => {
  // const session = useSession();
  // const { data: session } = useSession()

  return (
    <div className="container mx-auto px-6 py-6 shadow-xl flex justify-between items-center">
      <Link href="/" className="font-bold text-2xl lg:text-4xl">
        G.I-D
      </Link>

      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:block">
        <li className="inline-flex">
          <DarkModeToggle />
          {links.map((link) => (
            <Link key={link.id} href={link.url} className="px-4 hover:text-gray-800">
              {link.title}
            </Link>
          ))}
        </li>
        {/* {session.status === "authenticated" && ( */}
        <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-2 px-4 rounded-md cursor-pointer font-medium">
          Logout
        </button>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
