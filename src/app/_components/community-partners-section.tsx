import Image from "next/image";

export function CommunityPartnersSection() {
  const allPartners = [
    {
      name: "The Growth System",
      logo: "/the-growth-system.png",
      url: "https://thegrowthsystem.co/",
    },
    { name: "Pygma", logo: "/pygma.png", url: "https://www.pygma.co/" },
    { name: "Muno", logo: "/muno.svg", url: " https://www.munolabs.com/" },
    { name: "aztec", logo: "/aztec.png", url: "https://azteclab.co/talleres" },
    { name: "Quix", logo: "/quix.png", url: "https://quix.work/" },
    { name: "Tribu IA", logo: "/tribu.png", url: "https://tribuia.org/" },
    { name: "Lab 10", logo: "/lab-10.png", url: "https://lab10.ai/" },
    { name: "Nodo", logo: "/nodo.png", url: "https://es.nodoeafit.com/" },
    { name: "Bogotá", logo: "/Bogota.png", url: "#" },
    { name: "Invest in Bogotá", logo: "/invest_bogota_white.png", url: "#" },
  ];

  return (
    <section className="pb-16 md:pb-28  relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 218, 53, 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main heading */}
          <div className="space-y-4 sm:space-y-6 mb-8 ">
            <h2
              className="text-3xl font-light tracking-tight leading-tight px-2"
              style={{
                color: "#D9D9D9",
                fontFamily:
                  "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              en{" "}
              <span
                className="font-bold relative inline-block"
                style={{
                  color: "#FFDA35",
                  fontFamily:
                    "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                colaboración
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 animate-pulse"
                  style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
                />
              </span>{" "}
              con
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {allPartners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[160px] sm:w-[200px] lg:w-[220px] h-28 sm:h-36 lg:h-40 flex items-center justify-center rounded-md border border-white/20 transition-all duration-300 hover:bg-white/5 cursor-pointer"
                style={{ backgroundColor: "transparent" }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={800}
                  height={480}
                  className="max-h-full max-w-[85%] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
