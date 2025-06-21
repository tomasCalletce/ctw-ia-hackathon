"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useRef } from "react";
import { DialogDescription } from "@radix-ui/react-dialog";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Linkedin } from "lucide-react";

const badgeSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es obligatorio")
    .max(20, "Nombre demasiado largo"),
  role: z
    .string()
    .min(1, "El rol es obligatorio")
    .max(20, "Rol demasiado largo"),
});

type BadgeForm = z.infer<typeof badgeSchema>;

export function BadgeForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [badgeDataUrl, setBadgeDataUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const form = useForm<BadgeForm>({
    resolver: zodResolver(badgeSchema),
  });

  const generateBadge = async (name: string, role: string) => {
    if (!canvasRef.current) return;

    setIsGenerating(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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

      // Get data URL and show dialog
      setBadgeDataUrl(canvas.toDataURL("image/png"));
      setIsOpen(true);
      setIsGenerating(false);
    };

    img.src = "/badge-base.svg";
  };

  const downloadBadge = () => {
    if (!badgeDataUrl) return;

    const link = document.createElement("a");
    const formData = form.getValues();
    link.download = `${formData.name.replace(/\s+/g, "_")}_hackathon_badge.png`;
    link.href = badgeDataUrl;
    link.click();
  };

  const onSubmit = async (data: BadgeForm) => {
    await generateBadge(data.name, data.role);
  };

  return (
    <>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-2xl bg-black border shadow-2xl"
          style={{ borderColor: "#444444" }}
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-medium text-white">
              Tu Insignia
            </DialogTitle>
            <DialogDescription className="text-gray-300 text-sm leading-relaxed">
              Comparte tu insignia en LinkedIn (más vale jajajajaj) para mostrar
              que eres parte de la innovación tecnológica en LATAM.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center space-y-6 py-6">
            {badgeDataUrl && (
              <img
                src={badgeDataUrl}
                alt="Insignia Generada"
                className="max-w-full h-auto"
                style={{ maxHeight: "350px" }}
              />
            )}

            <Button
              onClick={downloadBadge}
              className="px-6 py-2 font-medium w-full cursor-pointer"
              style={{ backgroundColor: "#FFDA35", color: "#000" }}
            >
              Descargar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
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

            <Button
              type="submit"
              disabled={isGenerating}
              className="w-full font-medium cursor-pointer"
              style={{ backgroundColor: "#FFDA35", color: "#0C0C0C" }}
            >
              Crear Insignia | Compartir en <Linkedin className="w-4 h-4" />
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
