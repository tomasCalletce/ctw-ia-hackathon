"use client";

export function WorkshopsSection() {
  const workshops = [
    {
      date: "Agosto 6",
      embedId: "evt-gIFBydIfBOeIKoR",
      lumaUrl: "https://lu.ma/7xmwzqze",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            {workshops.map((workshop, index) => (
              <div key={index} className="space-y-4">
                <div className="text-center">
                  <div
                    className="inline-flex items-center space-x-3 px-6 py-3 rounded-full border border-white/20"
                    style={{ backgroundColor: "#000000" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#FFDA35" }}
                    />
                    <span
                      className="text-lg font-semibold tracking-wide"
                      style={{
                        color: "#FFDA35",
                        fontFamily:
                          "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {workshop.date}
                    </span>
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#FFDA35" }}
                    />
                  </div>
                </div>

                {/* Luma Embed */}
                <div
                  className="p-4 rounded-3xl border border-white/10 shadow-2xl relative group cursor-pointer transition-all duration-300 hover:border-white/20 hover:shadow-3xl"
                  style={{ backgroundColor: "#000000" }}
                  onClick={() => window.open(workshop.lumaUrl, "_blank")}
                >
                  <iframe
                    src={`https://lu.ma/embed/event/${workshop.embedId}/simple`}
                    width="100%"
                    height="430"
                    frameBorder="0"
                    style={{
                      border: "1px solid rgba(191, 203, 218, 0.2)",
                      borderRadius: "16px",
                      backgroundColor: "#000000",
                      pointerEvents: "none",
                    }}
                    allow="fullscreen; payment"
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
