import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function WorkshopsHero() {
  return (
    <section
      className="flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "transparent" }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 218, 53, 0.08) 0%, transparent 70%)",
        }}
      />
      <div className="container pt-24 mx-auto px-8 lg:px-12 h-full flex items-center relative z-10">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:opacity-80 group"
          style={{ color: "#FFDA35" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </Link>
        <div className="w-full text-center">
          <div className="group mb-8">
            <a
              href="https://www.colombiatechfest.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer"
            >
              <Image
                src="/logo.svg"
                alt="Colombia Tech Fest Logo"
                width={400}
                height={160}
                className="w-full max-w-md mx-auto hover:opacity-90 transition-opacity duration-300"
                priority
              />
            </a>
          </div>
          <div className="mb-12">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-6"
              style={{
                color: "#D9D9D9",
                fontFamily:
                  "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              Prepárate para IA{" "}
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
            </h1>
            <p
              className="text-xl leading-relaxed font-light tracking-wide max-w-3xl mx-auto"
              style={{ color: "#888888" }}
            >
              Únete a nuestros workshops gratuitos y aprende las tecnologías que
              necesitas para competir en{" "}
              <span className="font-medium" style={{ color: "#D9D9D9" }}>
                la IA Hackathon más grande de Colombia
              </span>
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center space-y-4">
              <p
                className="text-xs uppercase tracking-[0.2em] font-medium opacity-60"
                style={{ color: "#888888" }}
              >
                Organizado por
              </p>
              <div className="group">
                <a
                  href="https://www.colombiatechfest.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block cursor-pointer"
                >
                  <Image
                    src="/col-makers.svg"
                    alt="Col Makers - Organizadores"
                    width={200}
                    height={70}
                    className="opacity-70 hover:opacity-90 transition-opacity duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
