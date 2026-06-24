import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div>
      <div className="Section">
        <div className="Section-left">
          <img className="Section-img1" src="./Sprig-reverse.png" alt="" />
          <img className="Section-img2" src="./Sprig.png" alt="" />
          <p className="Section-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br /> Ipsum has been the industry's standard dummy
            Lorem Ipsum is simply dummy text <br /> of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard <br /> dummy Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
          </p>
          <h2 className="Section-Name">Alexandr Ivchenko </h2>
          <p className="Section-job">Businessman</p>
        </div>
        <div className="Section-right">
          <img className="Section-right--img" src="./Man.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section;
