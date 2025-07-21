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
                className="text-sm sm:text-base italic opacity-70"
                style={{ color: "#888888" }}
              >
                secret location, stay tuned
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
