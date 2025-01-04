"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // For icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link href="/">Daniel Oliveira</Link>
        </h1>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <a className="cursor-pointer">
              <AiOutlineClose size={28} />
            </a>
          ) : (
            <a className="cursor-pointer">
              <AiOutlineMenu size={28} />
            </a>
          )}
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-gray-900 text-center md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li className="p-2 md:p-0">
              <Link
                href="/"
                className="hover:underline"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="p-2 md:p-0">
              <Link
                href="/bio"
                className="hover:underline"
                onClick={handleLinkClick}
              >
                Bio
              </Link>
            </li>
            <li className="p-2 md:p-0">
              <Link
                href="/startup-tools-list"
                className="hover:underline"
                onClick={handleLinkClick}
              >
                Startup Tools
              </Link>
            </li>
            <li className="p-2 md:p-0">
              <Link
                href="/danieloliveirasocialmedia"
                className="hover:underline"
                onClick={handleLinkClick}
              >
                Social Media
              </Link>
            </li>
            <li className="p-2 md:p-0">
              <Link
                href="/web"
                className="hover:underline"
                onClick={handleLinkClick}
              >
                Web Design
              </Link>
            </li>
            <li className="p-2 md:p-0">
              <Link
                href="/press"
                className="hover:underline"
                onClick={handleLinkClick}
              >
                Featured
              </Link>
            </li>
            <li className="p-2 md:p-0">
              <Link
                href="/contact"
                className="hover:underline"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
