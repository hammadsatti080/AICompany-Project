import React, { useEffect, useState } from "react";

export default function ContactUsRow() {
  const backgroundImage =
    "https://tse1.mm.bing.net/th/id/OIP.-3U6UGzJthg6e7HoxxSWrQHaEF?pid=Api&P=0&h=220";
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    setAnimate(true);
  }, []);

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "600px",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.65)",
    zIndex: 0,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    width: "100%",
    maxWidth: "1200px",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  const cardStyle = {
    flex: "1 1 45%",
    background: "rgba(255,255,255,0.05)",
    padding: "30px",
    borderRadius: "25px",
    backdropFilter: "blur(8px)",
    color: "#fff",
    transition: "all 0.6s ease",
    transform: animate ? "translateY(0)" : "translateY(50px)",
    opacity: animate ? 1 : 0,
  };

  const headingStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#fff",
    textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
  };

  const textStyle = {
    marginBottom: "12px",
    lineHeight: "1.7",
    fontSize: "1rem",
    color: "#fff",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const inputStyle = {
    padding: "14px 18px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  };

  const inputFocusStyle = {
    background: "rgba(255,255,255,0.3)",
    boxShadow: "0 0 12px rgba(255,255,255,0.5)",
  };

  const buttonStyle = {
    padding: "14px 30px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #ffd700, #ff8c00)",
    color: "#0d1b2a",
    fontWeight: "700",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 25px rgba(255,140,0,0.7)",
  };

  const responsiveStyles = `
    @media (max-width: 992px) {
      .contact-content {
        flex-direction: column !important;
        align-items: center;
      }
      .contact-card {
        flex: 1 1 100% !important;
      }
    }
    @media (max-width: 600px) {
      .contact-card {
        padding: 20px !important;
      }
      input, textarea {
        font-size: 0.95rem !important;
      }
    }
  `;

  // --- Handle Form Submit ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const existingMessages = JSON.parse(localStorage.getItem("messages")) || [];
    const newMessage = { ...formData, timestamp: new Date().toISOString() };
    existingMessages.push(newMessage);
    localStorage.setItem("messages", JSON.stringify(existingMessages));
    alert("Message saved locally!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <style>{responsiveStyles}</style>
      <div style={contentStyle} className="contact-content">
        {/* Left Card: Contact Info */}
        <div style={cardStyle} className="contact-card">
          <h2 style={headingStyle}>Call Us</h2>
          <p style={textStyle}><strong>Phone 1:</strong> +1 (805) 538-2647</p>
          <p style={textStyle}><strong>Phone 2:</strong> +1 (304) 920-5203</p>

          <h2 style={headingStyle}>Our Location</h2>
          <p style={textStyle}>
            AI Mark Labs, LLC<br />1110 N Virgil Ave PMB 98121<br />Los Angeles, CA 90029
          </p>

          <h2 style={headingStyle}>Mail Us</h2>
          <p style={textStyle}>Email: sales@aimarklabs.com</p>
        </div>

        {/* Right Card: Contact Form */}
        <div style={cardStyle} className="contact-card">
          <h2 style={headingStyle}>Leave a Message</h2>
          <form style={formStyle} onSubmit={handleSubmit}>
            <input
              style={inputStyle}
              onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
              type="text"
              placeholder="Name*"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              style={inputStyle}
              onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              style={{ ...inputStyle, minHeight: "120px" }}
              onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
              placeholder="Message*"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>
            <button
              type="submit"
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
