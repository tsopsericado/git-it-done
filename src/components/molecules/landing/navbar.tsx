"use client";

import Link from "next/link";
import React from "react";
// import { signOut, useSession } from "next-auth/react";
import { links } from "@/app/lib";
import DarkModeToggle from "@/components/atom/DarkModeToggle/DarkModeToggle";



const Navbar = () => {
  // const session = useSession();
  // const { data: session } = useSession()

  return (
    <div className="md:h-40 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        Get_It_done
      </Link>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} >
            {link.title}
          </Link>
        ))}
        {/* {session.status === "authenticated" && ( */}
        <button className="bg-teal-500 text-white py-2 px-4 rounded-md cursor-pointer font-medium">
          Logout
        </button>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
