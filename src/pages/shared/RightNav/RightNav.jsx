import React from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import FindUs from "../FindUs/FindUs";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button variant="outline-primary w-100 my-3">
        <FaGoogle className="me-2" /> Login With Google
      </Button>
      <Button variant="outline-secondary w-100">
        <FaGithub className="me-2" /> Login With Github
      </Button>
      {/* find us */}
      <FindUs />
      {/* Q zone */}
      <QZone />
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
