import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 dark:bg-black p-5 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Site Name */}
        <h1 className="text-3xl font-bold text-white font-mono">FounZz</h1>
        
        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`fixed top-16 inset-0 bg-black bg-opacity-90 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:static md:bg-transparent md:opacity-100 md:translate-x-0 md:flex md:space-x-10 text-xl font-mono ml-10 md:ml-0`}
        >
          <li className="p-4">
            <Link
              href="/"
              className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out hover:underline"
              onClick={toggleMenu} // Close menu on link click
            >
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/project"
              className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out hover:underline"
              onClick={toggleMenu} // Close menu on link click
            >
              Project
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/about"
              className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out hover:underline"
              onClick={toggleMenu} // Close menu on link click
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
