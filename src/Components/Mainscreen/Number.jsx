import React, { useState, useEffect } from "react";

const statsData = [
  { label: "Yrs of Experience", value: 15, suffix: "+" },
  { label: "Orders Completed", value: 380, suffix: "+" },
  { label: "Satisfied Clients", value: 195, suffix: "+" },
  { label: "Marketing Experts", value: 75, suffix: "+" },
];

const Number = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 4000; // total duration in ms
    const intervals = statsData.map((stat, index) => {
      const steps = 100; // number of increments
      const increment = stat.value / steps;
      const intervalTime = duration / steps;

      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(newCounts[index] + increment, stat.value);
          }
          return newCounts;
        });
      }, intervalTime);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <section style={{ padding: "2rem", textAlign: "center", backgroundColor: "#2a2b4c" }}>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {statsData.map((stat, index) => (
          <div key={index} style={{ margin: "1rem", minWidth: "150px" }}>
            <h2 style={{ fontSize: "2rem", color: "orange" }}>
              {Math.floor(counts[index])}{stat.suffix}
            </h2>
            <p style={{ fontSize: "1rem", color: "white" }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Number;
