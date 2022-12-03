import React from "react";
import HomeSplash from "../assets/cafesplash.jpg";
import "./Pages.css";

export default function Home() {
  return (
    <div className="homepage">
      <div className="home-splash">{/* <img src={HomeSplash} /> */}</div>
      <h3>Tea Time | Cafe | Study | Lounge</h3>
      <p>Welcome to the homepage.</p>
    </div>
  );
}
