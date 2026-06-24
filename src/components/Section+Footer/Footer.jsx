import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="Title">
          Lorem Ipsum is simply dummy text <br /> of the printing and
          typesetting
          <br />
          industry.
        </p>
        <a href="">
          <img className="Facebook" src="./Group 23.png" alt="" />
        </a>
        <a href="">
          <img className="Instagram" src="./Group 24.png" alt="" />
        </a>
        <a href="">
          <img className="Google" src="./search 1.png" alt="" />
        </a>
      </div>

      <div className="Home">
        <a href="">
          <h2>Home</h2>
          <h4>Booking</h4>
          <h4>Facilities</h4>
          <h4>Location</h4>
          <h4>Contact</h4>
        </a>
      </div>
      <div className="Help">
        <a href="">
          <h2>Help</h2>
          <h4>About Us</h4>
          <h4>Help center</h4>
          <h4>Privacy policy</h4>
          <h4>FAQs</h4>
        </a>
      </div>

      <div className="App">
        <a href="">
          <h2>Get the app</h2>
          <h4>iOS app</h4>
          <h4>Android app</h4>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
