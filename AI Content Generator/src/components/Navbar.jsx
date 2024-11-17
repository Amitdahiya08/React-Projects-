import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font px-[100px]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl cursor-pointer">AI Content Generator</span>
          </Link>
          
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {/* Navigation Links */}
            <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
            <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer">About</Link>
            <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer">Product</Link>
            <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer">Contact</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
