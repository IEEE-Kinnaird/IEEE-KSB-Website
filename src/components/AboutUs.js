import React from "react";
import "./about.css";
import img1 from "./Logos/maham.jpg";
import img2 from "./Logos/durrey.jpg";
import img3 from "./Logos/aleeza.jpeg";
import img4 from "./Logos/shanzay.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
const AboutUs = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="back">
        <div className="hero">
          <div className="hero.text">
            <h1>IEEE</h1>
            <h3>About Us</h3>
          </div>
        </div>

        <div className="h">
          <h2>MEET OUR TEAM</h2>
        </div>
        <div className="text">
          <p>
            "The IEEE Kinnaird Student Branch (KSB) is a platform that empowers
            students to explore and excel in the fields of technology,
            engineering, and innovation. With a strong focus on collaboration
            and learning, IEEE encourages young minds to contribute to
            technological advancements. The branch is proudly guided by its
            Branch Counselor,
            <strong> Miss. Arfa Dilawari</strong>, who provides invaluable
            mentorship and leadership to the students"
          </p>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={img1} alt="IEEE Activity 1" />
              </div>
              <div className="card-back">
                <p>
                  <strong>Maham Asad</strong>, Chairperson of IEEE Kinnaird
                  Student Branch, is a driven and visionary leader committed to
                  fostering a culture of innovation and growth within the
                  branch.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={img2} alt="IEEE Activity 1" />
              </div>
              <div className="card-back">
                <p>
                  <strong>Dure Sameen Zahid</strong>, Vice Chair, is a dynamic
                  and passionate individual who plays a key role in guiding
                  strategic initiatives and supporting the team.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={img3} alt="IEEE Activity 3" />
              </div>
              <div className="card-back">
                <p>
                  <strong>Aleeza Adnan</strong> as the General Secretary, excels
                  at maintaining effective communication and ensuring the smooth
                  execution of all activities.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={img4} alt="IEEE Activity 4" />
              </div>
              <div className="card-back">
                <p>
                  <strong>Shanzay Iqbal</strong> , the Treasurer, is responsible
                  for overseeing the financial management of the branch,
                  ensuring resources are handled with care and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
