import React from "react";

export default function Services() {
  const sectionStyle = {
    width: "100%",
    background: "linear-gradient(135deg, #ffffff 0%, #f5f6f8 100%)",
    padding: "100px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "800",
    color: "#1a1a1a",
    textAlign: "center",
    marginBottom: "60px",
  };

  const cardContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
    width: "100%",
    maxWidth: "1400px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "40px 30px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.06)",
    textAlign: "left",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #eee",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#2a2b4c",
    marginBottom: "15px",
  };

  const subtitleStyle = {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#777",
    marginBottom: "15px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const paragraphStyle = {
    fontSize: "1.05rem",
    lineHeight: "1.8",
    color: "#555",
  };

  const buttonContainer = {
    marginTop: "60px",
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "14px 36px",
    backgroundColor: "#2a2b4c",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const responsiveStyles = `
    @media (max-width: 1200px) {
      .cards {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    @media (max-width: 768px) {
      .cards {
        grid-template-columns: 1fr !important;
      }
      h2 {
        font-size: 2rem !important;
      }
    }
    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    }
    button:hover {
      background-color: #1a1a1a;
      transform: scale(1.05);
    }
  `;

  return (
    <section style={sectionStyle}>
      <style>{responsiveStyles}</style>

      <h2 style={headingStyle}>Our Services</h2>

      <div className="cards" style={cardContainer}>
        {/* Strategy */}
        <div className="card" style={cardStyle}>
          <h3 style={subtitleStyle}>Strategy</h3>
          <h4 style={titleStyle}>Data-Driven Digital Strategy</h4>
          <p style={paragraphStyle}>
            Data-driven digital strategies designed to maximize your brand’s
            growth, engagement, and ROI. By leveraging in-depth analytics, AI
            insights, and market research, we create tailored strategies that
            drive measurable success.
          </p>
        </div>

        {/* Creative */}
        <div className="card" style={cardStyle}>
          <h3 style={subtitleStyle}>Creative</h3>
          <h4 style={titleStyle}>Creative Designing Services</h4>
          <p style={paragraphStyle}>
            Innovative and visually compelling creative solutions that captivate
            audiences and elevate brand identity. From striking graphic design to
            engaging social content and high-impact videos.
          </p>
        </div>

        {/* Development */}
        <div className="card" style={cardStyle}>
          <h3 style={subtitleStyle}>Development</h3>
          <h4 style={titleStyle}>Web & App Development</h4>
          <p style={paragraphStyle}>
            Cutting-edge web and app development for seamless, high-performance
            experiences. From intuitive websites to scalable mobile apps — we
            build fast, user-friendly digital products.
          </p>
        </div>

        {/* Digital Marketing */}
        <div className="card" style={cardStyle}>
          <h3 style={subtitleStyle}>Digital Marketing</h3>
          <h4 style={titleStyle}>AI-Powered Marketing Campaigns</h4>
          <p style={paragraphStyle}>
            AI-powered marketing strategies that boost engagement and maximize
            conversions. With automation, analytics, and AI-driven targeting, we
            deliver campaigns that get real results.
          </p>
        </div>
      </div>

      <div style={buttonContainer}>
        <button style={buttonStyle}>View All</button>
      </div>
    </section>
  );
}
