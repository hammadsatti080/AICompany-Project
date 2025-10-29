import React from "react";
import { motion } from "framer-motion";

export default function OurProcess() {
  const steps = [
    {
      step: "01",
      title: "Planning & Requirements",
      desc: "We begin by understanding your goals, defining functionality, and outlining the technical roadmap to ensure a smooth development journey.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      desc: "Our design team crafts intuitive, visually appealing interfaces focused on user experience and brand consistency before development begins.",
    },
    {
      step: "03",
      title: "Development & Integration",
      desc: "Using cutting-edge technologies, we build secure, scalable, and high-performance websites, apps, or systems—fully integrated with APIs and CRMs.",
    },
    {
      step: "04",
      title: "Testing, Launch & Optimization",
      desc: "We rigorously test across devices, optimize for speed and SEO, and ensure seamless deployment with continuous performance monitoring.",
    },
  ];

  return (
    <section
      className="development-process-section py-5"
      style={{
        backgroundColor: "#ffffff",
        color: "#0d1b2a",
        padding: "70px 8%",
      }}
    >
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: "700",
            marginBottom: "15px",
            letterSpacing: "0.5px",
          }}
        >
          Our Development Process
        </h2>
        <p
          style={{
            color: "rgba(0,0,0,0.65)",
            fontSize: "1.05rem",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          From idea to deployment, we follow a structured yet agile approach to
          deliver fast, secure, and future-ready digital solutions.
        </p>
      </div>

      {/* Steps */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 col-sm-12 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "30px 25px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  border: "1px solid rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  height: "100%",
                }}
                className="process-card"
              >
                {/* Step Number */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                    margin: "0 auto 20px",
                  }}
                >
                  {item.step}
                </div>

                {/* Title */}
                <h5
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h5>

                {/* Description */}
                <p
                  style={{
                    color: "rgba(0,0,0,0.75)",
                    fontSize: "0.98rem",
                    lineHeight: "1.6",
                    minHeight: "90px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Responsive Styling */}
      <style>
        {`
          .process-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.12);
          }

          @media (max-width: 992px) {
            .development-process-section h2 {
              font-size: 2rem !important;
            }
          }

          @media (max-width: 768px) {
            .development-process-section {
              padding: 50px 5% !important;
            }
            .process-card {
              padding: 25px 20px !important;
            }
          }

          @media (max-width: 480px) {
            .development-process-section h2 {
              font-size: 1.8rem !important;
            }
            .process-card p {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}
