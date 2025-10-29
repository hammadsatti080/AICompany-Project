import React, { useState } from "react";
import { ChevronDown, Clock } from "react-bootstrap-icons";

export default function QAWithOfficeTimingRow() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [showOfficeTiming, setShowOfficeTiming] = useState(false);

  const faqs = [
    { question: "AI-Driven Precision", answer: "Every decision is backed by data and analytics to maximize ROI." },
    { question: "Tailored Strategies", answer: "No one-size-fits-all approach—we craft marketing solutions specific to your brand." },
    { question: "Growth-Focused Results", answer: "We go beyond vanity metrics and focus on real business impact." },
    { question: "Expert Team", answer: "A passionate team of AI specialists, digital marketers, and creative minds dedicated to your success." },
  ];

  // --- Container for two side-by-side sub-divs ---
  const mainContainerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
  };

  // Left and right sub-divs
  const leftDivStyle = { flex: "0 0 60%", display: "flex", flexDirection: "column", gap: "15px" };
  const rightDivStyle = { flex: "0 0 40%", display: "flex", flexDirection: "column", gap: "15px" };

  const headingStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.8rem",
    fontWeight: "700",
    cursor: "pointer",
    background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    padding: "10px 0",
    userSelect: "none",
  };

  const questionStyle = (delay, isOpen) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: isOpen ? "linear-gradient(135deg, #e0f7fa, #b2ebf2)" : "#fff",
    borderRadius: "15px",
    marginBottom: "10px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    transform: showFAQ ? "translateY(0)" : "translateY(20px)",
    opacity: showFAQ ? 1 : 0,
    transition: `all 0.4s ease ${delay}s`,
    fontWeight: isOpen ? 600 : 500,
  });

  const answerStyle = (open) => ({
    maxHeight: open ? "250px" : "0px",
    opacity: open ? 1 : 0,
    padding: open ? "10px 20px" : "0 20px",
    transition: "all 0.5s ease",
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#0d1b2a",
    overflow: "hidden",
    background: "#f7f7f7",
    borderRadius: "0 0 15px 15px",
    marginBottom: "10px",
  });

  const iconStyle = (open) => ({
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  });

  const officeContentStyle = {
    maxHeight: showOfficeTiming ? "400px" : "0px",
    overflow: "hidden",
    transition: "all 0.5s ease",
    fontSize: "1rem",
    background: "#fff",
    borderRadius: "15px",
    padding: showOfficeTiming ? "15px 20px" : "0 20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  };

  const officeRowStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "10px",
    background: "#f0f0f0",
    transition: "all 0.3s ease",
  };

  const officeRowHover = {
    background: "#e0f7fa",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
  };

  return (
    <div style={mainContainerStyle}>
      {/* Left Sub-Div: FAQ */}
      <div style={leftDivStyle}>
        <div style={headingStyle} onClick={() => setShowFAQ(!showFAQ)}>
          <span>Why Choose AI MarkLabs Enterprises?</span>
          <ChevronDown
            size={24}
            style={{ transform: showFAQ ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
          />
        </div>
        {showFAQ &&
          faqs.map((faq, index) => (
            <div key={index}>
              <div
                style={questionStyle(index * 0.1, openIndex === index)}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown size={20} style={iconStyle(openIndex === index)} />
              </div>
              <div style={answerStyle(openIndex === index)}>{faq.answer}</div>
            </div>
          ))}
      </div>

      {/* Right Sub-Div: Office Timing */}
      <div style={rightDivStyle}>
        <div style={headingStyle} onClick={() => setShowOfficeTiming(!showOfficeTiming)}>
          <span>
            <Clock size={24} /> Office Timing
          </span>
          <ChevronDown
            size={24}
            style={{ transform: showOfficeTiming ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
          />
        </div>
        <div style={officeContentStyle}>
          {[
            { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
            { day: "Saturday", time: "Closed" },
            { day: "Sunday", time: "Closed" },
          ].map((row, i) => (
            <div
              key={i}
              style={officeRowStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, officeRowHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, officeRowStyle)}
            >
              <span>{row.day}</span>
              <span>{row.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
