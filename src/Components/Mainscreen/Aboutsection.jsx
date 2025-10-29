import React from "react";

export default function Aboutsection() {
  const sectionStyle = {
    width: "100%",
    minHeight: "50vh",
    background: "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)",
    padding: "100px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#1e1e2f",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    marginBottom: "25px",
  };

  const underline = {
    width: "120px",
    height: "5px",
    backgroundColor: "#ff7f50",
    borderRadius: "5px",
    margin: "0 auto 40px",
  };

  const paragraphStyle = {
    maxWidth: "1000px",
    fontSize: "1.25rem",
    lineHeight: "1.9",
    color: "#444",
    marginBottom: "40px",
  };

  const highlightsContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
    marginTop: "30px",
  };

  const highlightItem = {
    backgroundColor: "#fff",
    padding: "15px 30px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#2a2b4c",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const responsiveStyles = `
    @media (max-width: 992px) {
      h2 {
        font-size: 2.4rem !important;
      }
      p {
        font-size: 1.1rem !important;
      }
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 2rem !important;
      }
      p {
        font-size: 1rem !important;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .highlight:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
  `;

  return (
    <section style={sectionStyle}>
      <style>{responsiveStyles}</style>

      <h2 style={headingStyle}>About AIMarkLabs</h2>
      <div style={underline}></div>

      <p style={paragraphStyle}>
        At <strong>AIMarkLabs</strong>, we believe that powerful marketing
        combines creativity and intelligence. Our team uses AI-driven
        strategies, deep analytics, and modern branding techniques to help
        businesses stand out, scale faster, and achieve measurable results.
        We’re not just marketers — we’re growth partners for forward-thinking
        brands.
      </p>

      <div style={highlightsContainer}>
        <div className="highlight" style={highlightItem}>
          🚀 Data-Driven Growth
        </div>
        <div className="highlight" style={highlightItem}>
          💡 AI-Powered Campaigns
        </div>
        <div className="highlight" style={highlightItem}>
          🤝 100% Client Satisfaction
        </div>
        <div className="highlight" style={highlightItem}>
          🌎 Global Brand Reach
        </div>
      </div>
    </section>
  );
}
