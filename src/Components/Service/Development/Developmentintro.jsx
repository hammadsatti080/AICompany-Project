import React from "react";
import { motion } from "framer-motion";

export default function Developmentintro() {
  return (
    <section
      className="development-intro py-5"
      style={{
        background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* 🔹 Decorative background glow */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "260px",
          height: "260px",
          background: "rgba(13,27,42,0.08)",
          borderRadius: "50%",
          filter: "blur(45px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "280px",
          height: "280px",
          background: "rgba(27,38,59,0.08)",
          borderRadius: "50%",
          filter: "blur(45px)",
        }}
      />

      <div className="container position-relative">
        {/* 🔹 Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: "700",
              color: "#0d1b2a",
              marginBottom: "0",
              letterSpacing: "0.5px",
            }}
          >
            Are You{" "}
            <span
              style={{
                color: "#1b263b",
              }}
            >
      Struggling with an
            </span>{" "}
            Outdated or Inefficient Website?
          </h2>
        </motion.div>

        {/* 🔹 Two-column Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="row justify-content-center align-items-start"
        >
          {/* Left column */}
          <div className="col-lg-5 col-md-6 mb-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "25px 25px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                height: "100%",
              }}
            >
              <p
                style={{
                  color: "#1b263b",
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  textAlign: "justify",
                  marginBottom: "0",
                }}
              >
              Your digital platform is more than just a website or app—it’s the backbone of your online presence. A slow, outdated, or unoptimized digital experience can frustrate users and drive potential customers away. With <strong>AI Mark Labs,</strong>  you get development solutions that prioritize performance, security, and scalability.
              </p>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="col-lg-5 col-md-6 mb-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "25px 25px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                height: "100%",
              }}
            >
              <p
                style={{
                  color: "#1b263b",
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  textAlign: "justify",
                  marginBottom: "0",
                }}
              >
   Through a combination of advanced technology, seamless integrations, and user-focused design, we build high-performance websites, eCommerce platforms, and mobile applications that align with your business goals. Whether it’s a full-scale digital transformation or an optimized landing page, we create solutions that drive growth and user engagement.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ✅ Responsive Tweaks */}
      <style>
        {`
          @media (max-width: 1024px) {
            .development-intro h2 {
              font-size: 2rem !important;
            }
            .development-intro p {
              font-size: 1rem !important;
            }
          }

          @media (max-width: 768px) {
            .development-intro h2 {
              font-size: 1.8rem !important;
              text-align: center !important;
            }
            .development-intro p {
              text-align: left !important;
              font-size: 0.95rem !important;
            }
            .development-intro .row {
              flex-direction: column !important;
            }
            .development-intro .col-md-6 {
              max-width: 100% !important;
            }
          }

          @media (max-width: 480px) {
            .development-intro {
              padding: 40px 15px !important;
            }
            .development-intro h2 {
              font-size: 1.6rem !important;
            }
            .development-intro p {
              font-size: 0.9rem !important;
              line-height: 1.6 !important;
            }
          }
        `}
      </style>
    </section>
  );
}
