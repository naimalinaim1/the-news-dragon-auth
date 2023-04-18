import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../shared/RightNav/RightNav";

const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={3}>Left Nav</Col>
        <Col lg={6}>main coming soon....</Col>
        <Col lg={3}>
          <RightNav />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
