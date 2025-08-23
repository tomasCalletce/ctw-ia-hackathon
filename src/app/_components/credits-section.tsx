"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Copy, Check, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";

interface Credit {
  id: string;
  sponsor: string;
  logo: string;
  code: string;
  instructions: string;
  redemptionUrl?: string;
  description: string;
}

const credits: Credit[] = [
  {
    id: "firecrawl",
    sponsor: "Firecrawl",
    logo: "/firecrawl.png",
    code: "hackathon5k",
    description: "API avanzado para web scraping y extracción de datos",
    instructions: "1. Crea una cuenta en firecrawl.dev/signin\n2. Ve a Settings → Billing → Apply Coupon\n3. Ingresa el código para obtener 5,000 créditos gratis 🚀\n4. ¡Listo para usar en tu proyecto!",
    redemptionUrl: "https://www.firecrawl.dev/app/settings?tab=billing",
  },
  {
    id: "v0",
    sponsor: "v0",
    logo: "/v0.png", 
    code: "AIHACKATHONBOGOTA",
    description: "Plataforma de generación de interfaces con IA",
    instructions: "1. Ve a v0.app/chat/settings/billing\n2. Busca la sección 'Usage Codes'\n3. Ingresa el código y haz clic en 'Claim Code'\n4. ¡Comienza a generar interfaces con IA! 🎨",
    redemptionUrl: "https://v0.app/chat/settings/billing",
  },
  {
    id: "openrouter",
    sponsor: "OpenRouter",
    logo: "/openrouter.png",
    code: "COLOMBIA-TECH-WEEK-2025",
    description: "Acceso a modelos de IA premium y APIs",
    instructions: "1. Visita openrouter.ai/redeem\n2. Crea una cuenta si no tienes una\n3. Ingresa el código en la sección de canje\n4. Accede a modelos como GPT-4, Claude y más 🤖",
    redemptionUrl: "https://openrouter.ai/redeem",
  },
  {
    id: "n8n",
    sponsor: "n8n",
    logo: "/n8n.png",
    code: "2025-TECHWEEK-C30F29B2",
    description: "Plataforma de automatización y workflows",
    instructions: "⏳ Instrucciones de canje pendientes por definir\n\n💡 Mientras tanto: Si eres nuevo usuario, regístrate en https://n8n.io/ y obtendrás automáticamente:\n• 15 días de prueba gratuita\n• 1,000 créditos inmediatos\n\nLas instrucciones específicas para este código se publicarán pronto.",
  },
];

export function CreditsSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (code: string, creditId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(creditId);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const renderInstructionsWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline transition-all duration-300"
            style={{ color: "#FFDA35" }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 218, 53, 0.03) 0%, transparent 70%)",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back to home */}
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="group text-base font-medium hover:bg-white/5 transition-all duration-300"
              style={{ color: "#888888" }}
            >
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                Volver al inicio
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="text-center space-y-4 sm:space-y-6 mb-16">
            <div className="mb-4">
              <span
                className="text-sm font-medium tracking-wider uppercase opacity-70"
                style={{ color: "#FFDA35" }}
              >
                {/* Patrocinadores */}
              </span>
            </div>
            
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-tight px-2"
              style={{
                color: "#D9D9D9",
                fontFamily: "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              
              <span
                className="font-bold relative inline-block"
                style={{
                  color: "#FFDA35",
                  fontFamily: "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                Créditos
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 animate-pulse"
                  style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
                />
              </span>
            </h1>
            
            <p
              className="text-base lg:text-lg leading-relaxed font-light max-w-2xl mx-auto"
              style={{ color: "#888888" }}
            >
              Accede a créditos exclusivos de nuestros patrocinadores para potenciar tu proyecto de hackathon
            </p>
          </div>

          {/* Credits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {credits.map((credit) => (
              <div
                key={credit.id}
                className="group relative p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-black/20"
                style={{ backgroundColor: "#000000" }}
              >
                {/* Sponsor Logo and Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                    <Image
                      src={credit.logo}
                      alt={`${credit.sponsor} logo`}
                      width={32}
                      height={32}
                      className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold leading-tight"
                      style={{
                        color: "#D9D9D9",
                        fontFamily: "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {credit.sponsor}
                    </h3>
                    <p
                      className="text-sm font-medium opacity-70"
                      style={{ color: "#888888" }}
                    >
                      {credit.description}
                    </p>
                  </div>
                </div>

                {/* Code Display and Copy */}
                <div className="mb-4">
                  <div
                    className="relative p-4 rounded-xl border border-white/10 bg-white/5 font-mono text-lg font-semibold flex items-center justify-between group/code cursor-pointer"
                    onClick={() => copyToClipboard(credit.code, credit.id)}
                  >
                    <span style={{ color: "#FFDA35" }}>{credit.code}</span>
                    <button
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-sm font-medium"
                      style={{ color: "#D9D9D9" }}
                    >
                      {copiedCode === credit.id ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copiar
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Instructions */}
                <div
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#B0B0B0" }}
                >
                  {credit.instructions.split('\n').map((line, index) => (
                    <p key={index} className={index > 0 ? "mt-1" : ""}>
                      {renderInstructionsWithLinks(line)}
                    </p>
                  ))}
                </div>

                {/* Redemption Link */}
                {credit.redemptionUrl && (
                  <div className="pt-2 border-t border-white/10">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="group/link w-full justify-center hover:bg-white/5 transition-all duration-300"
                      style={{ color: "#FFDA35" }}
                    >
                      <a
                        href={credit.redemptionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {credit.id === "firecrawl" ? "Ir a Settings → Billing" : 
                         credit.id === "v0" ? "Ir a Usage Codes" : 
                         "Ir a canjear"}
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center mt-16 p-6 rounded-2xl border border-white/10" style={{ backgroundColor: "#000000" }}>
            <p
              className="text-sm leading-relaxed opacity-80 mb-2"
              style={{ color: "#888888" }}
            >
              <span style={{ color: "#FFDA35" }}>💡 Tip:</span> Haz clic en cualquier código para copiarlo automáticamente
            </p>
            <p
              className="text-xs opacity-60"
              style={{ color: "#888888" }}
            >
              Los códigos son válidos durante el período del hackathon. Consulta con los mentores para más información.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
