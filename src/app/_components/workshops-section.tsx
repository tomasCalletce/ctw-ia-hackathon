"use client";

export function WorkshopsSection() {
  const workshops = [
    {
      date: "Agosto 6",
      embedId: "evt-gIFBydIfBOeIKoR",
      lumaUrl: "https://lu.ma/7xmwzqze",
      recordingUrl: "https://www.youtube.com/watch?v=vZlWvpoq1Hw&t=7s",
    },
    {
      date: "Agosto 7",
      embedId: "evt-GVnGNLiVRVh4vca",
      lumaUrl: "https://lu.ma/fx0e0rp3",
      recordingUrl: "https://www.youtube.com/watch?v=r9qrLsx4osU",
    },
    {
      date: "Agosto 8",
      embedId: "evt-x6LLgLv3nl1uksC",
      lumaUrl: "https://lu.ma/wcfzykgb",
      recordingUrl: "https://www.youtube.com/watch?v=14PdsS60mz4&t=1s",
    },
    {
      date: "Agosto 14",
      embedId: "evt-PIanCiPMYPwyfu6",
      lumaUrl: "https://lu.ma/8dre258s",
    },
    {
      date: "Agosto 15",
      embedId: "evt-15vmIvL3eB3Svnk",
      lumaUrl: "https://lu.ma/n1970q1b",
      tag: "Nuevo",
    },
    {
      date: "Agosto 18",
      embedId: "evt-WuYOuWAOsrUbMQR",
      lumaUrl: "https://lu.ma/xamqoxh2",
      tag: "Nuevo",
    },
    {
      date: "Agosto 19",
      embedId: "evt-W9sHEKIi22CWR4k",
      lumaUrl: "https://lu.ma/7gjn4tv3",
    },
    {
      date: "Agosto 20",
      embedId: "evt-SzmZ2Kan0gg6A9D",
      lumaUrl: "https://lu.ma/wy13k631",
      tag: "Nuevo",
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
                    {workshop.tag && (
                      <span
                        className="ml-2 text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: "#FFDA35", color: "#0C0C0C" }}
                      >
                        {workshop.tag}
                      </span>
                    )}
                    {workshop.recordingUrl && (
                      <a
                        href={workshop.recordingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-xs font-semibold px-3 py-1 rounded-full border border-white/30 hover:border-white/50 hover:bg-white/5 transition-colors"
                        style={{ color: "#D9D9D9" }}
                      >
                        Ver grabación
                      </a>
                    )}
                  </div>
                </div>

                {/* Luma Embed */}
                <div
                  className="p-4 rounded-3xl border border-white/10 shadow-2xl relative group cursor-pointer transition-all duration-300 hover:border-white/20 hover:shadow-3xl"
                  style={{ backgroundColor: "#000000" }}
                  onClick={() => window.open(workshop.lumaUrl, "_blank")}
                >
                  <iframe
                    className="w-full h-[800px] md:h-[460px]"
                    src={`https://lu.ma/embed/event/${workshop.embedId}/simple`}
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
