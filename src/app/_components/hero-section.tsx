import Image from "next/image";
import Badge3D from "~/app/_components/3d-badge";
import { BadgeForm } from "~/components/badge-form";
import { Suspense } from "react";

export function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#0C0C0C" }}
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
          className="transform"
        />
      </div>
      <div className="absolute bottom-0 left-0 opacity-20 animate-pulse">
        <Image
          src="/box2.svg"
          alt=""
          width={150}
          height={150}
          className="transform rotate-180"
        />
      </div>
      <div className="absolute bottom-0 right-0 opacity-20 animate-pulse">
        <Image
          src="/box1.svg"
          alt=""
          width={150}
          height={150}
          className="transform rotate-180"
        />
      </div>
      <div className="container mx-auto px-8 lg:px-12 h-full flex items-center relative z-10">
        <div className="w-full lg:w-1/2 lg:pr-16">
          <div className="group mb-8">
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
            <div className="flex items-center space-x-4 group">
              <div
                className="w-8 h-1 rounded-full"
                style={{ backgroundColor: "#FFDA35" }}
              />
              <span
                className="text-lg lg:text-xl font-medium tracking-wider uppercase"
                style={{ color: "#D9D9D9" }}
              >
                August 2025 Edition
              </span>
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
        <div className="hidden lg:flex w-1/2 h-screen items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <Badge3D />
          </div>
        </div>
      </div>
    </section>
  );
}
