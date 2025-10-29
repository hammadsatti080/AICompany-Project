import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function FAQSection() {
  const faqs = [
    {
      question: "What technologies do you use for web and app development?",
      answer:
        "We use modern, scalable technologies like React, Next.js, Node.js, Laravel, and WordPress for web solutions, and Flutter or React Native for mobile app development. The choice depends on your goals, scalability needs, and budget.",
    },
    {
      question: "How long does it take to develop a website or application?",
      answer:
        "Timelines vary depending on project size and complexity. A standard corporate website may take 3–5 weeks, while custom web applications or eCommerce platforms can take 6–12 weeks including testing and deployment.",
    },
    {
      question: "Do you offer website and app maintenance after launch?",
      answer:
        "Yes! We provide ongoing maintenance, updates, security monitoring, and performance optimization to ensure your digital platforms run smoothly after launch.",
    },
    {
      question: "Can you integrate third-party APIs or tools into my platform?",
      answer:
        "Absolutely. We specialize in integrating APIs, CRMs, payment gateways, and automation tools to streamline business operations and enhance user experience.",
    },
    {
      question: "Will my website or app be mobile-friendly and SEO optimized?",
      answer:
        "Every project we build is mobile-responsive, fast-loading, and optimized for SEO best practices — ensuring both users and search engines love your digital presence.",
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
          Development FAQs
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
          Got questions about our development process, technology stack, or
          maintenance services? Here’s everything you need to know before we
          start building your digital product.
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
