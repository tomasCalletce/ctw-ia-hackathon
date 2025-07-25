import { HydrateClient } from "~/trpc/server";
import { HeroSection } from "~/app/_components/hero-section";
import { Footer } from "~/app/_components/footer";
import { StartupRegistration } from "~/app/_components/startup-registration";
import { WhatsAppBanner } from "~/app/_components/whatsapp-banner";
import { SponsorsSection } from "~/app/_components/sponsors-section";
import { TracksSection } from "~/app/_components/tracks-section";
import { GeneralInformation } from "~/app/_components/general-information";
import { CommunityPartnersSection } from "~/app/_components/community-partners-section";
import { FAQSection } from "~/app/_components/faq-section";
import { SponsorCtaSection } from "~/app/_components/sponsor-cta-section";

export default async function Home() {
  return (
    <HydrateClient>
      <main
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: "#0C0C0C" }}
      >
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {/* Box2 - Top right area */}
          <div
            className="absolute top-20 right-16 opacity-15 w-40 h-32 -rotate-6"
            style={{
              backgroundImage: "url('/box2.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />

          {/* Box1 - Middle left area */}
          <div
            className="absolute top-1/2 left-8 opacity-10 w-24 h-40 -rotate-12"
            style={{
              backgroundImage: "url('/box1.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />

          {/* Box2 - Middle right area */}
          <div
            className="absolute top-1/3 right-12 opacity-25 w-36 h-28 rotate-15"
            style={{
              backgroundImage: "url('/box2.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />

          {/* Box1 - Bottom right area */}
          <div
            className="absolute bottom-32 right-20 opacity-20 w-28 h-44 rotate-8"
            style={{
              backgroundImage: "url('/box1.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />

          {/* Box2 - Bottom left area */}
          <div
            className="absolute bottom-40 left-14 opacity-15 w-32 h-24 -rotate-10"
            style={{
              backgroundImage: "url('/box2.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
        </div>
        <WhatsAppBanner />
        <div className="relative z-10">
          <HeroSection />
          <SponsorsSection />

          <GeneralInformation />
          <TracksSection />
          <CommunityPartnersSection />
          <FAQSection />
          <StartupRegistration />
          <SponsorCtaSection />
          <Footer />
        </div>
      </main>
    </HydrateClient>
  );
}
