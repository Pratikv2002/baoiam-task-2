import React from "react";
import "./Section5.css";
import  section5BImg from "./Section5Img1.svg"

export default function Section5() {
  return (
    <section className="Section5">
      <div className="Section5Div">
        <h3>Our math program intelligently adapts to each student</h3>
        <div>
          <div className="Section5DivA">
            <div className="Section5DivAPoint">
              <div className="section5Icon">
                <img
                  src="https://dbl-live-website.imgix.net/o1qanoq3cFSuIN9UVJrTpmi89kHF9HkVl34xCSxt.svg?w=31&h=31"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="section5DivADivB">
                <h5>Build Confidance</h5>
                <p>
                  Immersive, interactive learner-driven math lessons make
                  students more confident and competent.
                </p>
                <a href="">More Info </a>
              </div>
            </div>
            <div className="Section5DivAPoint">
              <div className="section5Icon">
                <img
                  src="	https://dbl-live-website.imgix.net/VngRjyEvk8yq4kRPXKu3QCNaRkM17Aeld3tZ6ZAj.svg?w=31&h=31"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="section5DivADivB">
                <h5>Intelligently Adaptive Learning</h5>
                <p>
                  Adjusts In real time to provide Individualized learning paths
                  for every student.
                </p>
                <a href="">More Info</a>
              </div>
            </div>
            <div className="Section5DivAPoint">
              <div  className="section5Icon">
                <img
                  src="	https://dbl-live-website.imgix.net/Uxn9dHeOBsC0TimN4Vb2vyuKnV760dvS7rlIt71q.svg?w=31&h=31"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="section5DivADivB">
                <h5>Curriculum and standards alignment</h5>
                <p>
                  lessons are designed by teachers, for teachers, and align with
                  all state K-8 math standards
                </p>
                <a href="">More Info</a>
              </div>
            </div>
            <div className="Section5DivAPoint">
              <div  className="section5Icon">
                <img
                  src="https://dbl-live-website.imgix.net/58xTCabusiL6jHOXEzIZ7CRRHjHZoB1EuniDuEgF.svg?w=31&h=31"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="section5DivADivB">
                <h5>Functional screen time </h5>
                <p>
                  Never feel gulty about screen time again with productive
                  lessons students love.
                </p>
                <a href="">More Info</a>
              </div>
            </div>
            <div className="Section5DivAPoint">
              <div className="section5Icon">
                <img
                  src="	https://dbl-live-website.imgix.net/eMWy0d3uKb30OqdUQ8uL75r9vBQdt1hqbPEulDPb.svg?w=31&h=31"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="section5DivADivB">
                <h5>See into the future</h5>
                <p>
                  Preview future student performance and adjust strategy as
                  needed.
                </p>
                <a href="">More Info</a>
              </div>
            </div>
            <div className="Section5DivAPoint">
              <div  className="section5Icon">
                <img 
                  src="	https://dbl-live-website.imgix.net/v6CUPkntgXWamtM8kxN7E02EyZBtlo2nTMFnxpQI.svg?w=31&h=31"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="section5DivADivB">
                <h5>Award-Winning</h5>
                <p>
                  Eduactors give BAOIAM two thumbs up. See what they're saying
                </p>
                <a href="">More Info</a>
              </div>
            </div>
          </div>
          <div className="Section5DivB">
            <div><img src={section5BImg} alt="" /></div>
             <div className="Section5DivBDivA">
               <p>BAOIAM is more than a learning tool, it’s a math program that intelligently adapts to each child, letting them drive their own learning while giving parents and teachers in-the-moment data and valuable insights to ensure success.</p>
                <div className="section5Anchor">
                <a href="#">Request a demo </a>
                <br />
                <a href="#">Try BAOIAM for 14-days </a>
                </div>
                </div>
          </div>
          <div className="section5DivC"> 
            <div><h4>What can BAOIAM do for you?</h4></div>
            <div className="section5DivCa">
              <a href="">Adminstrator </a>
              <a href="">Teacher</a>
              <a href="">Parents or Guardian</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
