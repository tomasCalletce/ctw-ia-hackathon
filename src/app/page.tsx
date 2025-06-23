import { HydrateClient } from "~/trpc/server";
import { HeroSection } from "~/app/_components/hero-section";
import { Footer } from "~/app/_components/footer";
import { OpenSourceBanner } from "~/app/_components/open-source-banner";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="min-h-screen" style={{ backgroundColor: "#0C0C0C" }}>
        <OpenSourceBanner />
        <HeroSection />
        <Footer />
      </main>
    </HydrateClient>
  );
}
