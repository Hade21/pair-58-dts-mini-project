import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Logo } from "../../../assets";
import {
  faBell,
  faCaretDown,
  faGift,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, logout } from "../../../authentication/firebase";
import { setLoggedUser } from "../../../app/userReducer/userSlice";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const [dropdown, setDropdown] = useState(false);
  const [user] = useAuthState(auth);

  const logoutFunc = async () => {
    try {
      const user = await logout();
      dispatch(setLoggedUser(user));
      setDropdown(!dropdown);
    } catch (error) {
      console.log(error);
    }
  };

  const loginFunc = () => {
    navigate("/login");
  };

  return (
    <header className="bg-hitam px-[60px] py-6 text-putih">
      <div className="wrapper flex justify-between">
        <div className="left-side flex gap-12 items-center w-1/2">
          <img src={Logo} alt="logo" className="w-9 h-11" />
          <ul className="hidden md:flex gap-5 font-Inter text-putih text-s4">
            <li className="font-black cursor-pointer">Home</li>
            <li className="font-medium cursor-pointer">Series</li>
            <li className="font-medium cursor-pointer">Movies</li>
            <li className="font-medium cursor-pointer">In Theaters</li>
          </ul>
        </div>
        <div className="right-side text-putih flex justify-end gap-5 items-center w-1/2">
          <div className="search">
            <FontAwesomeIcon icon={faSearch} color="white" size="lg" />
          </div>
          <p className="font-Inter font-normal text-putih text-s4">
            {user ? user.email : "Guest"}
          </p>
          <div className="gift hidden md:block">
            <FontAwesomeIcon icon={faGift} color="white" size="lg" />
          </div>
          <div className="gift hidden md:block">
            <FontAwesomeIcon icon={faBell} color="white" size="lg" />
          </div>
          <div className="gift hidden md:block">
            <img src={Avatar} alt="avatar" className="w-8 h-8" />
          </div>
          <div className="gift hidden md:block relative cursor-pointer">
            <FontAwesomeIcon
              icon={faCaretDown}
              color="white"
              size="lg"
              onClick={() => {
                setDropdown(!dropdown);
              }}
            />
            {user ? (
              <p
                className={`logout font-Inter font-medium tracking-widest px-5 py-3 bg-slate-900 absolute top-8 right-0 shadow-md shadow-slate-300 rounded-lg z-10 ${
                  dropdown ? "block" : "hidden"
                }`}
                onClick={logoutFunc}
              >
                LOGOUT
              </p>
            ) : (
              <p
                className={`logout font-Inter font-medium tracking-widest px-5 py-3 bg-slate-900 absolute top-8 right-0 shadow-md shadow-slate-300 rounded-lg z-10 ${
                  dropdown ? "block" : "hidden"
                }`}
                onClick={loginFunc}
              >
                LOGIN
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
