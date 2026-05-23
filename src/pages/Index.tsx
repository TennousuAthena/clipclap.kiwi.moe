import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import HighlightsSection from "@/components/HighlightsSection";
import PlatformSection from "@/components/PlatformSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}>
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <FeaturesSection />
        <div className="section-divider" />
        <ScreenshotsSection />
        <div className="section-divider" />
        <HighlightsSection />
        <div className="section-divider" />
        <PlatformSection />
      </main>
      <Footer />
    </div>
  );
}