import React from "react";

const servicesData = [
  {
    title: "SMP (Scalp Micropigmentation)",
    description:
      "Redonnez densité et confiance avec une micropigmentation capillaire réaliste.",
    before: "/images/smp-before.jpg",
    after: "/images/smp-after.jpg",
  },
  {
    title: "Lip Blush",
    description:
      "Sublimez vos lèvres avec une couleur durable et naturelle grâce au tatouage Lip Blush.",
    before: "/images/lips-before.jpg",
    after: "/images/lips-after.jpg",
  },
  {
    title: "Camouflage Cellulite & Cicatrices",
    description:
      "Atténuez les imperfections et unifiez l’apparence de la peau avec des solutions artistiques.",
    before: "/images/cellulite-before.jpg",
    after: "/images/cellulite-after.jpg",
  },
  {
    title: "Tatouage Sourcils",
    description:
      "Obtenez des sourcils parfaits grâce au microblading et aux techniques de tatouage.",
    before: "/images/eyebrows-before.jpg",
    after: "/images/eyebrows-after.jpg",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 sm:px-12 py-16 font-plusjakarta">
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-12 tracking-wide">
        Nos Services
      </h2>

      <div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-300 mb-6">{service.description}</p>
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-2">Avant</p>
                <img
                  src={service.before}
                  alt={`${service.title} avant`}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-2">Après</p>
                <img
                  src={service.after}
                  alt={`${service.title} après`}
                  className="w-full rounded-lg shadow-md"
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
