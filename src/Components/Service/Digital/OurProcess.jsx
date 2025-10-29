import React from "react";
import { motion } from "framer-motion";

export default function OurProcess() {
  const steps = [
    {
      step: "01",
      title: "Research & Discovery",
      desc: "We dive deep into your brand, audience, and industry to uncover opportunities that fuel your digital growth.",
   
    },
    {
      step: "02",
      title: "Strategy & Planning",
      desc: "We develop a clear, data-driven roadmap ensuring each digital action aligns with your business objectives.",
     
    },
    {
      step: "03",
      title: "Execution & Optimization",
      desc: "Our team executes targeted campaigns, monitors performance, and refines continuously for better results.",

    },
    {
      step: "04",
      title: "Reporting & Growth",
      desc: "We deliver transparent reports and insights to help you make smarter business decisions for sustainable growth.",
    
    },
  ];

  return (
    <section
      className="our-process-section py-5"
      style={{
        backgroundColor: "#ffffff",
        color: "#0d1b2a",
        padding: "70px 8%",
      }}
    >
      <div className="text-center mb-5">
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Our Process
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
          A streamlined, transparent process designed to ensure every project is
          executed with precision, creativity, and measurable results.
        </p>
      </div>

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
                    minHeight: "80px",
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
            .our-process-section h2 {
              font-size: 2rem !important;
            }
          }

          @media (max-width: 768px) {
            .our-process-section {
              padding: 50px 5% !important;
            }
            .process-card {
              padding: 25px 20px !important;
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
