import React from "react";

const Info = () => {
  return (
    <div id="info">
      <h1>Info</h1>
      <p>
        StarChart is a 3D star map built in JavaScript with React, React Three
        Fiber, and D3.js. There are many star map apps designed as interactive
        pocket guides for naked eye astronomy--these often come with a steep
        learning curve to their granular options. Similarly, the gyroscoping
        features that makes these apps great utilities for identifying local
        astral bodies can be a disadvantageous to users aiming to learn the
        relative positions of constellations to each other because of the
        limited view and buouy-like movement. StarChart provides a steady,
        self-guided study aid for learning the relative positions of 88
        officially recognized constellations.{" "}
      </p>
      <p>
        Current star map defaults to the 1000 nearest starts to Earth. In the
        future layers may be added to accomodate the full{" "}
        <a href="https://github.com/astronexus/HYG-Database" target="_blank">
          HYG Database dataset
        </a>{" "}
        used in this project.
      </p>
    </div>
  );
};

export default Info;
