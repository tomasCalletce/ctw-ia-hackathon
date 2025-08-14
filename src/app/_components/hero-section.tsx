import Image from "next/image";
import Badge3D from "~/app/_components/3d-badge";
import { BadgeProvider } from "~/contexts/badge-context";
import { ApplyNow } from "~/app/_components/apply-now";
import { CountdownTimer } from "~/app/_components/countdown-timer";

export function HeroSection() {
  return (
    <BadgeProvider>
      <section
        className="h-[100vh] md:h-[80vh] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 218, 53, 0.08) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 hidden md:block z-0 w-full h-screen">
          <Badge3D />
        </div>
        <div className="container mx-auto px-8 lg:px-12 h-full flex items-center relative z-10 pointer-events-none">
          <div className="w-full lg:w-1/2 pointer-events-auto">
            <div className="group mb-4">
              <a
                href="https://www.colombiatechfest.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block cursor-pointer"
              >
                <Image
                  src="/logo.svg"
                  alt="Colombia Tech Fest Logo"
                  width={500}
                  height={200}
                  className="w-full max-w-lg hover:opacity-90 transition-opacity duration-300"
                  priority
                />
              </a>
            </div>
            <div className="mb-12">
              <div className="flex items-center space-x-2 mb-4">
                <div
                  className="w-4 h-0.5 rounded-full"
                  style={{ backgroundColor: "#FFDA35" }}
                />
                <span
                  className="text-xs font-medium tracking-wider uppercase opacity-70"
                  style={{ color: "#D9D9D9" }}
                >
                  Edición Bogotá Agosto 23 - 24 2025
                </span>
              </div>
              <p
                className="text-xl lg:text-xl xl:text-2xl leading-relaxed font-light tracking-wide mb-4"
                style={{ color: "#888888" }}
              >
                La hackathon más grande de{" "}
                <span className="font-medium" style={{ color: "#D9D9D9" }}>
                  Colombia!!!
                </span>
              </p>
              <CountdownTimer />
              <ApplyNow />
            </div>
            <div>
              <div className="flex flex-col space-y-4">
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
    </BadgeProvider>
  );
}
