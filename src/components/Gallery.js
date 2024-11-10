// Gallery.js
import React, { useState, useEffect } from "react";
import "./gallery.css";
import img1 from "./Logos/g9.jpeg"
import img2 from "./Logos/g2.png";
import img3 from "./Logos/g3.png";
import img4 from "./Logos/g4.png";
import img5 from "./Logos/g5.png";
import img6 from "./Logos/g6.png";
import img7 from "./Logos/g7.png";
import img8 from "./Logos/g10.png";
import img10 from "./Logos/g11.jpeg";
import img11 from "./Logos/g12.jpeg";
import img12 from "./Logos/g13.jpeg";
import img13 from "./Logos/g15.jpeg";
import img14 from "./Logos/g17.png"
import img15 from "./Logos/g18.png";
import img16 from "./Logos/g19.png";
const images = [
  { src: img1, description: "Scholarly Steps" },
  { src: img15, description: "Ms Asma Basharat" },
  { src: img3, description: "Mr Rizwan Naqvi" },
  { src: img14, description: "IEEE" },
  { src: img16, description: "CHAIR IEEE" },
  { src: img4, description: "Tech Fusion 1.0" },
  { src: img5, description: "Dr Rukhsana David" },
  { src: img6, description: "Dr Sidra Zafar" },
  { src: img7, description: "DLD Competition" },
  { src: img10, description: "Visionary Voices" },
  { src: img11, description: "IEEE Team" },
  { src: img12, description: "Scholarly Steps" },
  { src: img13, description: "Muhammad Sufian" },
  { src: img8, description: "Ms. Sidra Ijaz" },
  { src: img2, description: "Query Competition" },
];

const itemsPerPage = 5; // Number of items per page

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const showItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return images.slice(startIndex, endIndex);
  };

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when images change
  }, [images]);

  return (
    <div id="gallery" className="tm-content tm-content-small-top">
      <div className="space">
      <h2 className="heading-title">
          Our Gallery
        </h2>
        </div>
      <div className="tm-gallery-container">
        
        <div className="tm-gallery tm-mb-80">
          {showItems().map((item, index) => (
            <figure className="effect-goliath tm-gallery-item" key={index}>
              <img src={item.src} alt={item.title} />
              <figcaption>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.src} className="magnific-popup">
                  View more
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="tm-paging tm-mb-130">
          {Array.from({ length: totalPages }, (_, index) => (
            <a
              key={index}
              href="javascript:void(0);"
              className={`tm-paging-link ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePaginationClick(index + 1)}
            >
              {index + 1}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;