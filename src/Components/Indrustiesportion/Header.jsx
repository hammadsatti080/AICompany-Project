import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const industryData = [
  {
    title: "Healthcare and Life Sciences",
    description: "Boost patient engagement & brand trust with our Healthcare & Life Sciences Marketing services. Data-driven strategies for measurable growth.",
    image: "./About/First.jpg",
  },
  {
    title: "Finance and Banking Industry",
    description: "Elevate your brand with Finance & Banking Marketing services. We create data-driven strategies to boost trust, engagement, and customer acquisition.",
    image: "./About/Second.jpg",
  },
  {
    title: "Educational and Nonprofit Industry",
    description: "Empower your institution with Education Marketing Services. We drive student engagement, brand visibility, and enrollment growth with digital strategies.",
    image: "./About/Third.jpg",
  },
  {
    title: "FMCG & Ecommerce Industry",
    description: "Grow your online store with Ecommerce Marketing Services. We optimize sales, enhance visibility, and drive conversions with data-driven strategies.",
    image: "./About/Four.jpg",
  },
  {
    title: "Facility Management & Hospitality",
    description: "Elevate your brand with Hospitality Marketing Services. We drive bookings, enhance guest engagement, and boost visibility with digital strategies.",
    image: "./About/five.jpg",
  },
  {
    title: "Real Estate and Construction",
    description: "Drive leads & sales with Real Estate & Construction Marketing. Digital strategies and creative branding to boost visibility, engage buyers, and grow your business.",
    image: "./Homescreen/Kns.jpg",
  },
];

export default function Header() {
  const cardRefs = useRef([]);

  // Tilt effect on mouse move
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        {industryData.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className="card text-white shadow-sm industry-card position-relative"
              style={{
                height: "250px",
                borderRadius: "15px",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Overlay */}
              <div
                className="card-overlay d-flex flex-column justify-content-center align-items-center text-center"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.5)",
                  padding: "15px",
                  transition: "all 0.4s ease",
                }}
              >
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
              {/* Shine Effect */}
              <div className="shine"></div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          /* Card Hover Zoom & Shadow */
          .industry-card:hover {
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          }

          /* Overlay Darken & Text Lift */
          .industry-card:hover .card-overlay {
            background: rgba(0,0,0,0.7);
            transform: translateY(-10px);
          }

          /* Text Fade & Lift */
          .card-title, .card-text {
            opacity: 0.9;
            transform: translateY(5px);
            transition: all 0.5s ease;
          }
          .industry-card:hover .card-title,
          .industry-card:hover .card-text {
            opacity: 1;
            transform: translateY(0);
          }

          /* Shine Effect */
          .shine {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05), rgba(255,255,255,0.2));
            transform: rotate(45deg) translate(-100%, -100%);
            transition: all 0.7s ease;
            pointer-events: none;
          }
          .industry-card:hover .shine {
            transform: rotate(45deg) translate(100%, 100%);
          }
        `}
      </style>
    </div>
  );
}
