import React from "react";
import c1 from "./Logos/last.png";
import c2 from "./Logos/3.jpg";
import c3 from "./Logos/2.jpeg";
import { FaCheck } from "react-icons/fa"; 
import Hero from "./Hero"; 
import "../components/home.css";
import Milestones from "./Milestones";
import wie from "./Logos/wie.png";
import logo1 from "./Logos/logo1.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        {/* IEEE KSB*/}
        <Hero section="HOME" />
      </div>
       {/* WHAT WE PROVIDE */}
      <div className="new">
        <section className="about-us-area">
          <div className="container1">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 text-container">
                <div className="about-text-box mb-100">
                  <div className="section-heading">
                    <h2 className="heading-title">
                      What we Provide as a Student Branch
                    </h2>
                    <div className="section-line"></div>
                  </div>
                  <p className="about-description">
                    At IEEE Kinnaird Student Branch (IEEE KSB), we provide a
                    platform for students to explore and enhance their technical
                    skills and leadership abilities. Our chapter offers
                    workshops, seminars, and competitions focused on innovation,
                    technology, and professional development. We facilitate
                    networking opportunities with industry professionals and
                    experienced mentors, fostering collaboration and knowledge
                    sharing. Additionally, IEEE KSB promotes participation in
                    national and international events, ensuring that our members
                    stay at the forefront of the latest technological
                    advancements. Through these efforts, we empower students to
                    excel both academically and professionally.
                  </p>
                  <div className="about-key-points">
                    <h6>
                      <span className="icon">
                        <FaCheck />
                      </span>
                      Networking Opportunities
                    </h6>
                    <h6>
                      <span className="icon">
                        <FaCheck />
                      </span>
                      Access to IEEE resources
                    </h6>
                    <h6>
                      <span className="icon">
                        <FaCheck />
                      </span>
                      Industry Tours
                    </h6>
                  </div>
                </div>
              </div>
              {/* WHAT WE PROVIDE SIDE IMAGES */}
              <div className="col-12 col-lg-6">
                <div className="about-thumbnail homepage mb-100">
                  <div className="first-img wow fadeInUp">
                    <img src={c1} alt="Image 1" />
                  </div>
                  <div className="second-img wow fadeInUp">
                    <img src={c2} alt="Image 2" />
                  </div>
                  <div className="third-img wow fadeInUp">
                    <img src={c3} alt="Image 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div></div>
      </div>
        {/* 4 MILESTONES */}
      <Milestones section="Milestone" />
       {/* WIE INTRO */}
      <div className="new">
        <section className="about-us-area">
          <div className="container1">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 text-container">
                <div className="about-text-box mb-100">
                  <div className="section-heading">
                    <h2 className="heading-title">
                      Women In Engineering Chapter
                    </h2>
                    <div className="section-line"></div>
                  </div>
                  <p className="about-description">
                    The Women in Engineering (WIE) chapter at Kinnaird College
                    for Women focuses on empowering and supporting women in the
                    field of engineering and technology. Through workshops,
                    mentorship programs, and networking opportunities, the
                    chapter encourages female students to develop their
                    technical skills and leadership abilities. WIE Kinnaird
                    promotes gender diversity in STEM fields and provides a
                    platform for women to showcase their talents and
                    innovations. The chapter also fosters collaboration with
                    industry professionals, creating a strong community of
                    future leaders and innovators. By participating in national
                    and international events, members stay informed on the
                    latest advancements in technology while building a
                    supportive network.
                  </p>
                  <Link to="/wie-chapter" className="wie-btn">
                    Learn More About WIE
                  </Link>
                </div>
              </div>
              {/* WIE side Images */}
              <div className="col-12 col-lg-6">
                <div className="about-thumbnail homepage mb-100">
                  <div className="first-img ">
                    <img src={logo1} alt="Image 1" />
                  </div>
                  <div className="first-img wow fadeInUp"></div>
                  <div className="second1-img ">
                    <img src={wie} alt="Image 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
       {/* Gallery Images*/}
      <Gallery />
      {/* Footer*/}
      <Footer />
    </div>
  );
};

export default Home;
