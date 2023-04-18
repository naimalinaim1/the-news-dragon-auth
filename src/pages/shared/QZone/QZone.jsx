import React from "react";
import zone1 from "../../../assets/qZone1.png";
import zone2 from "../../../assets/qZone2.png";
import zone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-secondary bg-opacity-10 mt-5 p-3 rounded">
      <h4 className="mb-3">Q-Zone</h4>
      <div>
        <img className="mb-3 img-fluid" src={zone1} alt="zone image" />
        <img className="mb-3 img-fluid" src={zone2} alt="zone image" />
        <img className="mb-3 img-fluid" src={zone3} alt="zone image" />
      </div>
    </div>
  );
};

export default QZone;
