import React from "react";
import { motion } from "framer-motion";

export default function DigitalSection() {
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
                Digital Marketing Strategy
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.8",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Customized, data-backed strategies that align with your business
                goals, ensuring maximum reach, engagement, and conversions.
              </p>

              {/* 🔹 Strategy Details */}
              <div className="strategy-points mt-4">
                {[
                  {
                    title: "SEO & Content Strategy",
                    desc: "Comprehensive SEO and content plans that boost organic visibility, drive traffic, and position your brand as an industry leader.",
                  },
                  {
                    title: "Paid Advertising & PPC Strategy",
                    desc: "Performance-driven ad campaigns optimized for high ROI, ensuring every dollar spent delivers measurable results.",
                  },
                  {
                    title: "Social Media Strategy",
                    desc: "Engaging, platform-specific strategies designed to grow your audience, increase brand awareness, and drive meaningful interactions.",
                  },
                  {
                    title: "Customer Journey Mapping",
                    desc: "In-depth analysis of your audience’s behavior to optimize touchpoints, improve user experience, and enhance conversion rates.",
                  },
                  {
                    title: "Data Analytics & Performance Optimization",
                    desc: "Continuous monitoring, AI-powered insights, and real-time adjustments to ensure your campaigns stay ahead of trends and deliver top-tier results.",
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
              src="/Service/Digitalstrategy.webp"
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
