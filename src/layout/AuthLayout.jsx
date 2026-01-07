import React from "react";

import authImage from "../assets/authImage.jpg";
import { Outlet } from "react-router";
import Container from "../components/Container/Container";
import Logo from "../components/Logo/Logo";

const AuthLayout = () => {
  return (
    <div className="bg-[#393737]">
      <Container>
        <Logo />
        <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center min-h-screen items-center">
          <div className="flex-1">
            <img
              className={" object-cover w-full rounded-2xl"}
              src={authImage}
              alt=""
            />
          </div>

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthLayout;
