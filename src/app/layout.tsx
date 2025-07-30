import "~/styles/globals.css";

import { Geist } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL("https://ctw-ia-hackathon.vercel.app"),
  title: "IA HACKATHON",
  description:
    "La Hackathon oficial de Colombia Tech Week, Colombia Tech Fest y Makers. Inscríbete para competir en la competencia de tecnología más grande de Colombia",
  openGraph: {
    images: "/social.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "/social.png",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <NuqsAdapter>
          <TRPCReactProvider>
            {children}
            <Analytics />
          </TRPCReactProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
