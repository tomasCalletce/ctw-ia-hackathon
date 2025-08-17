export function EvaluationCriteriaSection() {
  const criteria = [
    {
      id: 1,
      title: "Innovation & Impact",
      description: "¿Resuelve un problema real de forma diferente?",
      weight: "35%",
      icon: "💡",
    },
    {
      id: 2,
      title: "Technical Execution",
      description: "Código limpio, demo reproducible y excelencia técnica",
      weight: "30%",
      icon: "⚙️",
    },
    {
      id: 3,
      title: "Viability",
      description: "¿Puede esto convertirse en un producto?",
      weight: "20%",
      icon: "🚀",
    },
    {
      id: 4,
      title: "Pitch & UX",
      description: "Mensaje claro y efectivo. ¿Vende?",
      weight: "15%",
      icon: "🎯",
    },
  ];

  return (
    <section className="pb-16 md:pb-28  relative overflow-hidden">
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
              Evaluación
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
              Criterios de{" "}
              <span
                className="font-bold relative inline-block"
                style={{
                  color: "#FFDA35",
                  fontFamily:
                    "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                Evaluación
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 animate-pulse"
                  style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
                />
              </span>
            </h2>

            {/* Description */}
            <p
              className="text-lg lg:text-xl leading-relaxed font-light max-w-4xl mx-auto px-2 mt-6"
              style={{ color: "#B0B0B0" }}
            >
              Los mentores son los encargados de filtrar las entregas hasta
              obtener a un{" "}
              <span style={{ color: "#FFDA35", fontWeight: "600" }}>
                top 3 por track
              </span>
              . Este top 3 es invitado a presentar frente a los jueces y hacer
              un pitch en vivo. La estrategia de evaluación es la siguiente: se
              asigna un{" "}
              <span style={{ color: "#FFDA35", fontWeight: "600" }}>
                puntaje del 1 al 5
              </span>{" "}
              para cada uno de los criterios y se calcula un promedio ponderado
              para la entrega de cada equipo.
            </p>
          </div>

          {/* Criteria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {criteria.map((criterion) => (
              <div
                key={criterion.id}
                className="group relative p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-black/20"
                style={{ backgroundColor: "#000000" }}
              >
                {/* Icon and Weight */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{criterion.icon}</div>
                  <div
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: "#FFDA35",
                      color: "#0C0C0C",
                    }}
                  >
                    {criterion.weight}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl lg:text-2xl font-semibold mb-3 leading-tight"
                  style={{
                    color: "#D9D9D9",
                    fontFamily:
                      "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  {criterion.title}
                </h3>

                {/* Description */}
                <p
                  className="text-base lg:text-lg leading-relaxed"
                  style={{ color: "#B0B0B0" }}
                >
                  {criterion.description}
                </p>

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
