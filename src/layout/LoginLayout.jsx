import React from "react";
import NavBar from "../pages/shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default LoginLayout;
