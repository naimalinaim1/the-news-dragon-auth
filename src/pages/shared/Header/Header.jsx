import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <header className="container text-center mt-4">
      <img src={logo} alt="dragon news" />
      <p className="text-secondary my-1 fs-5">
        Journalism Without Fear or Favour
      </p>
      <p className="fs-5 text-secondary">
        {moment().format("dddd, MMMM  YYYY")}
      </p>
    </header>
  );
};

export default Header;
