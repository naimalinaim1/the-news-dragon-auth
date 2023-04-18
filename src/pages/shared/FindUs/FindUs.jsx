import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-5">
      <h4 className="mb-3">Find Us On</h4>
      <ListGroup>
        <ListGroup.Item>
          <FaFacebook /> Facebook
        </ListGroup.Item>
        <ListGroup.Item>
          <FaTwitter /> Twitter
        </ListGroup.Item>
        <ListGroup.Item>
          <FaInstagram /> Instagram
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default FindUs;
