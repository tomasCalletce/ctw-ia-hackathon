"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";

export function StartupRegistration() {
  return (
    <section className="pb-24 md:pt-0 pt-10 relative overflow-hidden">
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
              Pro Hackathon Track
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
              Las inscripciones para{" "}
              <span
                className="font-bold relative inline-block"
                style={{
                  color: "#FFDA35",
                  fontFamily:
                    "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                empresas/startups
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 animate-pulse"
                  style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
                />
              </span>{" "}
              ya están abiertas
            </h2>
          </div>

          {/* Description */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <p
              className="text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-3xl mx-auto px-2"
              style={{ color: "#D9D9D9" }}
            >
              Escoge el equipo oficial de tu{" "}
              <span className="font-semibold" style={{ color: "#FFDA35" }}>
                empresa/startup
              </span>{" "}
              en la{" "}
              <span className="font-semibold" style={{ color: "#FFDA35" }}>
                IA-HACKATHON
              </span>{" "}
              y compite por el título de mejor equipo de ingeniería/producto de
              la región.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center px-4">
            <Link
              target="_blank"
              href="https://app.youform.com/forms/exz8oyvu"
              className={buttonVariants({
                variant: "default",
                className: "cursor-pointer w-full max-w-xs sm:w-52 font-medium",
              })}
              style={{ backgroundColor: "#FFDA35", color: "#0C0C0C" }}
            >
              Registrar mi startup
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-sm mt-2 opacity-60" style={{ color: "#888888" }}>
              solo{" "}
              <span style={{ color: "#FFDA35", fontWeight: "600" }}>
                7 cupos
              </span>{" "}
              disponibles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
