import React from "react";

export default function Team() {
  const teamMembers = [
    {
      name: "Sophia Martinez",
      role: "Founder & CEO",
      img: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Aisha.webp",
    },
    {
      name: "James Carter",
      role: "Head of Digital Strategy",
      img: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Andy.webp",
    },
    {
      name: "Ava Johnson",
      role: "Creative Director",
      img: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Ali.webp",
    },
    {
      name: "Liam Smith",
      role: "Lead Developer",
      img: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty.webp",
    },
  ];

  const sectionStyle = {
    width: "100%",
    backgroundColor: "#2a2b4c",
    padding: "80px 20px",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#fff",
    marginBottom: "10px",
  };

  const subHeadingStyle = {
    fontSize: "1.1rem",
    color: "#dcdcdc",
    marginBottom: "40px",
  };

  const underline = {
    width: "80px",
    height: "4px",
    backgroundColor: "#d4af37",
    borderRadius: "2px",
    margin: "0 auto 50px",
  };

  const teamContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto 50px",
    transition: "all 0.3s ease",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    overflow: "hidden",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "340px",
    objectFit: "cover",
    transition: "transform 0.5s ease, filter 0.5s ease",
  };

  const contentStyle = { padding: "25px" };

  const nameStyle = {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#2a2b4c",
    marginBottom: "8px",
  };

  const roleStyle = { fontSize: "1rem", color: "#777" };

  const buttonContainer = { marginTop: "30px" };

  const buttonStyle = {
    background: "linear-gradient(135deg, #2a2b4c, #1d1e36)",
    color: "#fff",
    border: "none",
    padding: "12px 35px",
    fontSize: "1rem",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const buttonHover = {
    background: "linear-gradient(135deg, #1d1e36, #2a2b4c)",
    transform: "scale(1.05)",
  };

  const responsiveStyles = `
    /* Tablet view */
    @media (max-width: 992px) {
      .team-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Mobile full-width cards */
    @media (max-width: 600px) {
      .team-container {
        grid-template-columns: 1fr !important;
        gap: 20px;
        width: 100%;
        padding: 0 10px;
      }

      .team-card {
        width: 100%;
        max-width: 100%;
      }

      .team-card img {
        height: 300px;
      }

      h2 {
        font-size: 2rem !important;
      }

      p {
        font-size: 1rem !important;
      }
    }
  `;

  return (
    <section style={sectionStyle}>
      <style>{responsiveStyles}</style>

      <h2 style={headingStyle}>Our Team</h2>
      <p style={subHeadingStyle}>
        Meet the creative minds and digital innovators behind AIMarkLabs’ success.
      </p>
      <div style={underline}></div>

      <div className="team-container" style={teamContainer}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card"
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              const img = e.currentTarget.querySelector("img");
              img.style.transform = "scale(1.08)";
              img.style.filter = "brightness(90%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              const img = e.currentTarget.querySelector("img");
              img.style.transform = "scale(1)";
              img.style.filter = "brightness(100%)";
            }}
          >
            <img src={member.img} alt={member.name} style={imageStyle} />
            <div style={contentStyle}>
              <h3 style={nameStyle}>{member.name}</h3>
              <p style={roleStyle}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={buttonContainer}>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, buttonHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
        >
          View All Team
        </button>
      </div>
    </section>
  );
}
