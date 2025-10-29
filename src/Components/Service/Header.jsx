import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Digital Strategy",
    description:
      "Data-driven digital strategies designed to maximize your brand’s growth, engagement, and ROI. By leveraging in-depth analytics, AI insights, and market research, we create tailored strategies that drive measurable success. Our approach ensures that every campaign is optimized for performance, helping your brand thrive in a competitive digital landscape.",
    image: "https://aimarklabs.com/assets/img/demos/business-consulting/About-AIML.webp",
    path: "/service/ai-business",
  },
  {
    title: "Creatives",
    description:
      "Innovative and visually compelling creative solutions that captivate audiences and elevate brand identity. From striking logos and graphic design to engaging content, social media creatives, and high-impact video production, every element is crafted to resonate. Blending storytelling, aesthetics, and strategy, we transform brands into unforgettable digital experiences.",
    image: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty2.webp",
    path: "/service/digital-marketing",
  },
  {
    title: "Development",
    description:
      "Cutting-edge web and app development designed for seamless, high-performance digital experiences. From intuitive websites to powerful mobile apps, create fast, scalable, and user-friendly solutions that enhance functionality and engagement. Development process prioritizes innovation, security, and efficiency to ensure your digital presence stands out.",
    image: "https://aimarklabs.com/assets/img/demos/business-consulting/About-AIML.webp",
    path: "/service/web-app-development",
  },
  {
    title: "Digital Marketing",
    description:
      "AI-powered digital marketing strategies designed to drive traffic, boost engagement, and maximize conversions. By leveraging advanced data analytics, automation, and AI-driven insights, we create targeted campaigns that deliver measurable results. Whether it’s organic growth, paid advertising, or multi-channel marketing, our strategies are built to scale and adapt to evolving market trends.",
    image: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty2.webp",
    path: "/service/ai-research",
  },
];

export default function ServiceSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const repeatedServices = [...services, ...services];

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "60px 0",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.4rem",
          fontWeight: "700",
          color: "#0d1b2a",
          marginBottom: "40px",
        }}
      >
        Our Services
      </h2>

      {/* Desktop: Auto-scroll horizontally */}
      {!isMobile ? (
        <div
          style={{
            overflow: "hidden",
            width: "100%",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              gap: "25px",
              alignItems: "flex-start",
              width: "max-content",
            }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
          >
            {repeatedServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
        </div>
      ) : (
        // Mobile: Stack vertically
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
            padding: "0 20px",
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} mobile />
          ))}
        </div>
      )}
    </div>
  );
}

// ✅ Reusable Card Component
function ServiceCard({ service, mobile }) {
  return (
    <motion.div
      whileHover={!mobile ? { scale: 1.05 } : {}}
      style={{
        width: mobile ? "100%" : "500px",
        backgroundColor: "#fff",
        borderRadius: "18px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        textAlign: "center",
        flexShrink: 0,
        overflow: "visible", // ✅ ensure full description shows
        cursor: "pointer",
        border: "2px solid #0d1b2a10",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={service.image}
        alt={service.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          borderTopLeftRadius: "18px",
          borderTopRightRadius: "18px",
        }}
      />

      <div
        style={{
          padding: "20px 25px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: "700",
              color: "#0d1b2a",
              marginBottom: "15px",
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "#1b263b",
              lineHeight: "1.7",
              textAlign: "justify",
              whiteSpace: "normal", // ✅ allow wrapping
              overflow: "visible", // ✅ ensures no clipping
            }}
          >
            {service.description}
          </p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Link to={service.path} style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{
                backgroundColor: "#1b263b",
                scale: 1.1,
              }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "#0d1b2a",
                color: "#fff",
                padding: "10px 25px",
                borderRadius: "25px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Read More
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
