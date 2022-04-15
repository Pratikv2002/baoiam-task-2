import React from "react";
import "./Section4.css";
export default function Section4() {
  return (
    <section className="Section4">
        <div className="Section4Div">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className=" mainBox carousel-inner">
            <div className="carousel-item active">
              <div className="SlideBox">
              <h2>why do <span>Administrators</span> love BAOIAM?</h2>
                <video controls ><source src="https://www.youtube.com/watch?v=NJWIkZkopWI&list=RDMM&index=12" type="video/mp4"/></video>
              </div>
            </div>
            <div className=" carousel-item">
              <div className="SlideBox">
              <h2>why do <span>Teacher</span> love BAOIAM?</h2>
              <video controls ><source src="https://www.youtube.com/watch?v=NJWIkZkopWI&list=RDMM&index=12" type="video/mp4"/></video>
              </div>
            </div>
            <div className="carousel-item">
              <div className="SlideBox">
              <h2>why do <span>Student</span> love BAOIAM ?</h2>
              <video controls ><source src="https://www.youtube.com/watch?v=NJWIkZkopWI&list=RDMM&index=12" type="video/mp4"/></video>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </section>
  );
}
