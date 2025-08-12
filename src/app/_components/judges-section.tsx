import Image from "next/image";

interface JudgeInfo {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

export function JudgesSection() {
  const judges: JudgeInfo[] = [
    {
      name: "Adrian Mastronardi",
      role: "CTO Habi",
      image: "/Juez-AdrianMastronardi-1-1.png",
      linkedin: "https://www.linkedin.com/in/amastronardi/",
    },
    {
      name: "Camila Rueda",
      role: "Program Director & Partner @ Rockstart",
      image: "/Juez-CamilaRueda-1-1.png",
      linkedin: "https://www.linkedin.com/in/maria-camila-rueda/",
    },
    {
      name: "Diego Vargas",
      role: "VC @ NXTP",
      image: "/Juez-DiegoVargas-1-1.png",
      linkedin: "https://www.linkedin.com/in/diego-vargas-7b1ab01b8/",
    },
    {
      name: "Lewis Black",
      role: "Cofounder and CEO Good Rec",
      image: "/Lewis Black.png",
      linkedin: "https://www.goodrec.com/",
    },
    {
      name: "Midori Koide",
      role: "Cofounder Good Rec",
      image: "/Midori Koide.png",
      linkedin: "https://www.goodrec.com/",
    },
  ];

  return (
    <section className="pb-16 md:pb-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 218, 53, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <div className="space-y-4 mb-8 sm:mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight px-2"
              style={{
                color: "#D9D9D9",
                fontFamily:
                  "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Conoce a nuestro{" "}
              <span
                className="font-bold relative inline-block"
                style={{
                  color: "#FFDA35",
                  fontFamily:
                    "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                jurado
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 animate-pulse"
                  style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
                />
              </span>
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-3xl mx-auto px-2"
              style={{ color: "#B0B0B0" }}
            >
              Super cracks que evaluarán los proyectos más ambiciosos.
            </p>
          </div>

          {/* Judges Grid (match sponsors layout: centered flex wrap) */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-6 max-w-6xl mx-auto">
            {judges.map((judge) => (
              <a
                key={judge.name}
                href={judge.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir LinkedIn de ${judge.name}`}
                title={`LinkedIn de ${judge.name}`}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 w-[92vw] max-w-[420px] sm:w-[360px] md:w-[300px] lg:w-[280px]"
                style={{ backgroundColor: "#0A0A0A" }}
              >
                {/* Gradient border wrapper */}
                <div
                  className="p-[1px] rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,218,53,0.35), rgba(255,255,255,0.05))",
                  }}
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                    <Image
                      src={judge.image}
                      alt={judge.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                      priority
                    />
                    {/* Subtle vignette */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(80% 80% at 50% 20%, transparent 0%, rgba(0,0,0,0.15) 100%)",
                      }}
                    />
                    {/* Bottom info panel (centered, higher contrast) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[88%]">
                      <div className="backdrop-blur-sm bg-black/70 border border-white/10 px-4 py-3 md:py-3.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                        <div className="text-center space-y-1">
                          <div className="font-semibold leading-snug tracking-wide text-white text-[1.05rem] sm:text-[0.95rem]">
                            {judge.name}
                          </div>
                          <div
                            className="text-sm sm:text-sm leading-snug"
                            style={{ color: "#E5E5E5" }}
                          >
                            {judge.role}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,218,53,0.06) 0%, rgba(0,0,0,0) 40%)",
                      }}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
