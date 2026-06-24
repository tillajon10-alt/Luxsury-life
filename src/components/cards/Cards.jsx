import React from "react";
import "./Cards.css";
import img from "../../assets/image.png"
import fromimg from "../../assets/imagee.png"
import fromimgg from "../../assets/imageee.png"



const Cards = () => {
  return (
    <div className="cards-wrapper">
      <h1>Our most popular Hotels</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <div className="cards-container">

        <div className="card">
          <img src={img} alt="" />
          <div className="card-body">
            <span>London NW8 7JT England</span>
            <h2>Danubius Hotel Regents Park</h2>
            <div className="card-footer">
              <p>$200 Per Night</p>
              <p>4.8</p>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={fromimg} alt="" />
          <div className="card-body">
            <span>London NW8 7JT England</span>
            <h2>The Resident Soho</h2>
            <div className="card-footer">
              <p>$200 Per Night</p>
              <p>4.8</p>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={fromimgg}alt="" />
          <div className="card-body">
            <span>London NW8 7JT England</span>
            <h2>London Bridge Hotel</h2>
            <div className="card-footer">
              <p>$200 Per Night</p>
              <p>4.8</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;