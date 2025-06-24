import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Footer } from "~/app/_components/footer";

export const metadata: Metadata = {
  title: "IA HACKATHON",
  description:
    "IA HACKATHON by Colombia Tech Fest and Makers. La plataforma de innovación de la región.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "IA HACKATHON",
    description:
      "IA HACKATHON by Colombia Tech Fest and Makers. La plataforma de innovación de la región.",
    images: [
      {
        url: "/social-link.png",
        width: 1200,
        height: 630,
        alt: "IA HACKATHON - Colombia Tech Fest",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA HACKATHON",
    description:
      "IA HACKATHON by Colombia Tech Fest and Makers. La plataforma de innovación de la región.",
    images: ["/social-link.png"],
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
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
