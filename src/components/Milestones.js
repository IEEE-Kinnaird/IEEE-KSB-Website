import React from "react";
import "./milestones.css";
import code from "./Logos/code.png";
import play from "./Logos/play.png";
import share from "./Logos/share.png";
import work from "./Logos/work.png";
const Milestones = () => {
  return (
    <div>
      <div>
        <h2 className="centre">________</h2>
        <h2 className="centre" style={{ marginBottom: "10px" }}>
          Why IEEE?
        </h2>{" "}
      </div>

      <section className="milestone">
        <div className="container2">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="section-heading text-center">
                <div className="text2">
                  At IEEE Kinnaird Student Branch, we provide a platform for
                  students to explore and enhance their technical skills and
                  leadership abilities. Our chapters offers workshops, seminars,
                  and competitions focused on innovation, technology, and
                  professional development. Additionally, IEEE KSB promotes
                  participation in national and international events, ensuring
                  that our members stay at the forefront of the latest
                  technological advancements. Through these efforts, we empower
                  students to excel both academically and professionally.
                </div>
              </div>
            </div>
          </div>

          <div className="milestones-row">
            <div className="single-fact">
              <img src={code} alt="We Code" /> {/* React logo */}
              <h2>We Code</h2>
              <p>Creating innovative solutions through coding.</p>
            </div>
            <div className="single-fact">
              <img src={play} alt="We Play" /> {/* React logo */}
              <h2>We Play</h2>
              <p>Engaging in fun and interactive competitions.</p>
            </div>
            <div className="single-fact">
              <img src={share} alt="We Share" /> {/* React logo */}
              <h2>We Share</h2>
              <p>Fostering collaboration and knowledge exchange.</p>
            </div>
            <div className="single-fact">
              <img src={work} alt="We Work" /> {/* React logo */}
              <h2>We Work</h2>
              <p>Building strong skills for the future.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Milestones;
