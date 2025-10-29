import React from "react";
import { motion } from "framer-motion";

export default function CreativeSection() {
  return (
    <section
      className="digital-strategy-section py-5"
      style={{
        background: "linear-gradient(90deg, #0d1b2a, #1b263b)",
        color: "#fff",
        padding: "60px 8%",
        overflow: "hidden",
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* 🔹 Left Column - Content */}
          <div className="col-lg-6 col-md-12 mb-4">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                style={{
                  fontSize: "2.4rem",
                  fontWeight: "700",
                  marginBottom: "25px",
                  lineHeight: "1.3",
                }}
              >
               Our Creative Offerings:
              </h2>
             

              {/* 🔹 Strategy Details */}
              <div className="strategy-points mt-4">
                {[
                     {
                        title: "Branding & Identity Design",
                        desc: "Creating memorable logos, brand guidelines, and messaging to establish a strong market presence.",
                      },
                      {
                        title: "SEO & Graphic & Motion Design",
                        desc: "High-quality visuals, animations, and infographics designed to enhance engagement and storytelling.",
                      },
                      {
                        title: "Content Creation & Copywriting",
                        desc: "Strategic content, from blogs to ad copy, that informs, persuades, and converts.",
                      },
                      {
                        title: "Video Production & Editing",
                        desc: "We create professional video content for marketing, social media, and brand storytelling.",
                      },
                      {
                        title: "UI/UX Design & Prototyping",
                        desc: "Seamless, user-friendly website and app designs that improve customer experience.",
                      },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "12px",
                      padding: "18px 20px",
                      marginBottom: "16px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                      cursor: "default",
                    }}
                  >
                    <h5
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: "600",
                        color: "#fff",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h5>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: "1.6",
                        marginBottom: "0",
                      }}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 🔹 Right Column - Image (Improved positioning) */}
          <div
            className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center"
            style={{
              padding: "30px 0",
            }}
          >
            <motion.img
              src="/Service/Creative.webp"
              alt="Digital Marketing Strategy"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                width: "85%",
                maxWidth: "520px",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* ✅ Responsive Styling */}
      <style>
        {`
          @media (max-width: 1024px) {
            .digital-strategy-section h2 {
              font-size: 2rem !important;
            }
          }

          @media (max-width: 768px) {
            .digital-strategy-section {
              padding: 50px 5% !important;
              text-align: left !important;
            }
            .digital-strategy-section .row {
              flex-direction: column-reverse !important;
            }
            .digital-strategy-section img {
              width: 90% !important;
              max-width: 400px !important;
              margin: 20px auto 30px;
            }
            .digital-strategy-section h2 {
              font-size: 1.8rem !important;
              text-align: left !important;
            }
          }

          @media (max-width: 480px) {
            .digital-strategy-section img {
              width: 100% !important;
              max-width: 320px !important;
            }
            .digital-strategy-section h2 {
              font-size: 1.6rem !important;
            }
            .digital-strategy-section p,
            .digital-strategy-section h5 {
              font-size: 0.95rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}
