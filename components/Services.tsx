import React from "react";

const servicesData = [
  {
    title: "SMP (Scalp Micropigmentation)",
    description: "Restore your hairline and confidence with natural-looking scalp micropigmentation.",
    before: "/images/smp-before.jpg",
    after: "/images/smp-after.jpg",
  },
  {
    title: "Lips Tattoo",
    description: "Enhance your lips with long-lasting color and definition through lip blush tattooing.",
    before: "/images/lips-before.jpg",
    after: "/images/lips-after.jpg",
  },
  {
    title: "Cellulite Tattoo",
    description: "Cover imperfections and smooth skin appearance with artistic cellulite tattoo solutions.",
    before: "/images/cellulite-before.jpg",
    after: "/images/cellulite-after.jpg",
  },
  {
    title: "Eyebrows Tattoo",
    description: "Achieve perfect brows with microblading and tattoo techniques for a natural look.",
    before: "/images/eyebrows-before.jpg",
    after: "/images/eyebrows-after.jpg",
  },
];

const Services = () => {
  return (
    <div className="services-container" style={{ padding: "2rem", background: "#fafafa" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Nos Services</h2>
      <div
        className="services-grid"
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "1rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "0.5rem" }}>{service.title}</h3>
            <p style={{ marginBottom: "1rem", color: "#555" }}>{service.description}</p>
            <div className="service-images" style={{ display: "flex", gap: "1rem" }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "0.9rem", color: "#777" }}>Before</p>
                <img
                  src={service.before}
                  alt={`${service.title} before`}
                  style={{ width: "100%", borderRadius: "6px" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "0.9rem", color: "#777" }}>After</p>
                <img
                  src={service.after}
                  alt={`${service.title} after`}
                  style={{ width: "100%", borderRadius: "6px" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
