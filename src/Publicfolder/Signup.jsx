import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function Signup() {
  const gradientTextStyle = {
    background: "linear-gradient(90deg, #0d1b2a, #1b263b, #0d6efd)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Frontend validation
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Create mock user data
      const mockUser = {
        id: `user_${Date.now()}`,
        name: name,
        email: email,
        role: "user",
        createdAt: new Date().toISOString()
      };

      const mockToken = `mock_jwt_token_${Date.now()}`;

      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('token', mockToken);
      localStorage.setItem('isRegistered', 'true');
      
      console.log('User registered and saved to localStorage:', mockUser);

      setSuccess("Signup successful! Redirecting to login...");
      setFormData({ 
        name: "", 
        email: "", 
        password: "", 
        confirmPassword: "" 
      });
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        window.location.href = "/Authentication";
      }, 2000);

    } catch (error) {
      console.error('Signup error:', error);
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Check if user is already registered
  React.useEffect(() => {
    const isRegistered = localStorage.getItem('isRegistered');
    const user = localStorage.getItem('user');
    
    if (isRegistered && user) {
      console.log('User already registered:', JSON.parse(user));
    }
  }, []);

  const inputContainerStyle = {
    position: "relative",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 12px 12px 40px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s ease",
    ":focus": {
      borderColor: "#0d6efd",
    }
  };

  const iconStyle = {
    position: "absolute",
    left: "12px",
    color: "#0d6efd",
    fontSize: "1rem",
  };

  // Function to clear storage (for testing)
  const clearStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('isRegistered');
    setSuccess("LocalStorage cleared!");
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <section
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Left Side (Text Section) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          flex: 4,
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <motion.h1
          style={{ fontSize: "2.5rem", fontWeight: "700", ...gradientTextStyle }}
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, textShadow: "0 0 15px rgba(13,27,42,0.6)" }}
        >
          Welcome to Signup
        </motion.h1>

        <motion.p
          style={{
            fontSize: "1.1rem",
            color: "#0d1b2a",
            textAlign: "center",
            lineHeight: "1.5",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02, color: "#0d6efd" }}
        >
          Join our community and unlock exclusive benefits. Sign up today to get
          started with professional tools and insights.
        </motion.p>

        <motion.p
          style={{ fontSize: "1rem", color: "#0d1b2a", textAlign: "center" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02, color: "#1b263b" }}
        >
          Fast. Secure. Professional.
        </motion.p>

        {/* Storage Status */}
        <motion.div
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #dee2e6",
            textAlign: "center"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#495057" }}>
            <strong>Status:</strong> {loading ? "Processing..." : "Ready"}
          </p>
          <button
            onClick={clearStorage}
            style={{
              marginTop: "8px",
              padding: "5px 10px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.8rem"
            }}
          >
            Clear Storage
          </button>
        </motion.div>

        {/* Registered User Info */}
        {localStorage.getItem('isRegistered') && (
          <motion.div
            style={{
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#d4edda",
              border: "1px solid #c3e6cb"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#155724" }}>
              <strong>Registered User:</strong> {JSON.parse(localStorage.getItem('user'))?.email}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Right Side (Form Section) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          flex: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
          background: "linear-gradient(90deg, #0d1b2a, #1b263b, #0d6efd)",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#ffffff",
            padding: "35px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "400px",
            boxSizing: "border-box",
            boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
          }}
        >
          <motion.h2
            style={{
              marginBottom: "25px",
              textAlign: "center",
              ...gradientTextStyle,
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Signup Form
          </motion.h2>

          {error && (
            <motion.p
              style={{
                color: "red",
                textAlign: "center",
                marginBottom: "15px",
                padding: "10px",
                backgroundColor: "#ffe6e6",
                borderRadius: "5px",
                border: "1px solid #ffcccc",
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.p>
          )}

          {success && (
            <motion.p
              style={{
                color: "green",
                textAlign: "center",
                marginBottom: "15px",
                padding: "10px",
                backgroundColor: "#e6ffe6",
                borderRadius: "5px",
                border: "1px solid #ccffcc",
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {success}
            </motion.p>
          )}

          {/* Name */}
          <motion.div style={inputContainerStyle}>
            <FaUser style={iconStyle} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              style={inputStyle}
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div style={inputContainerStyle}>
            <FaEnvelope style={iconStyle} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={inputStyle}
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </motion.div>

          {/* Password */}
          <motion.div style={inputContainerStyle}>
            <FaLock style={iconStyle} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              style={inputStyle}
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              required
              minLength="6"
            />
          </motion.div>

          {/* Confirm Password */}
          <motion.div style={inputContainerStyle}>
            <FaLock style={iconStyle} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              style={inputStyle}
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={loading}
              required
              minLength="6"
            />
          </motion.div>

          {/* Signup Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={!loading ? {
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
            } : {}}
            style={{
              background: loading 
                ? "#cccccc" 
                : "linear-gradient(90deg, #0d1b2a, #1b263b, #0d6efd)",
              color: "#ffffff",
              padding: "14px",
              fontWeight: "600",
              border: "none",
              borderRadius: "6px",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: "1rem",
              marginBottom: "15px",
              transition: "all 0.3s ease",
            }}
          >
            {loading ? (
              <>
                <span style={{ marginRight: "8px" }}>⏳</span>
                Signing Up...
              </>
            ) : (
              "Signup"
            )}
          </motion.button>

          {/* Login Redirect */}
          <motion.button
            type="button"
            disabled={loading}
            whileHover={!loading ? {
              scale: 1.05,
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            } : {}}
            style={{
              backgroundColor: "#ffffff",
              color: "#0d6efd",
              border: "1px solid #0d6efd",
              padding: "12px",
              fontWeight: "600",
              borderRadius: "6px",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: "1rem",
              opacity: loading ? 0.6 : 1,
            }}
            onClick={() => !loading && (window.location.href = "/Authentication")}
          >
            Already have an account? Login
          </motion.button>
        </form>
      </motion.div>

      {/* Responsive Fix */}
      <style>
        {`
          @media (max-width: 768px) {
            section {
              flex-direction: column;
            }
            section > div {
              clip-path: none !important;
            }
            section > div:nth-child(2) {
              background: linear-gradient(90deg, #0d1b2a, #1b263b, #0d6efd);
              padding: 50px 20px;
            }
            section > div:nth-child(1) {
              padding: 30px 20px;
            }
          }
        `}
      </style>
    </section>
  );
}