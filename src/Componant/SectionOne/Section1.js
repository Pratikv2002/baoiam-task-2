import React from "react";
import "./Section1.css";
import sectionOneImg from "./sectionOneImg.svg";

export default function Section1() {
  return (
    <section className="section1">
      <div className="section1Div">
        <div className="sectionDivA">
          <h1>BAOIAM</h1>
          <h3>Help Students achieve there Dreams</h3>
          <h5>
            Accelerate learing with proven digital math and reading programs
          </h5>
          <div className="explore">
            <h4>Explore:</h4>
            <div className="exploreDiv">
              <a href="">Class One</a>
              <a href="">Class Two</a>
              <a href="">Class Three</a>
            </div>
          </div>
        </div>
        <div className="sectionDivB">
          <img src={sectionOneImg} alt="" srcSet="" />
        </div>
      </div>
    </section>
  );
}
