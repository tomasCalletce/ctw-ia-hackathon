import Image from "next/image";
import Badge3D from "~/app/_components/3d-badge";
import { BadgeForm } from "~/app/_components/main-form";
import { Suspense } from "react";
import { BadgeProvider } from "~/app/_context/badge-context";

export function HeroSection() {
  return (
    <BadgeProvider>
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: "transparent" }}
      >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 218, 53, 0.08) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 right-0 opacity-20 animate-pulse">
        <Image
          src="/box2.svg"
          alt=""
          width={150}
          height={150}
          className="transform w-16 h-16 md:w-[150px] md:h-[150px]"
        />
      </div>
      <div className="absolute bottom-0 left-0 opacity-20 animate-pulse">
        <Image
          src="/box2.svg"
          alt=""
          width={150}
          height={150}
          className="transform rotate-180 w-16 h-16 md:w-[150px] md:h-[150px]"
        />
      </div>
      <div className="absolute bottom-0 right-0 opacity-20 animate-pulse">
        <Image
          src="/box1.svg"
          alt=""
          width={150}
          height={150}
          className="transform rotate-180 w-16 h-16 md:w-[150px] md:h-[150px]"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <Badge3D />
      </div>
      <div className="container mx-auto px-8 lg:px-12 h-full flex items-center relative z-10 pointer-events-none">
        <div className="w-full lg:w-1/2 lg:pr-16 pointer-events-auto">
          <div className="group mb-4">
            <Image
              src="/logo.svg"
              alt="Colombia Tech Fest Logo"
              width={500}
              height={200}
              className="w-full max-w-lg"
              priority
            />
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
                Edición Agosto 2025
              </span>
            </div>
            <p
              className="text-xl lg:text-xl xl:text-2xl leading-relaxed font-light tracking-wide mb-6"
              style={{ color: "#666666" }}
            >
              Únete a la plataforma de{" "}
              <span className="font-medium" style={{ color: "#D9D9D9" }}>
                innovación
              </span>{" "}
              de la región.
            </p>
            <div className="mb-8">
              <Suspense>
                <BadgeForm />
              </Suspense>
            </div>
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
                <Image
                  src="/col-makers.svg"
                  alt="Col Makers - Organizadores"
                  width={200}
                  height={70}
                  className="opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </BadgeProvider>
  );
}
