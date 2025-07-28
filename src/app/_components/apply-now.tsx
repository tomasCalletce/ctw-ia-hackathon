import { Button } from "~/components/ui/button";
import { ExternalLink } from "lucide-react";

export const ApplyNow = () => {
  return (
    <div className="mb-8">
      <div className="space-y-6">
        <div className="space-y-3">
          <Button
            asChild
            size="lg"
            className="w-full cursor-pointer max-w-sm font-semibold text-base shadow-xl hover:bg-yellow-500"
            style={{
              backgroundColor: "#FFDA35",
              color: "#0C0C0C",
              border: "2px solid transparent",
            }}
          >
            <a
              href="https://app.youform.com/forms/2ttsfriz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscríbete Ahora
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full cursor-pointer max-w-sm font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 group border-2"
            style={{
              backgroundColor: "transparent",
              color: "#FFDA35",
              borderColor: "#FFDA35",
              backdropFilter: "blur(10px)",
            }}
          >
            <a
              href="https://chat.whatsapp.com/Ha4wizQ2L86HFRLrgJZEHP?mode=r_c"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-yellow-500/10 transition-colors duration-300"
            >
              Únete al Grupo
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>

          <p
            className="text-sm font-light tracking-wide opacity-70 max-w-xs"
            style={{ color: "#D9D9D9" }}
          >
            ¡Con toda y que gane el mejor!
          </p>
        </div>
      </div>
    </div>
  );
};
