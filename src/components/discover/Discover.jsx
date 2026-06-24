import React from "react";
import houuse from "../../assets/houuse.jpg";
import "./Discover.css";

const Discover = () => {
  return (
    <div className="discover">
      <div className="discover__left">
        <img className="houuse" src={houuse} alt="" />
      </div>
      <div className="discover__right">
        <h1>Discover our History</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's{" "}
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="btn">
          <button>click</button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
