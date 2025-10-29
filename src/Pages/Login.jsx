import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
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
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert(`Welcome back, ${user.fullName || "User"}!`);
        window.location.href = "/dashboard";
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputContainerStyle = {
    position: "relative",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 45px 14px 45px",
    borderRadius: "8px",
    border: "2px solid #e2e8f0",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
    backgroundColor: "#f8fafc",
  };

  const iconStyle = {
    position: "absolute",
    left: "15px",
    color: "#64748b",
    fontSize: "1.1rem",
    zIndex: 1,
  };

  const passwordToggleStyle = {
    position: "absolute",
    right: "15px",
    color: "#64748b",
    fontSize: "1.1rem",
    cursor: "pointer",
    zIndex: 1,
  };

  return (
    <section
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      {/* Left Side (Login Form) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          flex: "1 1 500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
          background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #0d6efd 100%)",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            width: "100%",
            maxWidth: "450px",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              padding: "40px 35px",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              boxSizing: "border-box",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <motion.h2
              style={{ 
                marginBottom: "30px", 
                textAlign: "center", 
                fontSize: "2rem",
                fontWeight: "700",
                ...gradientTextStyle 
              }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Welcome Back
            </motion.h2>

            {error && (
              <motion.div 
                style={{ 
                  color: "#dc2626", 
                  textAlign: "center", 
                  marginBottom: "20px",
                  padding: "12px",
                  backgroundColor: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {error}
              </motion.div>
            )}

            {/* Email Field */}
            <motion.div 
              style={inputContainerStyle}
              whileFocus={{ scale: 1.02 }}
            >
              <FaEnvelope style={iconStyle} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                style={inputStyle}
                value={formData.email}
                onChange={handleChange}
                onFocus={(e) => {
                  e.target.style.borderColor = "#0d6efd";
                  e.target.style.backgroundColor = "#ffffff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e2e8f0";
                  e.target.style.backgroundColor = "#f8fafc";
                }}
                disabled={loading}
              />
            </motion.div>

            {/* Password Field */}
            <motion.div 
              style={inputContainerStyle}
              whileFocus={{ scale: 1.02 }}
            >
              <FaLock style={iconStyle} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                style={inputStyle}
                value={formData.password}
                onChange={handleChange}
                onFocus={(e) => {
                  e.target.style.borderColor = "#0d6efd";
                  e.target.style.backgroundColor = "#ffffff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e2e8f0";
                  e.target.style.backgroundColor = "#f8fafc";
                }}
                disabled={loading}
              />
              <div 
                style={passwordToggleStyle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </motion.div>

            {/* Forgot Password */}
            <motion.div
              style={{
                textAlign: "right",
                marginBottom: "25px",
              }}
            >
              <a
                href="/forgot-password"
                style={{
                  color: "#0d6efd",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
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
                scale: 1.02, 
                boxShadow: "0 12px 30px rgba(13, 110, 253, 0.3)" 
              } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              style={{
                background: loading 
                  ? "#94a3b8" 
                  : "linear-gradient(90deg, #0d1b2a, #1b263b, #0d6efd)",
                color: "#ffffff",
                padding: "16px",
                fontWeight: "600",
                border: "none",
                borderRadius: "8px",
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: "1rem",
                marginBottom: "20px",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {loading ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Signing In...
                </motion.span>
              ) : (
                "Sign In"
              )}
            </motion.button>

            {/* Divider */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              margin: "20px 0",
              color: "#64748b"
            }}>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#e2e8f0" }} />
              <span style={{ padding: "0 15px", fontSize: "0.9rem" }}>or</span>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#e2e8f0" }} />
            </div>

            {/* Signup Redirect */}
            <motion.button
              type="button"
              disabled={loading}
              whileHover={!loading ? { 
                scale: 1.02, 
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)" 
              } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              style={{
                backgroundColor: "transparent",
                color: "#0d6efd",
                border: "2px solid #0d6efd",
                padding: "14px",
                fontWeight: "600",
                borderRadius: "8px",
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }}
              onClick={() => !loading && (window.location.href = "/signup")}
            >
              Create New Account
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Right Side (Info Section) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          flex: "1 1 500px",
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          flexDirection: "column",
          gap: "30px",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <motion.div
          style={{
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <motion.h1
            style={{ 
              fontSize: "3rem", 
              fontWeight: "800", 
              marginBottom: "20px",
              ...gradientTextStyle 
            }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            Welcome Back!
          </motion.h1>

          <motion.p
            style={{
              fontSize: "1.2rem",
              color: "#475569",
              textAlign: "center",
              lineHeight: "1.6",
              marginBottom: "25px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Log in to continue exploring your personalized dashboard, access exclusive tools, 
            and manage your account with enterprise-grade security.
          </motion.p>

          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              alignItems: "center",
            }}
          >
            {["🔒 Enterprise Security", "⚡ Lightning Fast", "🎯 Personalized Experience"].map((feature, index) => (
              <motion.div
                key={feature}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#334155",
                  fontSize: "1rem",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, color: "#0d6efd" }}
              >
                <div style={{ fontSize: "1.2rem" }}>{feature.split(' ')[0]}</div>
                <span>{feature.split(' ').slice(1).join(' ')}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 968px) {
            section {
              flex-direction: column;
            }
            section > div {
              min-height: 50vh !important;
              flex: 1 1 auto !important;
            }
            section > div:nth-child(1) {
              background: linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #0d6efd 100%) !important;
            }
          }
          
          @media (max-width: 480px) {
            section > div {
              padding: 30px 15px !important;
            }
            form {
              padding: 30px 20px !important;
            }
          }

          /* Loading animation */
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </section>
  );
}