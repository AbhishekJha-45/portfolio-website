"use client";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
export default function Header() {
  const NavLinks = [
    {
      title: "About",
      path: "/#about",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Contact Me",
      path: "/contact",
    },
  ];

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 border-b-[1px] border-spacing-0">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-5 lg:px-10 bg-[#121212]">
        <Link
          href={"/"}
          onClick={() => isNavbarOpen && setIsNavbarOpen(false)}
          className="h-10 flex justify-center items-center text-white font-semibold font-serif"
        >
          <Image
            src={"/logo.png"}
            width={180}
            height={20}
            alt="logo"
            className="contain"
          />
        </Link>
        I
        <div className="mobile-menu block md:hidden">
          {!isNavbarOpen ? (
            <button
              className="text-slate-200 flex items-center px-3 py-2 border  rounded border-slate-200 hover:text-white hover:border-white"
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            >
              <MenuIcon className="h-4 w-4" />
            </button>
          ) : (
            <button
              className="text-slate-200 flex items-center px-3 py-2 border  rounded border-slate-200 hover:text-white hover:border-white"
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="text-white flex gap-x-5">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  id={link.path}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavbarOpen ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  );
}
