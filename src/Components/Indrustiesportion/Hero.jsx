import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const heroData = [
  {
    title: "Healthcare & Life Sciences",
    description: "Innovative marketing solutions to boost patient engagement and grow your brand trust.",
    image: "./Navbar/DGM.jpg",
  },
  {
    title: "Finance & Banking",
    description: "Data-driven strategies to enhance customer trust, engagement, and acquisition.",
    image: "./Navbar/DGM1.jpg",
  },
  {
    title: "Education & Nonprofit",
    description: "Empowering institutions with digital strategies to maximize visibility and enrollment.",
    image: "./Navbar/DGM2.jpg",
  },
  {
    title: "Ecommerce & FMCG",
    description: "Optimized campaigns to increase sales, visibility, and conversions for online stores.",
    image: "./Navbar/DGM3.jpg",
  },
  {
    title: "Hospitality & Facility Management",
    description: "Enhancing guest engagement and driving bookings through smart digital marketing.",
    image: "./Navbar/DGM4.jpg",
  },
  {
    title: "Real Estate & Construction",
    description: "Creative branding and digital strategies to generate leads and grow your business.",
    image: "./Navbar/DGM.jpg",
  },
];

export default function HeroSection() {
  const cardRefs = useRef([]);

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
    <section className="hero-section py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h1 className="text-center fw-bold mb-5" style={{ color: "#0d1b2a" }}>
          Explore Our Solutions
        </h1>

        <div className="row g-4">
          {heroData.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="card text-white hero-card shadow-sm"
                style={{
                  height: "300px",
                  borderRadius: "15px",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="card-overlay">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            text-align: center;
            transition: all 0.4s ease;
          }

          .hero-card {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .hero-card:hover {
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          }

          .hero-card:hover .card-overlay {
            background: rgba(0,0,0,0.7);
          }

          .hero-card:hover .card-title,
          .hero-card:hover .card-text {
            transform: translateY(-5px);
            opacity: 1;
            color: #fff;
          }

          .card-title, .card-text {
            opacity: 0.85;
            transform: translateY(10px);
            transition: all 0.4s ease;
          }

          /* Gradient Shine */
          .hero-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05), rgba(255,255,255,0.2));
            transform: rotate(45deg) translate(-100%, -100%);
            transition: all 0.7s ease;
          }

          .hero-card:hover::before {
            transform: rotate(45deg) translate(100%, 100%);
          }

          /* Bounce */
          .hero-card:hover {
            animation: bounce 0.3s forwards;
          }

          @keyframes bounce {
            0% { transform: scale(1); }
            50% { transform: scale(1.07); }
            100% { transform: scale(1.05); }
          }
        `}
      </style>
    </section>
  );
}
