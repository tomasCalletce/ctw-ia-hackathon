import { MapPin, ExternalLink, Trophy } from "lucide-react";

export function GeneralInformation() {
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
        <div className="max-w-4xl mx-auto text-center">
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
              Detalles
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
              Todo lo que necesitas{" "}
              <span
                className="font-bold relative inline-block"
                style={{
                  color: "#FFDA35",
                  fontFamily:
                    "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                saber
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 animate-pulse"
                  style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
                />
              </span>
            </h2>
          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            <div className="text-center">
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: "#FFDA35" }}
              >
                24h
              </div>
              <p
                className="text-xs sm:text-sm lg:text-base font-light"
                style={{ color: "#888888" }}
              >
                non-stop hacking
              </p>
            </div>

            <div className="text-center">
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: "#FFDA35" }}
              >
                150
              </div>
              <p
                className="text-xs sm:text-sm lg:text-base font-light"
                style={{ color: "#888888" }}
              >
                participants
              </p>
            </div>

            <div className="text-center">
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: "#FFDA35" }}
              >
                2
              </div>
              <p
                className="text-xs sm:text-sm lg:text-base font-light"
                style={{ color: "#888888" }}
              >
                main tracks
              </p>
            </div>
          </div>

          {/* Location and Date */}
          <div className="space-y-6">
            <div className="text-center">
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
                style={{ color: "#FFDA35" }}
              >
                23-24 Agosto
              </div>
              <p
                className="text-xl sm:text-2xl lg:text-3xl font-light mb-2"
                style={{ color: "#D9D9D9" }}
              >
                Bogotá, Colombia
              </p>
              <p
                className="text-sm sm:text-base italic opacity-70 flex items-center justify-center gap-2"
                style={{ color: "#888888" }}
              >
                <MapPin
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ color: "#FFDA35" }}
                />
                <a
                  href="https://maps.app.goo.gl/4UZ69BveRao7csBF6?g_st=com.google.maps.preview.copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-90 inline-flex items-center gap-1"
                  style={{ color: "#FFDA35" }}
                >
                  Universidad Militar Nueva Granada
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>
            </div>
          </div>

          {/* Prizes */}
          <div className="mt-16 sm:mt-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Trophy
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  style={{ color: "#FFDA35" }}
                />
              </div>

              <div
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #FFDA35 0%, #C8A600 100%)",
                }}
              >
                $4,000 USD
              </div>
              <div
                className="mx-auto mt-2 h-1 w-24 rounded-full animate-pulse"
                style={{ backgroundColor: "#FFDA35", opacity: 0.4 }}
              />

              <p
                className="mt-4 text-sm sm:text-base font-light"
                style={{ color: "#D9D9D9" }}
              >
                + más créditos en
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                <span
                  className="rounded-full border border-white/15 px-3 py-1 text-xs sm:text-sm"
                  style={{ color: "#FFDA35" }}
                >
                  V0
                </span>
                <span
                  className="rounded-full border border-white/15 px-3 py-1 text-xs sm:text-sm"
                  style={{ color: "#FFDA35" }}
                >
                  Supabase
                </span>
                <span
                  className="rounded-full border border-white/15 px-3 py-1 text-xs sm:text-sm"
                  style={{ color: "#FFDA35" }}
                >
                  Firecrawl
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
