import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function Authentication() {
  const gradientTextStyle = {
    background: "linear-gradient(90deg, #0d1b2a, #1b263b, #0d6efd)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    const { email, password } = formData;

    // Frontend validation
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock successful login
      const mockUser = {
        id: "user_123",
        name: "Demo User",
        email: email,
        role: "user"
      };

      const mockToken = "mock_jwt_token_12345";

      // Save to localStorage
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      setSuccess("Login successful! Redirecting to dashboard...");
      
      console.log('User data saved to localStorage:', {
        token: mockToken,
        user: mockUser
      });

      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);

    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Check if user is already logged in
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (token && user) {
      console.log('User already logged in:', JSON.parse(user));
      // Optional: Auto redirect if already logged in
      // window.location.href = "/dashboard";
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

  // Function to clear localStorage (for testing)
  const clearStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
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
          Welcome Back
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
          Sign in to access your account and continue your journey with our professional tools and insights.
        </motion.p>

        <motion.p
          style={{ fontSize: "1rem", color: "#0d1b2a", textAlign: "center" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02, color: "#1b263b" }}
        >
          Secure. Fast. Reliable.
        </motion.p>

        {/* LocalStorage Status */}
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

        {/* Current User Info */}
        {localStorage.getItem('user') && (
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
              <strong>Logged in as:</strong> {JSON.parse(localStorage.getItem('user')).email}
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
            Login Form
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
            />
          </motion.div>

          {/* Forgot Password Link */}
          <motion.div
            style={{
              textAlign: "right",
              marginBottom: "20px",
            }}
          >
            <a
              href="/forgot-password"
              style={{
                color: "#0d6efd",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
              onMouseLeave={(e) => e.target.style.textDecoration = "none"}
            >
              Forgot Password?
            </a>
          </motion.div>

          {/* Login Button */}
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
                Signing In...
              </>
            ) : (
              "Login"
            )}
          </motion.button>

          {/* Signup Redirect */}
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
            onClick={() => !loading && (window.location.href = "/Signup")}
          >
            Don't have an account? Sign Up
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