import { CreditsSection } from "~/app/_components/credits-section";

export const metadata = {
  title: "Sponsor Credits - IA HACKATHON",
  description: "Access your sponsor credits and redeem exclusive offers from our hackathon partners",
};

export default function CreditsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0c0c0c" }}>
      <CreditsSection />
    </main>
  );
}
