import React, { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Indrusties", path: "/indrusties" },
    {
      name: "Services",
      path: "/service",
      dropdown: [
        { name: "Creative", path: "Creative" },
        { name: "Development", path: "Development" },
        { name: "Digital Marketing", path: "DigitalMarketing" },
        { name: "Digital Strategy", path: "Digital" },
        { name: "ADA Compliance", path: "ADA" },
      ],
    },
    { name: "Contact", path: "/signup" },
  
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const textColor = darkMode ? "white" : "black";

  return (
    <nav
      style={{
        background: darkMode
          ? "linear-gradient(90deg, #0d1b2a, #1b263b, #0d6efd)"
          : "#ffffff",
        padding: "10px 20px",
        transition: "all 0.3s ease",
        position: "relative",
        zIndex: 1000,
      }}
    >
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        {/* Logo */}
        <div style={{ flex: "0 0 10%" }}>
          <img src="/Navbar/logo.svg" alt="Logo" className="img-fluid" />
        </div>

        {/* Desktop Links */}
        <div
          className="d-none d-md-flex"
          style={{ flex: "0 0 80%", justifyContent: "center" }}
        >
          <ul className="d-flex list-unstyled mb-0 flex-wrap">
            {navLinks.map((link) => (
              <li key={link.name} className="mx-3 my-1 position-relative">
                {link.dropdown ? (
                  <>
                    {/* ✅ The main “Services” link now clickable */}
                    <Link
                      to={link.path}
                      style={{
                        textDecoration: "none",
                        color: textColor,
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {link.name}
                      <FaChevronDown style={{ marginLeft: "5px" }} />
                    </Link>

                    {servicesOpen && (
                      <ul
                        className="position-absolute"
                        style={{
                          top: "35px",
                          left: "0",
                          background: darkMode ? "#1b263b" : "#f8f9fa",
                          listStyle: "none",
                          padding: "10px 0",
                          borderRadius: "8px",
                          minWidth: "150px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                          zIndex: 9999,
                        }}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {link.dropdown.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.path}
                              style={{
                                display: "block",
                                padding: "8px 20px",
                                textDecoration: "none",
                                color: darkMode ? "white" : "black",
                                fontWeight: 500,
                                transition: "background 0.3s",
                              }}
                              onClick={() => setServicesOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    style={{
                      textDecoration: "none",
                      fontWeight: 500,
                      color: textColor,
                      padding: "6px 12px",
                      borderRadius: "6px",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor =
                        "rgba(255,255,255,0.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Dark mode + Mobile toggle */}
        <div
          style={{ flex: "0 0 10%", textAlign: "right" }}
          className="d-flex align-items-center justify-content-end"
        >
          <button
            onClick={toggleDarkMode}
            className={`btn btn-outline-${darkMode ? "light" : "dark"} me-2`}
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
          <button
            className="btn btn-outline-secondary d-md-none"
            onClick={toggleMobile}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Links */}
        {mobileOpen && (
          <div className="d-md-none w-100 mt-2" style={{ zIndex: 9999 }}>
            <ul className="list-unstyled mb-0 text-center">
              {navLinks.map((link) => (
                <li key={link.name} className="my-2">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: textColor,
                          fontWeight: 500,
                          cursor: "pointer",
                        }}
                      >
                        {link.name}
                        <FaChevronDown style={{ marginLeft: "5px" }} />
                      </button>
                      {servicesOpen && (
                        <ul
                          style={{
                            listStyle: "none",
                            paddingLeft: 0,
                            marginTop: "5px",
                          }}
                        >
                          {link.dropdown.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.path}
                                style={{
                                  display: "block",
                                  padding: "8px 12px",
                                  textDecoration: "none",
                                  color: darkMode ? "white" : "black",
                                  fontWeight: 500,
                                }}
                                onClick={() => {
                                  setMobileOpen(false);
                                  setServicesOpen(false);
                                }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      style={{
                        textDecoration: "none",
                        fontWeight: 500,
                        color: textColor,
                        padding: "6px 12px",
                        borderRadius: "6px",
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
