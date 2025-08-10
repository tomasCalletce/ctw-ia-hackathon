"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "~/components/ui/collapsible";

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(
    new Set([0, 1, 2, 3])
  );

  const faqData = [
    {
      question: "¿Cómo puedo inscribir mi equipo?",
      answer:
        "Las inscripciones son individuales. Todas las personas del equipo deben aplicar para participar por separado llenando el formulario de registro.",
    },
    {
      question: "¿Qué premios hay?",
      answer:
        "Los premios los estaremos anunciando en los próximos días. Mantente atento a nuestras redes sociales para conocer todos los detalles.",
    },
    {
      question: "¿Hay algún costo de participación?",
      answer:
        "No, el evento es completamente gratis para los participantes. Solo necesitas registrarte y confirmar tu asistencia.",
    },
    {
      question: "¿Cómo funcionan las inscripciones?",
      answer:
        "Primero debes aplicar para participar llenando el formulario que encuentras en la parte superior de la página. Después nuestro equipo revisará las aplicaciones e invitará a los mejores 150 participantes.",
    },
    {
      question: "¿Cómo puedo formar mi equipo?",
      answer:
        "Como participante seleccionado, es tu responsabilidad armar tu equipo. Organizaremos dinámicas y llamadas online para que se conozcan y hagan match, pero es clave que participes activamente en el grupo para crear un equipo ganador.",
    },
    {
      question: "¿Qué cosas necesito llevar?",
      answer:
        "Recuerda que esto es un evento de 24 horas. Vamos a tener comida, agua, café y todo lo que puedas necesitar, pero igual recuerda llevar ropa cómoda, tu computador y el cargador. Si quieres llevar snacks extra, dale sin problema.",
    },
    {
      question: "¿Puedo traer código ya desarrollado?",
      answer:
        "No, solo puedes traer la idea. Los jueces evaluarán únicamente el trabajo realizado durante las 24 horas del evento.",
    },
    {
      question: "¿De quién son los derechos de propiedad intelectual?",
      answer:
        "Los participantes retienen la titularidad completa de todos los derechos de propiedad intelectual sobre sus desarrollos. Ni los organizadores ni los patrocinadores del hackathon adquieren ningún derecho sobre las creaciones de los participantes. Para efectos de evaluación, se requiere que los proyectos sean de acceso público durante el evento (código, documentación y materiales). Esta visibilidad es exclusivamente para permitir la valoración del jurado y no implica transferencia alguna de derechos.",
    },
  ];

  const toggleQuestion = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="pb-16 md:pb-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 218, 53, 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="text-center space-y-4 sm:space-y-6 mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-tight px-2"
              style={{
                color: "#D9D9D9",
                fontFamily:
                  "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              ¿Tienes{" "}
              <span
                className="font-bold relative inline-block"
                style={{
                  color: "#FFDA35",
                  fontFamily:
                    "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.02em",
                }}
              >
                dudas?
                <div
                  className="absolute -bottom-1 left-0 w-full h-0.5 animate-pulse"
                  style={{ backgroundColor: "#FFDA35", opacity: 0.3 }}
                />
              </span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Collapsible
                key={index}
                open={openItems.has(index)}
                onOpenChange={() => toggleQuestion(index)}
              >
                <div
                  className="border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-white/30"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                >
                  <CollapsibleTrigger className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300">
                    <span
                      className="text-lg sm:text-xl font-medium pr-4"
                      style={{
                        color: "#D9D9D9",
                        fontFamily:
                          "NeuePower, -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                        openItems.has(index) ? "rotate-45" : ""
                      }`}
                      style={{ color: "#FFDA35" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 4V12M4 8H12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                    <div className="px-6 pb-4">
                      <p
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ color: "#888888" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
