import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Header({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="service-header text-white"
      style={{
        background: "linear-gradient(90deg, #0d1b2a, #1b263b)",
        padding: "50px 0",
        borderBottom: "3px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* ✅ Left Section - Title + Subtitle */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="col-lg-7 col-md-7 col-sm-12 mb-3"
          >
            <h1
              className="fw-bold mb-2"
              style={{
                fontSize: "2.3rem",
                lineHeight: "1.2",
              }}
            >
              {title || "Digital Strategy"}
            </h1>
            <p
              className="text-light"
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.9)",
                maxWidth: "600px",
                lineHeight: "1.6",
              }}
            >
              {subtitle ||
                "Data-driven digital strategies designed to maximize your brand’s growth, engagement, and ROI."}
            </p>
          </motion.div>

          {/* ✅ Right Section - Breadcrumb */}
          <motion.div
            className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-lg-end justify-content-md-end justify-content-sm-start align-items-center flex-wrap breadcrumb-links"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              gap: "8px",
              fontSize: "0.95rem",
              textAlign: "right",
            }}
          >
            <Link
              to="/"
              className="breadcrumb-link"
              style={{
                textDecoration: "none",
                color: "rgba(255,255,255,0.85)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.85)")
              }
            >
              Home
            </Link>
            <FaChevronRight style={{ fontSize: "0.8rem", opacity: 0.8 }} />
            <Link
              to="/service"
              className="breadcrumb-link"
              style={{
                textDecoration: "none",
                color: "rgba(255,255,255,0.85)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.85)")
              }
            >
              Services
            </Link>
            <FaChevronRight style={{ fontSize: "0.8rem", opacity: 0.8 }} />
            <span
              style={{
                fontWeight: 600,
                color: "#fff",
              }}
            >
              {title || "Digital Strategy"}
            </span>
          </motion.div>
        </div>
      </div>

      {/* ✅ Responsive Styling */}
      <style>
        {`
          @media (max-width: 992px) {
            .service-header h1 {
              font-size: 2rem !important;
            }
            .service-header p {
              font-size: 0.95rem !important;
            }
          }

          @media (max-width: 768px) {
            .breadcrumb-links {
              justify-content: flex-start !important;
              text-align: left !important;
              margin-top: 10px !important;
              gap: 6px !important;
            }
            .service-header h1 {
              font-size: 1.8rem !important;
            }
            .service-header p {
              font-size: 0.95rem !important;
              max-width: 100% !important;
            }
          }

          @media (max-width: 480px) {
            .service-header h1 {
              font-size: 1.6rem !important;
            }
            .service-header p {
              font-size: 0.9rem !important;
            }
            .breadcrumb-links {
              flex-wrap: wrap !important;
              gap: 4px !important;
              font-size: 0.85rem !important;
            }
          }
        `}
      </style>
    </motion.div>
  );
}
