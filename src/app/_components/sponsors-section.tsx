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
    {
      name: "Wallbit",
      logo: "/Wallbit.png",
      website: "https://www.wallbit.io/",
    },
    {
      name: "Factored",
      logo: "/Factored.png",
      website: "https://www.factored.ai/",
    },
    {
      name: "GoodRec",
      logo: "/good-rec.png",
      website: "https://www.goodrec.com/",
    },
    {
      name: "Trez",
      logo: "/Trez.png",
      website: "https://es.trez.co/",
    },
    {
      name: "n8n",
      logo: "/n8n.png",
      website: "https://n8n.io/",
    },
    {
      name: "OpenRouter",
      logo: "/openrouter.png",
      website: "https://openrouter.ai/",
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

          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {allSponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[160px] sm:w-[200px] lg:w-[220px] h-28 sm:h-36 lg:h-40 flex items-center justify-center rounded-md border border-white/20 transition-all duration-300 hover:bg-white/5 cursor-pointer"
                style={{ backgroundColor: "transparent" }}
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={800}
                  height={480}
                  className="max-h-full max-w-[85%] object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
