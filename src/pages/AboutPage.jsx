import React from "react";
import BackDrop from "../components/BackDrop";
import AboutBG from "../assets/caferelax.jpg";

export default function AboutPage() {
  return (
    <BackDrop background={AboutBG}>
      <div className="about-page">
        <h2>Tea Time - A Cafe for Relaxation</h2>
        <h4>What is Tea Time?</h4>
        <p>Tea Time is more than a place -- it's a time:</p>
        <p>
          That time in the early morning when the light is shining through the
          blinds and little motes of dust are playing in an out of the sunbeams.
        </p>
        <p>
          That time in the mid-afternoon when you've finally gotten away for a
          minute or two in solitude, when all the noise of the hustle and bustle
          of the day's tasks falls away for a few moments.
        </p>
        <p>
          That time in the evening after a long day when you get to sit down and
          crack open a good book, when you can watch the steam twist and dance
          out of your fresh cup of tea.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>Tea Time is a time for tea.</p>
      </div>
    </BackDrop>
  );
}
