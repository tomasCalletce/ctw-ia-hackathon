"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";

export function SponsorCtaSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Horizontal layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4">
                <span
                  className="text-sm font-medium tracking-wider uppercase opacity-70"
                  style={{ color: "#FFDA35" }}
                >
                  Patrocinadores
                </span>
              </div>

              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-tight mb-4"
                style={{
                  color: "#D9D9D9",
                  fontFamily:
                    "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                ¿Quieres ser{" "}
                <span
                  className="font-bold"
                  style={{
                    color: "#FFDA35",
                    fontFamily:
                      "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  patrocinador?
                </span>
              </h2>

              <p
                className="text-base lg:text-lg leading-relaxed font-light opacity-80"
                style={{ color: "#D9D9D9" }}
              >
                Conecta tu marca con la plataforma de innovación de la región.
              </p>
            </div>

            {/* Right side - CTA Button */}
            <div className="flex-shrink-0">
              <Link
                target="_blank"
                href="https://app.youform.com/forms/4xuvkabi"
                className={buttonVariants({
                  variant: "default",
                  className:
                    "cursor-pointer w-full max-w-md sm:w-80 font-medium text-lg py-4",
                })}
                style={{ backgroundColor: "#FFDA35", color: "#0C0C0C" }}
              >
                Únete como patrocinador
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
