import "./Banner.css";

import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import fifth from "../../assets/fifth.png";
import sixth from "../../assets/sixth.png";
import seventh from "../../assets/seventh.png";
import eight from "../../assets/eight.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-left">
        <h2>
          We do our best <br />
          facilities provide you
        </h2>

        <p>
          Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy
        </p>

        <button>Contact Now</button>
      </div>

      <div className="banner-right">
        <div className="card">
          <img src={first} alt="" />
          <p>Private Workspace</p>
        </div>

        <div className="card">
          <img src={second} alt="" />
          <p>Parking Area</p>
        </div>

        <div className="card">
          <img src={third} alt="" />
          <p>Breakfast</p>
        </div>

        <div className="card">
          <img src={fourth} alt="" />
          <p>Free Wifi</p>
        </div>

        <div className="card">
          <img src={fifth} alt="" />
          <p>Free Electricity</p>
        </div>

        <div className="card">
          <img src={sixth} alt="" />
          <p>Swimming Pool</p>
        </div>

        <div className="card">
          <img src={seventh} alt="" />
          <p>Exercise Space</p>
        </div>

        <div className="card">
          <img src={eight} alt="" />
          <p>Other Service</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;