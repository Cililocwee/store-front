import React from "react";
import BackDrop from "../components/BackDrop";
import "./Pages.css";
import HomeBG from "../assets/homebackground.jpg";

export default function Home() {
  return (
    <BackDrop background={HomeBG}>
      <div className="homepage">
        <h1>Tea Time</h1>
        <h3>Cafe | Study | Lounge</h3>
        <p>
          Welcome to a brief reprieve from the hustle of your daily life. Come
          in, grab a seat, crack open a book and relax.
        </p>
        <p>We offer delivery within a 5km radius and pick-up any time.</p>
      </div>
    </BackDrop>
  );
}
