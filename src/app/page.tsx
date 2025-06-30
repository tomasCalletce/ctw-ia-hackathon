import { HydrateClient } from "~/trpc/server";
import { HeroSection } from "~/app/_components/hero-section";
import { Footer } from "~/app/_components/footer";
import { StartupRegistration } from "~/app/_components/startup-registration";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="min-h-screen" style={{ backgroundColor: "#0C0C0C" }}>
        <HeroSection />
        <StartupRegistration />
        <Footer />
      </main>
    </HydrateClient>
  );
}
