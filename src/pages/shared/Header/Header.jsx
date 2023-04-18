import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import BreakingNews from "../BreakingNews/BreakingNews";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className="container">
      {/* top header */}
      <div className="text-center mt-4">
        <img src={logo} alt="dragon news" />
        <p className="text-secondary my-1 fs-5">
          Journalism Without Fear or Favour
        </p>
        <p className="fs-5 text-secondary">
          {moment().format("dddd, MMMM  YYYY")}
        </p>
      </div>
      {/* breaking news */}
      <BreakingNews />

      {/* top nav bar */}
      <NavBar />
    </header>
  );
};

export default Header;
