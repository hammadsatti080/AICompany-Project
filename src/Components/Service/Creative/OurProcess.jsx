import React from "react";
import { motion } from "framer-motion";

export default function OurProcess() {
  const steps = [
    {
      step: "01",
      title: "Research & Discovery",
      desc: "We dive deep into your brand, audience, and industry to uncover insights that guide the creative direction.",
    },
    {
      step: "02",
      title: "Strategy & Concept",
      desc: "We craft a visual and strategic blueprint aligning design, messaging, and user goals for maximum impact.",
    },
    {
      step: "03",
      title: "Design & Development",
      desc: "Our team transforms ideas into engaging visuals, motion graphics, and interactive experiences that inspire.",
    },
    {
      step: "04",
      title: "Delivery & Growth",
      desc: "We launch, analyze, and refine — ensuring your brand continues to evolve and stand out across every platform.",
    },
  ];

  return (
    <section
      className="our-process-section py-5"
      style={{
        backgroundColor: "#ffffff",
        color: "#0d1b2a",
        padding: "80px 8%",
      }}
    >
      {/* 🔹 Heading */}
      <div className="text-center mb-5">
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: "700",
            marginBottom: "15px",
            color: "#0d1b2a",
          }}
        >
          Our Process
        </h2>
        <p
          style={{
            color: "rgba(0,0,0,0.7)",
            fontSize: "1.05rem",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          A creative, transparent workflow that transforms strategy into stunning
          results — from concept to execution.
        </p>
      </div>

      {/* 🔹 Steps Grid */}
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
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "35px 25px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  border: "1px solid rgba(0,0,0,0.05)",
                  height: "100%",
                  transition: "all 0.3s ease",
                }}
                className="process-card"
              >
                {/* Step Number Button */}
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                    margin: "0 auto 25px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                  }}
                >
                  {item.step}
                </div>

                {/* Title */}
                <h5
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#0d1b2a",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h5>

                {/* Description */}
                <p
                  style={{
                    color: "rgba(0,0,0,0.7)",
                    fontSize: "0.96rem",
                    lineHeight: "1.6",
                    minHeight: "85px",
                    marginBottom: 0,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Responsive Styling */}
      <style>
        {`
          .process-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 28px rgba(0,0,0,0.12);
          }

          @media (max-width: 992px) {
            .our-process-section h2 {
              font-size: 2rem !important;
            }
          }

          @media (max-width: 768px) {
            .our-process-section {
              padding: 60px 6% !important;
            }
            .process-card {
              padding: 28px 22px !important;
            }
          }

          @media (max-width: 480px) {
            .our-process-section h2 {
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
