import React from "react";

export default function Header() {
  const images = [
    {
      src: "/About/first.jpg",
      title: "Intelligent Strategy",
      desc: "AI-powered strategies that drive measurable growth and innovation.",
    },
    {
      src: "/About/Second.jpg",
      title: "Creative Execution",
      desc: "Transforming bold ideas into engaging digital realities.",
    },
    {
      src: "/About/Third.jpg",
      title: "Advanced Analytics",
      desc: "Harnessing data insights for next-generation performance.",
    },
    {
      src: "/About/Four.jpg",
      title: "Seamless Integration",
      desc: "Blending design and intelligence to empower digital ecosystems.",
    },
  ];

  const repeatedImages = [...images, ...images];

  const containerStyle = {
    width: "100%",
    height: "60vh",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
    color: "#fff",
  };

  // LEFT Portion (Center Everything)
  const leftStyle = {
    flex: "0 0 50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", // horizontally center
    textAlign: "center",
    padding: "20px 40px",
    boxSizing: "border-box",
    position: "relative",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "800",
    lineHeight: "1.2",
    marginBottom: "20px",
    position: "relative",
    background: "linear-gradient(90deg, #00f0ff, #0077ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const animatedLine = {
    display: "block",
    height: "4px",
    width: "80px",
    margin: "8px auto 0 auto",
    borderRadius: "2px",
    background: "linear-gradient(90deg, #00f0ff, #0077ff)",
    animation: "slideLine 2s infinite alternate",
  };

  const textStyle = {
    fontSize: "1.15rem",
    color: "#cfd8e3",
    lineHeight: "1.6",
    maxWidth: "500px",
    marginBottom: "25px",
  };

  const highlightsContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "10px",
  };

  const highlightCard = {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "12px",
    padding: "15px 20px",
    minWidth: "140px",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // center inside each card
  };

  const highlightNumber = {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#00d4ff",
    marginBottom: "4px",
  };

  const highlightText = {
    fontSize: "0.9rem",
    color: "#cfd8e3",
    lineHeight: "1.3",
  };

  // RIGHT Portion
  const rightStyle = {
    flex: "0 0 50%",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(180deg, #102742, #0a1a2f)",
    boxShadow: "inset 0 0 30px rgba(0,0,0,0.4)",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
  };

  const imageStrip = {
    display: "flex",
    width: `${repeatedImages.length * 100}%`,
    height: "100%",
    animation: "scrollImages 25s linear infinite",
  };

  const imageWrapper = {
    position: "relative",
    width: `${100 / repeatedImages.length}%`,
    height: "100%",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  };

  const overlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.35)",
    zIndex: 1,
  };

  const infoBox = {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    right: "20px",
    zIndex: 2,
    background: "rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "15px 18px",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  };

  const responsive = `
    @keyframes scrollImages {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @keyframes slideLine {
      0% { transform: translateX(0); }
      100% { transform: translateX(20px); }
    }

    .header-right:hover img {
      transform: scale(1.05);
    }

    .highlight-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    }

    @media (max-width: 992px) {
      .header-container { flex-direction: column !important; height: auto !important; }
      .header-left, .header-right { width: 100% !important; flex: none !important; border-radius: 0 !important; }
      .header-left { padding: 40px 20px !important; text-align: center; align-items: center; }
      .header-right { height: 40vh !important; }
    }

    @media (max-width: 600px) {
      .header-right { height: 35vh !important; }
    }
  `;

  const highlights = [
    { number: "10+", text: "Years of Experience" },
    { number: "200+", text: "Projects Delivered" },
    { number: "50+", text: "Happy Clients" },
    { number: "15", text: "Awards & Recognitions" },
  ];

  return (
    <div className="header-container" style={containerStyle}>
      <style>{responsive}</style>

      {/* LEFT */}
      <div className="header-left" style={leftStyle}>
        <h1 style={headingStyle}>
          Welcome to AIMarkLabs
        </h1>
        <span style={animatedLine}></span>
        <p style={textStyle}>
          Empowering businesses through <span style={{color:"#00f0ff"}}>AI</span>, <span style={{color:"#00f0ff"}}>Design</span> and <span style={{color:"#00f0ff"}}>Digital Transformation</span>. Creativity meets intelligence to craft exceptional experiences.
        </p>

        {/* Highlights */}
        <div style={highlightsContainer}>
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card" style={highlightCard}>
              <div style={highlightNumber}>{item.number}</div>
              <div style={highlightText}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="header-right" style={rightStyle}>
        <div style={imageStrip}>
          {repeatedImages.map((item, index) => (
            <div key={index} style={imageWrapper}>
              <img src={item.src} alt={item.title} style={imageStyle} />
              <div style={overlay}></div>
              <div className="info-box" style={infoBox}>
                <h3 style={{ fontSize:"1.2rem", fontWeight:"700", marginBottom:"4px", color:"#00d4ff" }}>{item.title}</h3>
                <p style={{ fontSize:"0.95rem", color:"#d6e2f0", lineHeight:"1.4" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
