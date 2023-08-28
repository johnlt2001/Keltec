import { useState } from "react";
import { navLinks } from "../constants";
import { NavLink } from "@remix-run/react";
import ContactButton from "./ContactButton";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src="/Logo_Keltec-1400x368-green-600.png"
        alt="Logo"
        className="w-[350px] h-[90px]"
      />
      <ul className="list-none lg:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10 "
            } `}
          >
            <NavLink to={`${nav.link}`}>{nav.title}</NavLink>
          </li>
        ))}
        <ContactButton />
      </ul>
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img
          src={!toggle ? "/menu.svg" : "/close.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-gray-500 ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4 "
              } `}
            >
              <NavLink to={`${nav.link}`}>{nav.title}</NavLink>
            </li>
          ))}
          <ContactButton />
        </ul>
      </div>
    </nav>
  );
}
