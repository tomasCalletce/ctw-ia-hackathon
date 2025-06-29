import type { CardData } from "~/types/card";

export const generateCardTexture = async (
  cardData: CardData
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      reject(new Error("Could not get canvas context"));
      return;
    }

    const baseImage = new Image();
    baseImage.onload = () => {
      ctx.drawImage(baseImage, 0, 0, 1024, 1024);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 48px Arial";
      ctx.textAlign = "left";
      const nameLines = cardData.name.split(" ");
      nameLines.forEach((line, index) => {
        ctx.fillText(line, 30, 480 + index * 55);
      });

      ctx.fillStyle = "#ffdd00";
      ctx.font = "bold 24px Arial";
      ctx.fillText(cardData.title, 30, 570);

      resolve(canvas.toDataURL("image/png"));
    };

    baseImage.onerror = () => {
      reject(new Error("Failed to load base texture"));
    };

    baseImage.src = "/base_texture.png";
  });
};

export const generateBandTexture = (): string => {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Could not get canvas context");

  ctx.fillStyle = "#2a2a2a";
  ctx.fillRect(0, 0, 128, 32);

  for (let i = 0; i < 8; i++) {
    const x = i * 16;

    ctx.strokeStyle = "#555555";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(x + 8, 16, 6, 10, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "#777777";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(x + 8, 16, 4, 8, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  for (let i = 0; i < 50; i++) {
    const x = Math.random() * 128;
    const y = Math.random() * 32;
    const size = Math.random() * 1;
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.1})`;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  return canvas.toDataURL("image/png");
};
