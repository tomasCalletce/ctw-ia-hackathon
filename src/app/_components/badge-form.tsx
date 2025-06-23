"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useQueryState, parseAsStringLiteral, parseAsString } from "nuqs";
import { useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Linkedin, Instagram, ArrowLeft } from "lucide-react";

enum ViewState {
  FORM = "form",
  SHARE = "share",
}

export function BadgeForm() {
  const [view, setView] = useQueryState(
    "view",
    parseAsStringLiteral(Object.values(ViewState)).withDefault(ViewState.FORM)
  );

  const onSuccess = async () => {
    await setView(ViewState.SHARE);
  };

  const handleGoBack = () => {
    setView(ViewState.FORM);
  };

  return (
    <div>
      {view === ViewState.FORM && <BadgeFormComponent onSuccess={onSuccess} />}
      {view === ViewState.SHARE && <ShareComponent onGoBack={handleGoBack} />}
    </div>
  );
}

const badgeSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es obligatorio")
    .max(20, "Nombre demasiado largo"),
  role: z
    .string()
    .min(1, "El rol es obligatorio")
    .max(20, "Rol demasiado largo"),
  email: z.string().min(1, "El email es obligatorio").email("Email inválido"),
});

type BadgeForm = z.infer<typeof badgeSchema>;

function BadgeFormComponent({ onSuccess }: { onSuccess: () => Promise<void> }) {
  const [name, setName] = useQueryState("name", parseAsString.withDefault(""));
  const [role, setRole] = useQueryState("role", parseAsString.withDefault(""));
  const [email, setEmail] = useQueryState(
    "email",
    parseAsString.withDefault("")
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const form = useForm<BadgeForm>({
    resolver: zodResolver(badgeSchema),
    defaultValues: {
      name: name,
      role: role,
      email: email,
    },
  });

  const generateBadge = async (
    name: string,
    role: string,
    email: string
  ): Promise<void> => {
    return new Promise((resolve) => {
      if (!canvasRef.current) {
        resolve();
        return;
      }

      setIsGenerating(true);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setIsGenerating(false);
        resolve();
        return;
      }

      // Load base image
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        // Set canvas size
        canvas.width = 600;
        canvas.height = 400;

        // Draw base image
        ctx.drawImage(img, 0, 0, 600, 400);

        // Draw name
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 48px Arial";
        ctx.textAlign = "center";
        ctx.fillText(name, 300, 200);

        // Draw role
        ctx.fillStyle = "#D9D9D9";
        ctx.font = "20px Arial";
        ctx.fillText(role, 300, 250);

        // Draw email
        ctx.fillStyle = "#D9D9D9";
        ctx.font = "16px Arial";
        ctx.fillText(email, 300, 280);

        // Download the badge
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `${name.replace(/\s+/g, "_")}_hackathon_badge.png`;
        link.href = dataUrl;
        link.click();

        setIsGenerating(false);
        resolve();
      };

      img.onerror = () => {
        setIsGenerating(false);
        resolve();
      };

      img.src = "/badge-base.svg";
    });
  };

  const onSubmit = async (data: BadgeForm) => {
    await generateBadge(data.name, data.role, data.email);
    await Promise.all([
      setName(data.name),
      setRole(data.role),
      setEmail(data.email),
      onSuccess(),
    ]);
  };

  return (
    <>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <div className="w-full max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    style={{ color: "#D9D9D9" }}
                    className="text-sm font-medium"
                  >
                    Nombre Completo
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Ingresa tu nombre"
                      className="bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50 focus:ring-yellow-400/20"
                      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    style={{ color: "#D9D9D9" }}
                    className="text-sm font-medium"
                  >
                    Rol / Título
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="ej., Ingeniero de IA, Desarrollador"
                      className="bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50 focus:ring-yellow-400/20"
                      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    style={{ color: "#D9D9D9" }}
                    className="text-sm font-medium"
                  >
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Ingresa tu email"
                      className="bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50 focus:ring-yellow-400/20"
                      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-center space-y-2">
              <Button
                type="submit"
                disabled={isGenerating}
                className="w-full font-medium cursor-pointer"
                style={{ backgroundColor: "#FFDA35", color: "#0C0C0C" }}
              >
                Crear Insignia | Compartir en <Linkedin className="w-4 h-4" />
              </Button>
              <div className="text-center">
                <p
                  className="text-xs font-light tracking-wide opacity-60"
                  style={{ color: "#D9D9D9" }}
                >
                  Sé el primero en saber cuando abrimos inscripciones
                </p>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}

function ShareComponent({ onGoBack }: { onGoBack: () => void }) {
  const [name] = useQueryState("name", parseAsString.withDefault(""));
  const [role] = useQueryState("role", parseAsString.withDefault(""));

  const shareOnLinkedIn = () => {
    const text = encodeURIComponent(
      `🎉 ¡Acabo de crear mi insignia del Hackathon de IA! Como ${role}, estoy emocionado de ser parte de la innovación tecnológica en LATAM. #HackathonIA #TechLatam #Innovation`
    );
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}&text=${text}`,
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
}
