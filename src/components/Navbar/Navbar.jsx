import React from "react";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/Explore"}>Explore</NavLink>
      <NavLink to={"/services"}>Our Services</NavLink>
      <NavLink to={"/About"}>About</NavLink>
      <NavLink to={"/contribution"}>Contribution</NavLink>
      <NavLink to={"/member"}>Be A Member</NavLink>
      <NavLink to={"/Contact"}>Contact</NavLink>
    </>
  );

  return (
    <div className=" bg-base-300 shadow-md sticky top-0 z-20">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <span
                tabIndex="-1"
                className="menu menu-sm links font-semibold dropdown-content bg-base-100 space-y-3 rounded-box z-10 mt-3 w-52 p-2 shadow">
                {links}
              </span>
            </div>
            <div>
              <Logo />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <span className="menu links font-semibold menu-horizontal px-1 space-x-5">
              {links}
            </span>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
