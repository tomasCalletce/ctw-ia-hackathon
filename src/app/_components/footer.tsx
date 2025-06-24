import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-3 text-xs text-gray-400 text-center z-50">
      {/* Open Source Banner */}
      <div className="mb-2">
        <div className="flex items-center justify-center gap-2">
          <span>Open source</span>
          <span>•</span>
          <a
            href="https://github.com/tomasCalletce/ctw-ia-hackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-gray-300 transition-colors text-yellow-400"
          >
            <Github className="w-3 h-3" />
            <span>Contribute</span>
          </a>
        </div>
      </div>

      {/* Credits */}
      <p>
        made by{" "}
        <a
          href="https://www.linkedin.com/in/tomas-calle/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors underline cursor-pointer"
        >
          Tomas
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/cristiancamilocorrea/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors underline cursor-pointer"
        >
          Cristian
        </a>
        {" • "}
        design by{" "}
        <a
          href="https://www.linkedin.com/in/alejamorales/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors underline cursor-pointer"
        >
          Aleja
        </a>
        {" • "}
        inspiration from{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors underline cursor-pointer"
        >
          vercel.com
        </a>
      </p>
    </footer>
  );
}
