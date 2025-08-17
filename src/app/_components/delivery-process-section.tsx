export function DeliveryProcessSection() {
  const deliveryRequirements = [
    {
      id: 1,
      title: "Video Demo",
      description:
        "Máximo 2 minutos, entregado por la plataforma de YouTube. Recuerde que el video debe ser público",
      icon: "🎥",
      required: true,
    },
    {
      id: 2,
      title: "Video Pitch",
      description:
        "Máximo 2 minutos, entregado por la plataforma de YouTube. Recuerde que el video debe ser público",
      icon: "🎤",
      required: true,
    },
    {
      id: 3,
      title: "Pitch Deck",
      description: "Máximo 10 slides (opcional)",
      icon: "📊",
      required: false,
    },
    {
      id: 4,
      title: "Repositorio GitHub",
      description:
        "Link del repositorio público en GitHub, con readme, licencia, y instrucciones de setup",
      icon: "💻",
      required: true,
    },
    {
      id: 5,
      title: "Producto en Producción",
      description: "Link del producto en producción (si aplica)",
      icon: "🚀",
      required: false,
    },
    {
      id: 6,
      title: "Comparte el Demo en LinkedIn",
      description: "Muestra a todo el mundo lo que construiste (opcional)",
      icon: "💼",
      required: false,
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
              Proceso
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
              ¿Cómo van a funcionar las{" "}
              <span
                className="font-bold relative inline-block"
                style={{
                  color: "#FFDA35",
                  fontFamily:
                    "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                entregas
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 animate-pulse"
                  style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
                />
              </span>{" "}
              de los proyectos?
            </h2>

            {/* Description */}
            <p
              className="text-lg lg:text-xl leading-relaxed font-light max-w-4xl mx-auto px-2 mt-6"
              style={{ color: "#B0B0B0" }}
            >
              Cada equipo debe cumplir con los siguientes{" "}
              <span style={{ color: "#FFDA35", fontWeight: "600" }}>
                requisitos de entrega
              </span>{" "}
              para participar en la evaluación. Asegúrate de revisar
              cuidadosamente cada elemento antes de la hora de entrega.
            </p>
          </div>

          {/* Delivery Requirements Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {deliveryRequirements.map((requirement) => (
              <div
                key={requirement.id}
                className="group relative p-4 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-black/20"
                style={{ backgroundColor: "#000000" }}
              >
                {/* Icon and Required Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{requirement.icon}</div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      requirement.required ? "text-red-900" : "text-gray-900"
                    }`}
                    style={{
                      backgroundColor: requirement.required
                        ? "#FF6B6B"
                        : "#B0B0B0",
                    }}
                  >
                    {requirement.required ? "Obligatorio" : "Opcional"}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl lg:text-2xl font-semibold mb-2 leading-tight"
                  style={{
                    color: "#D9D9D9",
                    fontFamily:
                      "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  {requirement.title}
                </h3>

                {/* Description */}
                <p
                  className="text-base lg:text-lg leading-relaxed"
                  style={{ color: "#B0B0B0" }}
                >
                  {requirement.description}
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
