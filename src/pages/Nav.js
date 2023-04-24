import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="mx-5 pt-3">
      <ul className="mx-auto flex justify-between items-center gap-3 font-semibold">
        <h1>Moon Tech</h1>

        <li className="flex mx-auto flex-1 place-items-center max-w-md rounded-full relative">
          <input
            className="shadow-md p-2 pl-5 rounded-full w-full text-sm border-0 focus:ring-0 outline-none"
            type="text"
            name="search"
            id="search"
          />
          <button className="absolute right-5">
            <BiSearchAlt />
          </button>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/top-rated">Top Rated</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <Link to="/">
          <li title="Wishlist" className="bg-indigo-500 p-2 rounded-full">
            <IoIosListBox className="text-white" />
          </li>
        </Link>
        <Link to="/cart">
          <li title="cart" className="bg-indigo-500 p-2 rounded-full">
            <BsFillCartFill className="text-white " />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
