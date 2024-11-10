// Events.js
import React, { useState } from "react";
import "./events.css";
import Footer from "./Footer";
import img1 from "./Logos/tech.png";
import img3 from "./Logos/tech2.png";
import img2 from "./Logos/vv.jpg";
import img4 from "./Logos/Scholarly Steps.png";

import Navbar from "./Navbar";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      image: img3,
      title: "TechFusion 2.0",
      description:
        "An immersive experience to showcase the latest trends in technology and innovation BY IEEE KSB.(Registrations Opening Soon)",
    
    },
  ];

  const previousEvents = [
    {
      id: 1,
      image: img2,
      title: "Visionary Voices",
      description:
        "An empowering event designed to amplify innovative ideas and inspire leadership in technology and engineering.",
    },
    {
      id: 2,
      image: img4,
      title: "Scholarly Steps",
      description: "Learning how to align your projects with industry trends, attract potential employers, and boost your career prospects.",
    },
    {
      id: 3,
      image: img1,
      title: "TechFusion 1.0",
      description:
        "An exciting tech event focusing on innovation and technology.",
    },
    
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  const openModal = (event) => {
    setActiveEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveEvent(null);
  };

  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="hero-text">
          <h1>IEEE</h1>
          <h3>Events</h3>
        </div>
      </div>
      <div>
        <h2 className="title"> Welcome to the IEEE Events section! </h2>
        <p className="text1">
          As a leading organization dedicated to advancing technology for
          humanity, IEEE offers a diverse range of events designed to inspire,
          educate, and connect professionals, students, and enthusiasts in the
          fields of engineering, computer science, and technology. Our events
          include workshops, conferences, seminars, and competitions that
          provide valuable opportunities for networking, skill development, and
          collaboration. Join us in our mission to foster learning and
          innovation, and be part of a vibrant community that drives
          technological advancements for a better tomorrow. Don’t miss the
          chance to explore our previous events, where you can see the
          incredible projects and experiences shared by participants. Dive into
          our archive to witness the impact of our past gatherings and get
          inspired for future participation!
        </p>
      </div>

      {/* Upcoming Events Section */}
      <div className="events-container">
        <div className="centre-align">
        <h2 className="heading">Upcoming Event</h2></div>
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div className="event-box" key={event.id}>
              <img
                src={event.image}
                alt={`Event ${event.id}`}
                className="event-image"
              />
              <div className="hover-text">
                <span onClick={() => openModal(event)}>{event.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Events Section */}
      <div className="events-container">
        <h2 className="heading">Previous Events</h2>
        <div className="events-grid">
          {previousEvents.map((event) => (
            <div className="event-box" key={event.id}>
              <img
                src={event.image}
                alt={`Event ${event.id}`}
                className="event-image"
              />
              <div className="hover-text">
                <span onClick={() => openModal(event)}>{event.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Event Details */}
      {modalOpen && activeEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-body">
              <img
                src={activeEvent.image}
                alt={`Event ${activeEvent.id}`}
                className="modal-image"
              />
              <div className="modal-text">
                <h3>{activeEvent.title}</h3>
                <p>{activeEvent.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Events;
