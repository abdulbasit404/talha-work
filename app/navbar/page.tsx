"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function page() {
  const pathName = usePathname();
  const links = [
    {
      href: "/",
      label: "Find Jobs",
    },
    {
      href: "/top-companies",
      label: "Top Companies",
    },
    {
      href: "/job-tracker",
      label: "Job Tracker",
    },
    {
      href: "/my-calendar",
      label: "My Calendar",
    },
    {
      href: "/documents",
      label: "Documents",
    },
    {
      href: "/messages",
      label: "Messages",
    },
    {
      href: "/notifications",
      label: "Notifications",
    },
  ];
  const [navbar, showNavbar] = useState(false);
  return (
    <>
      <div className="bg-white flex justify-between items-center px-8 py-1 drop-shadow-[0_0_2px_gray]">
        <div className="">
          <Image src="/logo-2.png" width={60} height={60} alt="Navbar Logo" />
        </div>

        <div className="hidden xl:flex xl:gap-4">
          {links.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className={
                pathName === e.href ? " text-blue-500" : "text-gray-700"
              }
            >
              {e.label}
            </Link>
          ))}
        </div>
        <div className=" gap-3 hidden sm:flex">
          <div className="relative w-64">
            <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-4 w-7 h-7 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-10 pr-4 rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
            />
          </div>
          <button className="bg-blue-500 py-3 rounded-md text-white px-4">
            Resume Builder
          </button>
          <Image
            src="/user-logo.png"
            width={50}
            height={50}
            alt="Navbar Logo"
            className="rounded-full object-contain"
            onClick={() => showNavbar(false)}
          />
        </div>

        <div className=" xl:hidden flex justify-center items-center">
          {navbar ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="text-2xl text-blue-800"
              onClick={() => showNavbar(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl text-blue-800"
              onClick={() => showNavbar(true)}
            />
          )}
        </div>
      </div>

      {navbar && (
        <div className=" bg-white shadow-md flex flex-col gap-5 py-5 w-full top-17 text-center p-10">
          {links.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className={
                pathName === e.href ? "text-blue-500" : "text-gray-700"
              }
            >
              {e.label}
            </Link>
          ))}

          <div className="relative sm:hidden w-full">
            <MagnifyingGlassIcon className="absolute left-2  top-1/2 transform -translate-y-4 w-7 h-7 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-10 pr-4 rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
            />
          </div>
          <div className="flex gap-2 sm:hidden">
            <button className="w-full bg-blue-500 rounded-md text-white px-4 py-3">
              Resume Builder
            </button>
            <Image
              src="/user-logo.png"
              width={50}
              height={50}
              alt="Navbar Logo"
              className="rounded-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default page;
