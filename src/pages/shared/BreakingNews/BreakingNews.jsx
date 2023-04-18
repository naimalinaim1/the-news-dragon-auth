import React from "react";
import { Button } from "react-bootstrap";

const BreakingNews = () => {
  return (
    <div className="mt-5 d-flex  justify-content-center align-items-center bg-secondary bg-opacity-25 rounded py-3 px-3">
      <Button variant="danger" className="me-4">
        Latest
      </Button>
      <marquee className="fs-4">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </marquee>
    </div>
  );
};

export default BreakingNews;
