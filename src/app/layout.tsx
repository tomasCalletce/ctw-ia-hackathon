import "~/styles/globals.css";

import { Geist } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata = {
  metadataBase: new URL("https://ctw-ia-hackathon.vercel.app"),
  title: "IA HACKATHON",
  description:
    "IA HACKATHON by Colombia Tech Fest and Makers. La plataforma de innovación de la región.",
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
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
