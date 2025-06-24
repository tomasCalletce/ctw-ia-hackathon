"use client";

import { Button } from "~/components/ui/button";
import { Linkedin, Instagram, ArrowLeft } from "lucide-react";

interface SuccessFormProps {
  onGoBack: () => void;
}

export const SuccessForm: React.FC<SuccessFormProps> = ({ onGoBack }) => {
  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}`,
      "_blank"
    );
  };

  const shareOnInstagram = () => {
    window.open("https://www.instagram.com/", "_blank");
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <h2 className="text-xl font-medium" style={{ color: "#D9D9D9" }}>
          ¡Insignia creada!
        </h2>
        <p className="text-sm" style={{ color: "#666666" }}>
          Tu insignia ha sido descargada. Compártela en redes sociales.
        </p>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={shareOnLinkedIn}
          className="flex-1 font-medium cursor-pointer text-white flex items-center justify-center gap-2"
          style={{ backgroundColor: "#333333" }}
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </Button>

        <Button
          onClick={shareOnInstagram}
          className="flex-1 font-medium cursor-pointer text-white flex items-center justify-center gap-2"
          style={{ backgroundColor: "#333333" }}
        >
          <Instagram className="w-4 h-4" />
          Instagram
        </Button>
      </div>

      <div className="space-y-3">
        <Button
          variant="outline"
          onClick={onGoBack}
          className="cursor-pointer w-full"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Editar
        </Button>
      </div>
    </div>
  );
};
