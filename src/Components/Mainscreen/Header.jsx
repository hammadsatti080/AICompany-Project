import React, { useState } from "react";

export default function Header() {
  const bgimage = {
    width: "100%",
    height: "60vh",
    backgroundImage: "url('./Navbar/DGM3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  };

  const overlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  };

  const content = {
    zIndex: 2,
    maxWidth: "90%", // adjust width for small screens
    padding: "0 10px",
  };

  const baseHeadingStyle = {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "1rem",
    lineHeight: "1.2",
    transition: "all 0.3s ease",
    cursor: "pointer",
    wordWrap: "break-word",
  };

  const baseParagraphStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    transition: "all 0.3s ease",
    cursor: "pointer",
    wordWrap: "break-word",
  };

  const dotsContainer = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    gap: "12px",
    flexWrap: "wrap",
  };

  const dotStyle = (active) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: active ? "orange" : "white",
    cursor: "pointer",
    border: "2px solid orange",
  });

  const slides = [
    {
      heading: "Grow Your Business with Professional Digital Marketing",
      paragraph:
        "We create modern websites, innovative marketing strategies, and effective campaigns that boost your brand and drive results.",
    },
    {
      heading: "Boost Your Brand Visibility",
      paragraph:
        "Our team specializes in SEO, social media, and content marketing to get your business noticed online.",
    },
    {
      heading: "Modern Websites for Modern Businesses",
      paragraph:
        "We design responsive, fast, and user-friendly websites that reflect your brand and convert visitors into customers.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(true);

  const handleSlideChange = (index) => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimate(true);
    }, 200);
  };

  // ✅ Responsive adjustments via inline media queries
  const responsiveStyles = `
    @media (max-width: 768px) {
      h1 {
        font-size: 2rem !important;
      }
      p {
        font-size: 1rem !important;
      }
      .dots div {
        width: 10px !important;
        height: 10px !important;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 1.7rem !important;
      }
      p {
        font-size: 0.9rem !important;
      }
    }

    body {
      overflow-x: hidden; /* ✅ prevent left-right movement */
      margin: 0;
      padding: 0;
    }
  `;

  return (
    <>
      {/* Add responsive style directly in component */}
      <style>{responsiveStyles}</style>

      <div style={bgimage}>
        <div style={overlay}></div>
        <div style={content}>
          <h1
            style={{
              ...baseHeadingStyle,
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-5px) scale(1.05)";
              e.target.style.color = "orange";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.color = "white";
            }}
          >
            {slides[currentSlide].heading}
          </h1>

          <p
            style={{
              ...baseParagraphStyle,
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px) scale(1.02)";
              e.target.style.color = "orange";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.color = "white";
            }}
          >
            {slides[currentSlide].paragraph}
          </p>

          <div className="dots" style={dotsContainer}>
            {slides.map((_, index) => (
              <div
                key={index}
                style={dotStyle(index === currentSlide)}
                onClick={() => handleSlideChange(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
