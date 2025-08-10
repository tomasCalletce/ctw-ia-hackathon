import Image from "next/image";

export function TracksSection() {
  const tracks = [
    {
      id: 1,
      title: "Agentic Apps in WhatsApp",
      description: "Build AI-powered chat apps using WhatsApp API.",
      examples: [
        "Asesor personal para comprar mi primera casa",
        "Planificador de ahorro para compra de vivienda",
        "Verificador de confianza del inmueble o vendedor",
        "Evaluador de riesgos patrimoniales",
        "Traductor inmobiliario",
        "Asistente de revisión de contratos",
        "Guía para usar bien el patrimonio",
        "Actualizador automático del proceso de venta o compra",
        "Conserje de trámites",
      ],
      sponsor: {
        name: "Habi",
        logo: "/Habi.png",
      },
    },
    {
      id: 2,
      title: "MCP Servers & v0 Platform API",
      description:
        "Create MCP servers that enhance. Create apps using v0 Platform API.",
      examples: [
        "PR Review efímero con preview en vivo",
        "Charts on demand",
        "PDF-to-app instantáneo",
        "Copy any website with just a link",
        "Observability coach",
        "Excalidraw-to-app",
        "Figma-to-app",
        "PPT-to-interactive website",
      ],
      sponsor: {
        name: "V0",
        logo: "/v0.png",
      },
    },
  ];

  return (
    <section className="pb-16 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section indicator */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div
              className="w-4 sm:w-6 h-0.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#FFDA35" }}
            />
            <span
              className="text-xs sm:text-sm font-medium tracking-wider uppercase opacity-70"
              style={{ color: "#D9D9D9" }}
            >
              Tracks del Hackathon
            </span>
            <div
              className="w-4 sm:w-6 h-0.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#FFDA35" }}
            />
          </div>

          {/* Main heading */}
          <div className="space-y-4 sm:space-y-6 mb-12 text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight px-2"
              style={{
                color: "#D9D9D9",
                fontFamily:
                  "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Escoge tu{" "}
              <span
                className="font-bold relative inline-block"
                style={{
                  color: "#FFDA35",
                  fontFamily:
                    "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                track
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 animate-pulse"
                  style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
                />
              </span>
            </h2>

            {/* Description */}
            <p
              className="text-lg lg:text-xl leading-relaxed font-light max-w-3xl mx-auto px-2 mt-6"
              style={{ color: "#B0B0B0" }}
            >
              Cada equipo debe escoger uno de los 2 tracks disponibles. En lugar
              de retos predefinidos, buscamos que resuelvan problemas reales
              usando tecnologías de cualquiera de estos temas. El día del evento
              confirmaremos el track elegido por cada equipo.
            </p>
          </div>

          {/* Tracks Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="group relative p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-black/20"
                style={{ backgroundColor: "#000000" }}
              >
                {/* Track Number */}
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                    style={{
                      backgroundColor: "#FFDA35",
                      color: "#0C0C0C",
                    }}
                  >
                    {track.id}
                  </div>
                </div>

                {/* Sponsor Logo - Prominent Display */}
                {track.sponsor && (
                  <div className="mb-8">
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-3">
                          {track.sponsor.logo ? (
                            <Image
                              src={track.sponsor.logo}
                              alt={track.sponsor.name}
                              width={200}
                              height={100}
                              className="w-auto h-16 mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                            />
                          ) : (
                            <div
                              className="text-4xl font-bold mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                              style={{
                                color: "#FFDA35",
                                fontFamily:
                                  "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                                letterSpacing: "0.1em",
                              }}
                            >
                              {track.sponsor.name}
                            </div>
                          )}
                        </div>
                        <div
                          className="text-xs uppercase tracking-[0.3em] font-medium opacity-50"
                          style={{ color: "#FFDA35" }}
                        >
                          Track Sponsor
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Track Title */}
                <h3
                  className="text-2xl lg:text-3xl font-semibold mb-4 leading-tight"
                  style={{
                    color: "#D9D9D9",
                    fontFamily:
                      "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  {track.title}
                </h3>

                {/* Track Description */}
                <p
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: "#B0B0B0" }}
                >
                  {track.description}
                </p>

                {/* Examples */}
                <div className="space-y-3">
                  <h4
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "#FFDA35" }}
                  >
                    Ejemplos:
                  </h4>
                  {track.sponsor?.name === "Habi" && (
                    <p
                      className="text-xs opacity-70"
                      style={{ color: "#888888" }}
                    >
                      Ideas y oportunidades identificadas por Habi.
                    </p>
                  )}
                  {track.sponsor?.name === "V0" && (
                    <p
                      className="text-xs opacity-70"
                      style={{ color: "#888888" }}
                    >
                      Ideas y oportunidades identificadas por v0 by Vercel.
                    </p>
                  )}
                  <ul className="space-y-2">
                    {track.examples.map((example, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-sm leading-relaxed"
                        style={{ color: "#888888" }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: "#FFDA35" }}
                        />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 218, 53, 0.03) 0%, transparent 50%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
