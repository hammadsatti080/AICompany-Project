import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CompanyInfoBootstrap() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="display-6 fw-bold mb-3" style={{
            background: "linear-gradient(90deg, #9b5de5, #6a0dad)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Are you looking for Digital Marketing Services?
          </h2>
          <p className="text-muted">
            Get connected with the right experts
          </p>
        </div>

        {/* Buttons Section */}
        <div className="col-md-6 d-flex flex-wrap gap-3">
          <a href="tel:+13049205203" className="btn flex-fill company-btn">
            Call Us: +1 (304) 920-5203
          </a>

          <a href="mailto:sales@aimarklabs.com" className="btn flex-fill company-btn">
            Send Email: sales@aimarklabs.com
          </a>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .company-btn {
          min-width: 180px;
          border-radius: 50px;
          border: 2px solid #9b5de5;
          color: #black;
          font-weight: 600;
          background: transparent;
          transition: all 0.3s ease;
          text-align: center;
        }
        .company-btn:hover {
          background: linear-gradient(90deg, #9b5de5, #6a0dad);
          color: #fff;
          box-shadow: 0 8px 25px rgba(155,93,229,0.5);
        }
      `}</style>
    </div>
  );
}
