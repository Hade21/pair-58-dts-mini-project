import React from "react";
import { Avatar, Logo } from "../../../assets";
import {
  faBell,
  faCaretDown,
  faGift,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="bg-hitam px-[60px] py-6 text-putih">
      <div className="wrapper flex justify-between">
        <div className="left-side flex gap-12 items-center w-1/2">
          <img src={Logo} alt="logo" className="w-9 h-11" />
          <ul className="hidden md:flex gap-5 font-Inter text-putih text-s4">
            <li className="font-black cursor-pointer">Home</li>
            <li className="font-medium cursor-pointer">Series</li>
            <li className="font-medium cursor-pointer">Movies</li>
            <li className="font-medium cursor-pointer">New and Popular</li>
            <li className="font-medium cursor-pointer">My List</li>
          </ul>
        </div>
        <div className="right-side text-putih flex justify-end gap-5 items-center w-1/2">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} color="white" size="lg" />
          </div>
          <p className="font-Inter font-normal text-putih text-s4">Irwan</p>
          <div className="gift hidden md:block">
            <FontAwesomeIcon icon={faGift} color="white" size="lg" />
          </div>
          <div className="gift hidden md:block">
            <FontAwesomeIcon icon={faBell} color="white" size="lg" />
          </div>
          <div className="gift hidden md:block">
            <img src={Avatar} alt="avatar" className="w-8 h-8" />
          </div>
          <div className="gift hidden md:block">
            <FontAwesomeIcon icon={faCaretDown} color="white" size="lg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
