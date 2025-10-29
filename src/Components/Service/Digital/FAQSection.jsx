import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function FAQSection() {
  const faqs = [
    {
      question: "What makes AI Mark Labs different from other digital agencies?",
      answer:
        "We combine human creativity with AI-driven insights to deliver data-backed strategies that drive measurable business growth. Our approach focuses on innovation, transparency, and real results.",
    },
    {
      question: "How long does it take to see digital marketing results?",
      answer:
        "Depending on your campaign type, SEO and content marketing often show results in 3–6 months, while paid ads can deliver measurable outcomes within weeks.",
    },
    {
      question: "Do you customize strategies for each business?",
      answer:
        "Absolutely. Every business has unique goals and audiences — we create fully tailored digital strategies aligned with your objectives and market conditions.",
    },
    {
      question: "Can I track the performance of my campaigns?",
      answer:
        "Yes! We provide detailed performance dashboards and transparent reports with metrics like traffic, conversions, ROI, and engagement for full visibility.",
    },
    {
      question: "Do you offer ongoing support and optimization?",
      answer:
        "We believe optimization never stops. Our team continuously monitors and refines your campaigns to ensure sustained growth and maximum ROI.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="faq-section py-5"
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
          Frequently Asked Questions
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
          Here are some common questions our clients ask — and the answers that
          will help you better understand how we work at AI Mark Labs.
        </p>
      </div>

      <div className="container" style={{ maxWidth: "850px" }}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              padding: "20px 0",
              cursor: "pointer",
            }}
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "600",
                  color: "#0d1b2a",
                  marginBottom: "0",
                }}
              >
                {faq.question}
              </h5>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ color: "#1b263b", fontSize: "1rem" }}
              >
                <FaChevronDown />
              </motion.span>
            </div>

            {/* Answer */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    overflow: "hidden",
                    marginTop: "12px",
                    color: "rgba(0,0,0,0.75)",
                    lineHeight: "1.6",
                  }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* ✅ Responsive Styling */}
      <style>
        {`
          .faq-item:hover h5 {
            color: #1b263b;
          }

          @media (max-width: 1024px) {
            .faq-section h2 {
              font-size: 2rem !important;
            }
          }

          @media (max-width: 768px) {
            .faq-section {
              padding: 50px 5% !important;
            }
            .faq-item h5 {
              font-size: 1rem !important;
            }
          }

          @media (max-width: 480px) {
            .faq-section h2 {
              font-size: 1.7rem !important;
            }
            .faq-item p {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}
