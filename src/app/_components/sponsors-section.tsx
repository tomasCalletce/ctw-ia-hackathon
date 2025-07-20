import Image from "next/image";

export function SponsorsSection() {
  const allSponsors = [
    { name: "Habi", logo: "/Habi.png", website: "https://habi.co" },
    { name: "V0", logo: "/v0.png", website: "https://v0.dev" },
    {
      name: "Supabase",
      logo: "/supabase.png",
      website: "https://supabase.com",
    },
    {
      name: "Firecrawl",
      logo: "/firecrawl.png",
      website: "https://firecrawl.dev",
    },
    {
      name: "Publicis Sapient",
      logo: "/publicis-sapien.png",
      website: "https://publicissapient.com",
    },
  ];

  return (
    <section className="pb-16 md:pb-28  relative overflow-hidden">
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
              con el{" "}
              <span
                className="font-bold relative inline-block"
                style={{
                  color: "#FFDA35",
                  fontFamily:
                    "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                apoyo
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 animate-pulse"
                  style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
                />
              </span>{" "}
              de
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0 max-w-fit mx-auto border border-white/20">
            {allSponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[3/2] flex items-center justify-center  border-r border-b border-white/20 last:border-r-0 transition-all duration-300 hover:bg-white/5 cursor-pointer"
                style={{ backgroundColor: "transparent" }}
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={800}
                  height={480}
                  className="w-full h-full object-contain "
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
