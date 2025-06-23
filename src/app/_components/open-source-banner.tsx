import { Github } from "lucide-react";

export function OpenSourceBanner() {
  return (
    <div className="w-full py-1.5 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span style={{ color: "#888888" }}>Open source</span>
            <span style={{ color: "#444444" }}>•</span>
            <a
              href="https://github.com/tomasCalletce/ctw-ia-hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:opacity-70 transition-opacity duration-200"
              style={{ color: "#FFDA35" }}
            >
              <Github className="w-3 h-3" />
              <span>Contribute</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
