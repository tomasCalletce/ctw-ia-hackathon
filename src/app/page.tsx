import { HydrateClient } from "~/trpc/server";
import { HeroSection } from "~/app/_components/hero-section";
import { Footer } from "~/components/footer";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="min-h-screen" style={{ backgroundColor: "#0C0C0C" }}>
        <HeroSection />
        <Footer />
      </main>
    </HydrateClient>
  );
}
