export function AgendaSection() {
  const agendaItems = [
    {
      id: 1,
      day: "Sábado 23",
      date: "Agosto 2025",
      events: [
        {
          time: "8:00 AM - 9:00 AM",
          title: "Check-in",
          description: "Registro y bienvenida de participantes",
          type: "general",
        },
        {
          time: "9:00 AM - 10:00 AM",
          title: "Conoce a los Patrocinadores",
          description: "Presentación de sponsors",
          type: "networking",
        },
        {
          time: "10:30 AM",
          title: "Inicio de la Hackathon",
          description: "Empieza el cronometro!",
          type: "development",
        },
      ],
    },
    {
      id: 2,
      day: "Domingo 24",
      date: "Agosto 2025",
      events: [
        {
          time: "11:00 AM",
          title: "Cierre de Entregas",
          description: "Deadline final para subir proyectos",
          type: "deadline",
        },
        {
          time: "2:30 p.m. - 3:30 p.m.",
          title: "Demos",
          description: "Presentación de proyectos finalistas",
          type: "pitch",
        },
        {
          time: "3:30 p.m.",
          title: "Anuncio de Ganadores",
          description: "Premiación y cierre del evento",
          type: "awards",
        },
      ],
    },
  ];

  return (
    <section className="pb-16 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
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
              Agenda
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
              Agenda del{" "}
              <span
                className="font-bold relative inline-block"
                style={{
                  color: "#FFDA35",
                  fontFamily:
                    "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                Hackathon
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 animate-pulse"
                  style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
                />
              </span>
            </h2>
          </div>

          {/* Compact Agenda */}
          <div className="space-y-8">
            {agendaItems.map((dayAgenda) => (
              <div key={dayAgenda.id}>
                {/* Day Header */}
                <h3
                  className="text-2xl lg:text-3xl font-bold mb-4"
                  style={{
                    color: "#FFDA35",
                    fontFamily:
                      "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  {dayAgenda.day} de {dayAgenda.date}
                </h3>

                {/* Events List */}
                <div className="space-y-3">
                  {dayAgenda.events.map((event, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-3 border-b border-white/10  transition-colors px-4 rounded"
                    >
                      {/* Time */}
                      <div
                        className="text-base lg:text-lg font-bold shrink-0 sm:w-44"
                        style={{ color: "#FFDA35" }}
                      >
                        {event.time}
                      </div>

                      {/* Event Info */}
                      <div className="flex-1">
                        <h4
                          className="text-lg lg:text-xl font-semibold mb-1"
                          style={{
                            color: "#D9D9D9",
                            fontFamily:
                              "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                          }}
                        >
                          {event.title}
                        </h4>
                        <p
                          className="text-sm lg:text-base"
                          style={{ color: "#B0B0B0" }}
                        >
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
