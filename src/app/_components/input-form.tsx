"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Linkedin, Loader2 } from "lucide-react";
import { api } from "~/trpc/react";

const badgeSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es obligatorio")
    .max(100, "Nombre demasiado largo"),
  role: z
    .string()
    .min(1, "El rol es obligatorio")
    .max(80, "Rol demasiado largo"),
  email: z
    .string()
    .min(1, "El email es obligatorio")
    .email("Email inválido")
    .max(254, "Email demasiado largo"),
});

type BadgeForm = z.infer<typeof badgeSchema>;

interface InputFormProps {
  onSuccess: () => Promise<void>;
}

export const InputForm: React.FC<InputFormProps> = ({ onSuccess }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const form = useForm<BadgeForm>({
    resolver: zodResolver(badgeSchema),
  });

  const hackerMutation = api.hacker.create.useMutation({
    onSuccess: () => {
      onSuccess();
    },
    onError: (error) => {
      console.error(error);
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
        // Use original image dimensions to maintain quality
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        // Draw base image at full resolution
        ctx.drawImage(img, 0, 0);

        // Calculate responsive font sizes based on image dimensions
        const baseWidth = img.naturalWidth;
        const scaleFactor = baseWidth / 600; // Assuming 600 was the intended base width

        // Draw name with responsive sizing
        ctx.fillStyle = "#FFFFFF";
        ctx.font = `bold ${Math.round(48 * scaleFactor)}px Arial`;
        ctx.textAlign = "center";
        ctx.fillText(name, baseWidth / 2, img.naturalHeight * 0.5);

        // Draw role with responsive sizing
        ctx.fillStyle = "#D9D9D9";
        ctx.font = `${Math.round(20 * scaleFactor)}px Arial`;
        ctx.fillText(role, baseWidth / 2, img.naturalHeight * 0.625);

        // Draw email with responsive sizing
        ctx.fillStyle = "#D9D9D9";
        ctx.font = `${Math.round(16 * scaleFactor)}px Arial`;
        ctx.fillText(email, baseWidth / 2, img.naturalHeight * 0.7);

        // Download the badge with better quality
        const dataUrl = canvas.toDataURL("image/png", 1.0);
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

      img.src = "/share-card.jpeg";
    });
  };

  const onSubmit = async (data: BadgeForm) => {
    await generateBadge(data.name, data.role, data.email);
    hackerMutation.mutate({
      name: data.name,
      role: data.role,
      email: data.email,
    });
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
                      placeholder="Simón Borrero"
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
                      placeholder="CEO Rappi"
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
                      placeholder="simon@rappi.com"
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
                {hackerMutation.isPending || isGenerating ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Crear Insignia | Compartir en{" "}
                    <Linkedin className="w-4 h-4" />
                  </>
                )}
              </Button>
              <div className="text-center space-y-1">
                <p
                  className="text-xs font-light tracking-wide opacity-60"
                  style={{ color: "#D9D9D9" }}
                >
                  Sé el primero en saber cuando abrimos inscripciones
                </p>
                <p className="text-xs opacity-40" style={{ color: "#D9D9D9" }}>
                  Si das click aceptas recibir correos de la Hackathon
                </p>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};
