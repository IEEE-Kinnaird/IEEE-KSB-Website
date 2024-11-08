import React from "react";
import "./hero.css";
import "./wie.css";
import img from "./Logos/wiepic.jpeg"; // Ensure this image exists
import img1 from "./Logos/pic1.jpg"; // Correct this image path
import img3 from "./Logos/aleeza.jpeg"; // Ensure this image exists
import img4 from "./Logos/Rahemeen.jpeg"; // Ensure this image exists
import "./milestones.css";
import Navbar from "./Navbar";

const WieChapter = () => {
  return (
    <div>
      <Navbar />
      <div className="hero1">
        <div className="hero-text">
          <h1 className="wie">Women in Engineering Chapter</h1>
          <h3>Kinnaird Student Branch</h3>
        </div>
      </div>
      <div className="container12">
        <div className="left-column">
          <img src={img1} alt="Women in Engineering" className="image" />
        </div>
        <div className="right-column">
          <h3>WOMEN IN</h3>
          <h3>ENGINEERING (WIE)</h3>
          <p>
            Women in Engineering have played a pivotal role in shaping the field
            of engineering and technology throughout history. From pioneers like
            Ada Lovelace and Marie Curie to contemporary leaders, women have
            consistently contributed innovative ideas and solutions that have
            transformed industries.
          </p>
          <p>
            The IEEE Women in Engineering (WIE) initiative is dedicated to
            empowering and supporting women in these fields by providing a
            dynamic platform to collaborate and grow. Through various programs
            and resources, IEEE WIE encourages women to excel, fostering an
            inclusive environment that champions diversity and inspires future
            generations of female engineers.
          </p>
        </div>
      </div>
      <div>
        <h2 className="centre">________</h2>
        <h2 className="centre1" style={{ marginBottom: "10px" }}>
          WOMEN IN ENGINEERING KSB
        </h2>
      </div>
      <section className="milestone2">
        <div className="container2">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="section-heading text-center"></div>
            </div>
          </div>

          <div className="milestones-row">
            <div className="single-fact">
              <h2>MISSION</h2>
              <p>
                Our mission is to empower the talented students within our
                all-girls institute by fostering a supportive and inclusive
                environment in engineering and technology. We aim to equip our
                students with resources, mentorship, and opportunities to help
                them thrive as future innovators and leaders.
              </p>
            </div>
            <div className="single-fact">
              <h2>VISION</h2>
              <p>
                Our vision is to cultivate a community where every student is
                inspired and equipped to break barriers in engineering and
                technology. We strive to prepare our students to lead
                confidently, innovate boldly, and shape a future of equal
                representation and opportunity in STEM fields.
              </p>
            </div>
            <div className="single-fact">
              <h2>GOAL</h2>
              <p>
                To provide mentorship and resources for student growth and build
                a supportive network of future women engineers. To create
                pathways for confidence and leadership in STEM, host events to
                enhance technical and soft skills, and encourage students to
                inspire future generations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="hh">
        <h2>MEET OUR TEAM</h2>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={img3} alt="Aleeza Adnan" />
            </div>
            <div className="card-back1">
              <p>
                <strong>Aleeza Adnan</strong>, Chairperson of IEEE WIE Kinnaird
                Student Branch, is a driven and visionary leader committed to
                fostering a culture of innovation and growth within the branch.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={img4} alt="Rahemeen Kamran" />
            </div>
            <div className="card-back1">
              <p>
                <strong>Rahemeen Kamran</strong>, Vice Chair, is a dynamic and
                passionate individual who plays a key role in guiding strategic
                initiatives and supporting the team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WieChapter;
