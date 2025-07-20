import Image from "next/image";

export function CommunityPartnersSection() {
  const allPartners = [
    { name: "Partner 1", logo: null },
    { name: "Partner 2", logo: null },
    { name: "Partner 3", logo: null },
    { name: "Partner 4", logo: null },
    { name: "Partner 5", logo: null },
  ];

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 218, 53, 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section indicator */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div
              className="w-4 sm:w-6 h-0.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#FFDA35" }}
            />
            <span
              className="text-xs sm:text-sm font-medium tracking-wider uppercase opacity-70"
              style={{ color: "#D9D9D9" }}
            >
              Community Partners
            </span>
            <div
              className="w-4 sm:w-6 h-0.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#FFDA35" }}
            />
          </div>

          {/* Main heading */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-tight px-2"
              style={{
                color: "#D9D9D9",
                fontFamily:
                  "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              nuestra{" "}
              <span
                className="font-bold relative inline-block"
                style={{
                  color: "#FFDA35",
                  fontFamily:
                    "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                comunidad
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 animate-pulse"
                  style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
                />
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0 max-w-fit mx-auto border border-white/20">
            {allPartners.map((partner, index) => (
              <div
                key={index}
                className="group relative aspect-[3/2] flex items-center justify-center p-4 border-r border-b border-white/20 last:border-r-0 transition-all duration-300 hover:bg-white/5"
                style={{ backgroundColor: "transparent" }}
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={800}
                    height={480}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <div
                    className="text-sm opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    style={{ color: "#666666" }}
                  >
                    {partner.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}