import { HydrateClient } from "~/trpc/server";
import { HeroSection } from "~/app/_components/hero-section";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="min-h-screen" style={{ backgroundColor: "#0C0C0C" }}>
        <HeroSection />
      </main>
    </HydrateClient>
  );
}
