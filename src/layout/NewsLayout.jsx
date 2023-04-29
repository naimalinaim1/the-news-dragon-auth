import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightNav from "../pages/shared/RightNav/RightNav";
import Header from "../pages/shared/Header/Header";

const NewsLayout = () => {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col lg={9}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewsLayout;
