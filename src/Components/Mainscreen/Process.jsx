import React, { useState } from "react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [fade, setFade] = useState(true);

  const steps = [
    {
      title: "1. Research & Strategy",
      description:
        "We begin with in-depth research, understanding your brand, audience, and goals. This allows us to build a strategy backed by real insights and data-driven planning.",
    },
    {
      title: "2. Creative Planning",
      description:
        "Our creative team brainstorms unique concepts and visual directions that align with your brand identity and business objectives.",
    },
    {
      title: "3. Design & Development",
      description:
        "We transform ideas into reality through responsive website design, intuitive UI/UX, and robust web or app development tailored to your needs.",
    },
    {
      title: "4. Marketing Execution",
      description:
        "Our experts launch targeted marketing campaigns using SEO, social media, PPC, and AI automation — ensuring consistent growth and engagement.",
    },
    {
      title: "5. Analytics & Optimization",
      description:
        "We continuously monitor, analyze, and refine performance through AI-based analytics to maximize ROI and long-term brand success.",
    },
  ];

  // Responsive Detection
  const isMobile = window.innerWidth <= 768;

  // Styles
  const sectionStyle = {
    width: "100%",
    background: "linear-gradient(135deg, #ffffff 0%, #f5f6f8 100%)",
    padding: isMobile ? "50px 20px" : "80px 40px",
    textAlign: "center",
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
    margin: "0 auto 50px",
  };

  const contentContainer = {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: isMobile ? "30px 20px" : "50px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    transition: "all 0.5s ease",
    minHeight: "220px",
  };

  const titleStyle = {
    fontSize: isMobile ? "1.5rem" : "1.8rem",
    color: "#2a2b4c",
    fontWeight: "700",
    marginBottom: "15px",
  };

  const descStyle = {
    fontSize: isMobile ? "1rem" : "1.1rem",
    color: "#555",
    lineHeight: "1.7",
  };

  const animatedTextStyle = {
    opacity: fade ? 1 : 0,
    transform: fade ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  };

  const dotsContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "50px",
    flexWrap: "wrap",
  };

  const dotStyle = (active) => ({
    width: isMobile ? "45px" : "55px",
    height: isMobile ? "45px" : "55px",
    borderRadius: "50%",
    border: "2px solid #ff7f50",
    backgroundColor: active ? "#ff7f50" : "#fff",
    color: active ? "#fff" : "#2a2b4c",
    fontSize: isMobile ? "1rem" : "1.2rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: active
      ? "0 8px 18px rgba(255, 127, 80, 0.3)"
      : "0 4px 10px rgba(0,0,0,0.05)",
    transform: active ? "scale(1.1)" : "scale(1)",
  });

  const handleStepChange = (index) => {
    setFade(false);
    setTimeout(() => {
      setActiveStep(index);
      setFade(true);
      // Smooth scroll animation
      document
        .getElementById("process-content")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Our Process</h2>
      <div style={underline}></div>

      <div id="process-content" style={contentContainer}>
        <div style={animatedTextStyle}>
          <h3 style={titleStyle}>{steps[activeStep].title}</h3>
          <p style={descStyle}>{steps[activeStep].description}</p>
        </div>
      </div>

      <div style={dotsContainer}>
        {steps.map((_, index) => (
          <div
            key={index}
            style={dotStyle(activeStep === index)}
            onClick={() => handleStepChange(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
