import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function CreativeFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is included in your Creative Strategy services?",
      answer:
        "Our Creative Strategy includes branding, visual identity design, motion graphics, UI/UX, and content creation — all structured to align with your digital goals and elevate your brand presence.",
    },
    {
      question: "How do you ensure our brand stands out creatively?",
      answer:
        "We blend storytelling, market research, and data-driven insights to design visuals and messaging that capture attention and resonate with your target audience.",
    },
    {
      question: "Can you adapt creative assets for different platforms?",
      answer:
        "Absolutely! We tailor content and visuals for each platform — social media, web, print, and ads — ensuring consistency while maximizing engagement on every channel.",
    },
    {
      question: "Do you handle both static and motion design?",
      answer:
        "Yes. Our design team specializes in both graphic and motion design, including animated brand elements, video edits, and dynamic digital ads that stand out.",
    },
    {
      question: "How do you maintain consistency across all brand assets?",
      answer:
        "We create detailed brand guidelines, covering typography, color systems, tone of voice, and motion style — ensuring every piece of content stays true to your brand identity.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="creative-faq-section py-5"
      style={{
        background: "#ffffff",
        color: "#0d1b2a",
        padding: "80px 8%",
      }}
    >
      {/* 🔹 Header */}
      <div className="text-center mb-5">
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: "700",
            marginBottom: "15px",
            color: "#0d1b2a",
          }}
        >
          Creative Strategy — FAQs
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
          Find answers to common questions about our creative process, design
          philosophy, and brand strategy approach.
        </p>
      </div>

      {/* 🔹 FAQ Cards */}
      <div
        className="faq-container"
        style={{
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              background: "#fff",
              borderRadius: "14px",
              marginBottom: "16px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.08)",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            className="faq-card"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                outline: "none",
                color: "#0d1b2a",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 24px",
                fontSize: "1.05rem",
                fontWeight: "600",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              {faq.question}
              {activeIndex === index ? (
                <FaMinus color="#1b263b" />
              ) : (
                <FaPlus color="#1b263b" />
              )}
            </button>

            {/* Answer */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: "0 24px 20px",
                    color: "rgba(0,0,0,0.75)",
                    fontSize: "0.96rem",
                    lineHeight: "1.6",
                    borderTop: "1px solid rgba(0,0,0,0.1)",
                    background: "rgba(0,0,0,0.02)",
                  }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* ✅ Responsive Styling */}
      <style>
        {`
          .faq-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.12);
            border: 1px solid rgba(0,0,0,0.12);
          }

          @media (max-width: 992px) {
            .creative-faq-section h2 {
              font-size: 2rem !important;
            }
          }

          @media (max-width: 768px) {
            .creative-faq-section {
              padding: 60px 6% !important;
            }
            .faq-container button {
              font-size: 1rem !important;
              padding: 18px 20px !important;
            }
          }

          @media (max-width: 480px) {
            .creative-faq-section h2 {
              font-size: 1.8rem !important;
            }
            .faq-container p {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}
