import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";

export function WhatsAppBanner() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 218, 53, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="flex items-center justify-between py-3 lg:py-4">
          {/* Content */}
          <div className="flex items-center space-x-3 lg:space-x-4 flex-1">
            {/* Yellow accent line */}
            <div
              className="w-3 lg:w-4 h-0.5 rounded-full"
              style={{ backgroundColor: "#FFDA35" }}
            />

            {/* WhatsApp Icon */}
            <div className="flex-shrink-0">
              <MessageCircle
                className="w-5 h-5 lg:w-6 lg:h-6"
                style={{ color: "#FFDA35" }}
              />
            </div>

            {/* Text content - Mobile optimized */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
                <span
                  className="text-sm lg:text-base font-medium tracking-wide"
                  style={{ color: "#D9D9D9" }}
                >
                  Grupo de WhatsApp
                </span>
                <span
                  className="text-xs lg:text-sm tracking-wider uppercase opacity-70 hidden sm:block"
                  style={{ color: "#888888" }}
                >
                  Comunidad IA Hackathon 2025
                </span>
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <Link
            href="https://chat.whatsapp.com/Ha4wizQ2L86HFRLrgJZEHP?mode=r_c"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "group",
            })}
            style={{
              borderColor: "#FFDA35",
              backgroundColor: "rgba(255, 218, 53, 0.1)",
              color: "#FFDA35",
            }}
          >
            <span className="text-xs lg:text-sm font-medium tracking-wide">
              Unirme
            </span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
