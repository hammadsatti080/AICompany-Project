import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WeeklyTopSellers() {
  const items = [
    { title: "Avada | Website Builder For WordPress & eCommerce", sales: 749, price: "$69" },
    { title: "WoodMart - Multipurpose WooCommerce Theme", sales: 320, price: "$59" },
    { title: "Betheme | Responsive Multipurpose WordPress & WooCommerce Theme", sales: 257, price: "$60" },
    { title: "The7 — Ultimate WordPress & WooCommerce Theme", sales: 249, price: "$39" },
    { title: "Flatsome | Multi-Purpose Responsive WooCommerce Theme", sales: 230, price: "$59" },
    { title: "Uncode - Creative & WooCommerce WordPress Theme", sales: 178, price: "$59" },
    { title: "Salient | Creative Multipurpose & WooCommerce Theme", sales: 164, price: "$60" },
    { title: "Bridge - Creative Elementor and WooCommerce WordPress Theme", sales: 120, price: "$69" },
    { title: "Newspaper - News & WooCommerce WordPress Theme", sales: 118, price: "$59" },
    { title: "Porto | Multipurpose & WooCommerce Theme", sales: 99, price: "$59" },
    { title: "Houzez - Real Estate WordPress Theme", sales: 97, price: "$79" },
    { title: "Enfold - Responsive Multi-Purpose Theme", sales: 93, price: "$59" },
  ];

  return (
    <div className="d-flex justify-content-center py-5" style={{ background: "#fff" }}>
      <div className="weekly-container">
        <h2 className="mb-4 fw-bold text-center gradient-text">Weekly Top Sellers</h2>
        <div className="row g-4">
          {items.map((item, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-4">
              <div className="card top-seller-card h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted mb-2">{item.sales} Sales</p>
                  <p className="fw-bold mb-0">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .weekly-container {
          width: 80%;
          max-width: 1200px;
        }
        @media (max-width: 992px) {
          .weekly-container {
            width: 90%;
          }
        }
        @media (max-width: 576px) {
          .weekly-container {
            width: 95%;
          }
        }

        /* Gradient heading */
        .gradient-text {
          background: linear-gradient(90deg, #9b5de5, #6a0dad);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Card styling */
        .top-seller-card {
          border-radius: 20px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .top-seller-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(155,93,229,0.3);
        }

        .card-title {
          font-size: 1rem;
          font-weight: 600;
        }
        .card-text {
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
