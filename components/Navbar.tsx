"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/yusrilprayoga.svg"
            alt="Car Showroom Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Link href="/Auth" passHref>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={() => {}}
        />
        </Link>
        <UserButton afterSignOutUrl="/"/>
      </nav>
    </header>
  );
};

export default Navbar;
