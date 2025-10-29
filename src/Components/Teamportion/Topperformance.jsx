import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const teamData = [
  { name: "John Doe", rank: "CEO", department: "Management", image: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty2.webp", info: "Leading the company with strategic vision." },
  { name: "Jane Smith", rank: "CTO", department: "Technology", image: "https://aimarklabs.com/assets/img/demos/business-consulting/About-AIML.webp", info: "Oversees all technical aspects." },
  { name: "Alex Johnson", rank: "AI Strategist", department: "Technology", image: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty2.webp", info: "Ensures campaigns are powered by AI insights." },
  { name: "Emily Davis", rank: "HR Manager", department: "Human Resources", image: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty2.webp", info: "Manages HR processes." },
  { name: "Michael Lee", rank: "Marketing Lead", department: "Marketing", image: "https://aimarklabs.com/assets/img/demos/business-consulting/About-AIML.webp", info: "Drives marketing campaigns." },
  { name: "Sarah Connor", rank: "Designer", department: "Design", image: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty2.webp", info: "Creates innovative designs." },
];

export default function Teamperformance() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const departments = ["All", "Management", "Technology", "Marketing", "Design", "Human Resources"];

  const filteredTeam = teamData.filter((member) => {
    const matchesDept = selectedDept === "All" || member.department === selectedDept;
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.rank.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold" style={{ color: "#0d1b2a" }}>Meet Our Topper</h2>

      {/* Department Buttons */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        {departments.map((dept) => (
          <button
            key={dept}
            className={`btn rounded-pill ${selectedDept === dept ? "btn-dark text-white" : "btn-outline-dark"}`}
            onClick={() => setSelectedDept(dept)}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="d-flex justify-content-center mb-5">
        <input
          type="text"
          placeholder="Search by name or rank..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control w-50 rounded-pill shadow-sm"
        />
      </div>

      {/* Team Cards Grid */}
      <div className="row g-4">
        {filteredTeam.map((member, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card h-100 border-0 shadow-sm overflow-hidden"
            >
              <img
                src={member.image}
                className="card-img-top"
                alt={member.name}
                style={{ height: "280px", objectFit: "cover", borderBottom: "4px solid #0d1b2a" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{member.name}</h5>
                <p className="card-subtitle mb-2 text-muted">{member.rank}</p>
                <p className="card-text">{member.info}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
