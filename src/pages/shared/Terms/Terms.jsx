import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        perferendis minima omnis doloremque expedita impedit beatae modi
        possimus sint blanditiis, iusto laudantium. Obcaecati libero doloribus
        voluptas assumenda excepturi ipsum consectetur?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio minus ex
        dolore vel ipsam fugit doloremque voluptatum, animi quia quibusdam
        deleniti nesciunt id dolores facere cumque repellat, pariatur natus
        consectetur.
      </p>
      <p>
        Go back <Link to="/form/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
