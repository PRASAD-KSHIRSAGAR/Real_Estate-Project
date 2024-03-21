import React from "react";
import About from "../../Subcomponents/About";

function AboutUs() {
  return (
    <>
      <section id="aboutPage" className="page">
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
            <h3>Your peace of mind, our priority</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              odio soluta harum voluptas a consectetur. Odit ad necessitatibus
              illo et?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia sit
              consectetur eaque ipsum, quibusdam, libero fuga laborum aperiam
              amet asperiores neque ad? Officiis veritatis voluptatem temporibus
              nihil dolores nesciunt optio!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              autem fuga esse.
            </p>
          </div>
        </div>
        <About/>
      </section>
    </>
  );
}

export default AboutUs;
