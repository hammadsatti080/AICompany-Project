import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ClientSection() {
  const clients = [
    { name: "K&N's", logo: "./Homescreen/Kns.jpg", url: "https://www.knfoods.com" },
    { name: "Daraz", logo: "./Homescreen/Daraz.jpg", url: "https://www.daraz.pk" },
    { name: "Jazz", logo: "./Homescreen/Jazz.jpg", url: "https://www.jazz.com.pk" },
    { name: "Engro", logo: "./Homescreen/Engro.jpg", url: "https://www.engro.com" },
  ];

  const reviews = [
    { name: "K&N's", text: "Amazing service! Highly professional.", rating: 5 },
    { name: "Daraz", text: "Excellent support team!", rating: 5 },
    { name: "Jazz", text: "Creative solutions, timely delivery.", rating: 4 },
    { name: "Engro", text: "Impressive results and attention to detail.", rating: 5 },
  ];

  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <div
      className="mx-auto d-flex flex-row flex-wrap animated-section"
      style={{ width: "80%", minHeight: "50vh", marginTop: "40px" }}
    >
      {/* --- Clients Section --- */}
      <div
        className={`d-flex flex-column align-items-center justify-content-center p-3 section-left ${loaded ? "fade-in-left" : ""}`}
        style={{ flex: "1 1 50%", backgroundColor: "#fff", minHeight: "50vh" }}
      >
        <h2 className="text-center mb-3" style={{ color: "#6a0dad", fontSize: "1.5rem" }}>
          Our Clients
        </h2>
        <div className="d-flex flex-wrap justify-content-center gap-3 w-100">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${client.name} website`}
              className="text-decoration-none"
              style={{ cursor: "pointer" }}
            >
              <div
                className="card p-2 text-center client-card"
                style={{
                  width: "90px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="img-fluid mx-auto d-block"
                  style={{ maxWidth: "60px", marginBottom: "6px" }}
                />
                <h6 className="fw-bold" style={{ fontSize: "0.8rem", color: "#222" }}>
                  {client.name}
                </h6>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* --- Reviews Section --- */}
      <div
        className={`d-flex flex-column align-items-center justify-content-center p-3 section-right ${loaded ? "fade-in-right" : ""}`}
        style={{ flex: "1 1 50%", backgroundColor: "#f0f0f0", minHeight: "50vh" }}
      >
        <h2 className="text-center mb-3" style={{ color: "#6a0dad", fontSize: "1.5rem" }}>
          Client Reviews
        </h2>
        <div className="d-flex flex-column gap-3 w-100">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-2 rounded shadow-sm review-card"
              style={{
                backgroundColor: "#fff",
                fontSize: "0.85rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transform: "translateY(20px)",
                opacity: 0,
                animation: `fadeInUp 0.6s forwards ${index * 0.2}s`,
              }}
            >
              <div className="mb-1">
                {[...Array(5)].map((_, starIndex) => (
                  <i
                    key={starIndex}
                    className={`bi bi-star${starIndex < review.rating ? "-fill text-warning" : ""}`}
                    style={{ marginRight: 2 }}
                  />
                ))}
              </div>
              <p style={{ marginBottom: "4px" }}>"{review.text}"</p>
              <p className="fw-bold text-end mb-0" style={{ fontSize: "0.75rem" }}>
                - {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- CSS & Animations --- */}
      <style>{`
        .client-card:hover {
          transform: translateY(-5px) scale(1.06);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.16);
        }
        .client-card img {
          transition: transform 0.25s ease;
        }
        a:hover .client-card img {
          transform: scale(1.08);
        }

        .fade-in-left { animation: fadeInLeft 0.8s ease forwards; }
        .fade-in-right { animation: fadeInRight 0.8s ease forwards; }

        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 992px) {
          .d-flex.flex-row.flex-wrap { flex-direction: column !important; }
          .d-flex.flex-row.flex-wrap > div { flex: 1 1 100% !important; margin-bottom: 20px; }
        }
      `}</style>
    </div>
  );
}
