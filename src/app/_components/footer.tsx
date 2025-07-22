import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-4 text-xs text-gray-400 text-center border-t border-white/10">
      {/* Sponsor Section */}
      <div className="mb-4">
        <div className="flex items-center justify-center gap-1">
          <span>¿Quieres ser patrocinador?</span>
          <a
            href="https://app.youform.com/forms/4xuvkabi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors text-yellow-400 underline ml-1"
          >
            Únete aquí
          </a>
        </div>
      </div>

      {/* Open Source Banner */}
      <div className="">
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
