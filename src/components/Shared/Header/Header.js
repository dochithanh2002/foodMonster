import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../logo.png";
import avatar from "../../../assets/images/user.png";
import { AuthContext } from "../../../context/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="px-6 py-4 navbar lg:px-20 bgcolor-white">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="color-black lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bgcolor-white color-black rounded-box w-52">
            <NavLink to="/foodMonster">
              <li>Trang chủ</li>
            </NavLink>
            <NavLink to="/foodMonster/services">
              <li>Dịch vụ</li>
            </NavLink>
          </ul>
        </div>
        <div className="flex">
          <img className="ml-3 lg:ml-0" src={logo} alt="" />
          <NavLink className="text-xl font-bold btn btn-ghost color-black lg:text-2xl">
            Food Monster
          </NavLink>
        </div>
      </div>
      <div className="hidden navbar-center lg:flex ">
        <ul className="p-0 menu menu-horizontal">
          <NavLink to="/foodMonster" className="mr-4 font-semibold color-black">
            <li>Trang chủ</li>
          </NavLink>
          <NavLink
            to="/foodMonster/services"
            className="mr-4 font-semibold color-black ">
            <li>Dịch vụ</li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <img src={avatar} alt="User" />
              )}
            </div>
          </label>
          {user?.uid ? (
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <NavLink
                  to="/edit-profile"
                  className="justify-between text-black bg-transparent">
                  Profile
                </NavLink>
              </li>
              <li onClick={handleSignOut}>
                <NavLink className="text-black bg-transparent">Logout</NavLink>
              </li>
            </ul>
          ) : (
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bgcolor-white rounded-box w-52">
              <li>
                <NavLink
                  to="/foodMonster/anket"
                  className="bg-transparent text-black ">
                  <li>Anket</li>
                </NavLink>
              </li>
              {/*<li><NavLink to="/signup" className="text-black bg-transparent">Sign Up</NavLink></li>*/}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
