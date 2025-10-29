import React, { useState, useEffect } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Track screen size for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyle = {
    width: "100%",
    background: "linear-gradient(135deg, #ffffff 0%, #f5f6f8 100%)",
    padding: isMobile ? "60px 15px" : "100px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const headingContainer = {
    textAlign: "center",
    marginBottom: isMobile ? "40px" : "60px",
  };

  const headingStyle = {
    fontSize: isMobile ? "2rem" : "2.8rem",
    fontWeight: "800",
    color: "#2a2b4c",
    marginBottom: "15px",
  };

  const underline = {
    width: "80px",
    height: "4px",
    backgroundColor: "#ff7f50",
    borderRadius: "2px",
    margin: "0 auto",
  };

  const faqContainer = {
    width: "100%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  };

  const faqItem = (isActive) => ({
    backgroundColor: "#fff",
    borderRadius: "14px",
    boxShadow: isActive
      ? "0 8px 25px rgba(0, 0, 0, 0.08)"
      : "0 4px 12px rgba(0, 0, 0, 0.05)",
    border: isActive ? "1px solid #ff7f50" : "1px solid #eee",
    transition: "all 0.35s ease",
    cursor: "pointer",
    overflow: "hidden",
  });

  const questionStyle = {
    padding: isMobile ? "18px 20px" : "22px 28px",
    fontSize: isMobile ? "1rem" : "1.1rem",
    fontWeight: "600",
    color: "#2a2b4c",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const iconStyle = (isActive) => ({
    fontSize: isMobile ? "1.2rem" : "1.5rem",
    color: isActive ? "#ff7f50" : "#2a2b4c",
    transition: "transform 0.3s ease, color 0.3s ease",
    transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
  });

  const answerStyle = (isActive) => ({
    maxHeight: isActive ? "400px" : "0",
    overflow: "hidden",
    padding: isActive ? (isMobile ? "0 20px 18px" : "0 28px 22px") : "0 28px",
    color: "#555",
    fontSize: isMobile ? "0.95rem" : "1rem",
    lineHeight: "1.8",
    transition: "all 0.4s ease",
  });

  const faqs = [
    {
      question:
        "What makes AIMarkLabs different from other digital marketing agencies?",
      answer:
        "AIMarkLabs combines creativity with AI-powered insights to craft data-backed marketing strategies that deliver tangible business results. Our approach focuses on personalization, innovation, and performance.",
    },
    {
      question: "Do you offer custom marketing plans for each client?",
      answer:
        "Yes — every business is unique, and so are our strategies. We conduct deep research on your market, competitors, and goals to build a fully customized marketing plan that drives measurable ROI.",
    },
    {
      question: "Which industries do you work with?",
      answer:
        "We work with diverse sectors like technology, eCommerce, healthcare, real estate, and more — adapting strategies that align perfectly with each industry's target audience and trends.",
    },
    {
      question: "How does AIMarkLabs use AI in marketing?",
      answer:
        "We integrate AI tools to analyze audience behavior, forecast trends, and optimize campaigns in real-time — ensuring that your marketing performance keeps improving over time.",
    },
  ];

  return (
    <section style={sectionStyle}>
      {/* Heading */}
      <div style={headingContainer}>
        <h2 style={headingStyle}>Frequently Asked Questions</h2>
        <div style={underline}></div>
      </div>

      {/* FAQ Items */}
      <div style={faqContainer}>
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              style={faqItem(isActive)}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <div style={questionStyle}>
                {faq.question}
                <span style={iconStyle(isActive)}>+</span>
              </div>
              <div style={answerStyle(isActive)}>
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
