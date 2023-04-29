import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../shared/RightNav/RightNav";
import LeftNav from "../shared/LeftNav/LeftNav";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={3}>
          <LeftNav />
        </Col>
        <Col lg={6}>
          <Outlet />
        </Col>
        <Col lg={3}>
          <RightNav />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
