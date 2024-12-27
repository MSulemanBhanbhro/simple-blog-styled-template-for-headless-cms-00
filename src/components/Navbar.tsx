'use client'
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between py-4 px-6 border-b-2 border-accentDarkSecondary sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      {/* Logo */}
      <div className="flex items-center">
        <Link href={"/"} className="text-3xl text-dark dark:text-light font-bold">
          M<span className="text-accentDarkPrimary">Suleman</span>
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-12 font-bold text-xl uppercase">
        <Navlink />
        <ThemeToggle />
      </div>

      {/* Mobile menu icon (hamburger) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-3xl">
          {isOpen ? (
            <span className="text-dark dark:text-light">X</span> // Close icon
          ) : (
            <span className="text-dark dark:text-light">☰</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-background/90 flex flex-col items-center justify-center gap-6 z-20">
          <Navlink />
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}

function Navlink() {
  return (
    <nav className="flex flex-col md:flex-row items-center gap-8 text-xl font-semibold">
      <ul className="flex flex-col md:flex-row items-center gap-8 text-xl md:text-base font-semibold">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/"}>About Us</Link></li>
        <li><Link href={"/"}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}
