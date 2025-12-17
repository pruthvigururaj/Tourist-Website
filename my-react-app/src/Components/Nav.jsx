import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 bg-gray-950 text-white">
        
        {/* Logo */}
        <h1 className="text-3xl font-serif">Traveler</h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex flex-row gap-12 text-xl font-thin">
          {["Home", "About", "Plan", "Stay", "Contact"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer transition-colors duration-300 hover:text-orange-500
              after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px]
              after:w-0 after:bg-orange-500 after:transition-all after:duration-300
              hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-3xl cursor-pointer pr-2"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 text-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-3xl cursor-pointer"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <ul className="flex flex-col gap-8 text-xl font-thin mt-24 px-6">
          {["Home", "About", "Plan", "Stay", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-orange-500 transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Nav;
