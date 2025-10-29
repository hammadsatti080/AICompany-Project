import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const teamData = [
  { name: "John Doe", rank: "CEO", image: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty2.webp", info: "Leading the company with strategic vision." },
  { name: "Jane Smith", rank: "CTO", image: "https://aimarklabs.com/assets/img/demos/business-consulting/About-AIML.webp", info: "Oversees all technical aspects." },
  { name: "Alex Johnson", rank: "AI Strategist", image: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty2.webp", info: "Ensures campaigns are powered by AI insights." },
  { name: "Emily Davis", rank: "HR Manager", image: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty2.webp", info: "Manages HR processes." },
  { name: "Michael Lee", rank: "Marketing Lead", image: "https://aimarklabs.com/assets/img/demos/business-consulting/About-AIML.webp", info: "Drives marketing campaigns." },
  { name: "Sarah Connor", rank: "Designer", image: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty2.webp", info: "Creates innovative designs." },
];

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const scrollRef = useRef(null);
  const speed = 1.5; // pixels per frame, adjust for faster/slower scrolling

  const filteredTeam = teamData.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.rank.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    let animationFrame;

    const scroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0 }); // loop back
        } else {
          scrollRef.current.scrollLeft += speed;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return (
    <div className="w-100 py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <h2 className="text-center fw-bold mb-4" style={{ color: "#0d1b2a" }}>Meet Our Team</h2>

      <div className="d-flex justify-content-center mb-5">
        <input
          type="text"
          placeholder="Search by name or rank..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control w-50 rounded-pill shadow-sm"
        />
      </div>

      <div
        ref={scrollRef}
        className="d-flex overflow-hidden gap-4 px-3"
        style={{ scrollBehavior: "smooth", cursor: "grab" }}
      >
        {filteredTeam.concat(filteredTeam).map((member, index) => ( // duplicate for seamless loop
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="card flex-shrink-0"
            style={{
              minWidth: "280px",
              maxWidth: "300px",
              cursor: "pointer",
              borderRadius: "20px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={member.image}
              className="card-img-top"
              alt={member.name}
              style={{ height: "260px", objectFit: "cover", borderBottom: "4px solid #0d1b2a" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">{member.name}</h5>
              <p className="card-subtitle mb-2 text-muted">{member.rank}</p>
              <p className="card-text">{member.info}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
