import React from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-100">
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        <img className="w-32" src={Logo} alt="Logo" />

        <ul className="text-[#475569] flex items-center gap-4">
          <li>Home</li>
          <li>Technologi</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-2">
          <button className="px-4 py-2">Warning</button>

          <button className="rounded bg-[#D91B7E] px-4 py-2 text-white">
            Error
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
