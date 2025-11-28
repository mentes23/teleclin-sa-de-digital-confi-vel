import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Specialties from "@/components/Specialties";
import SocialProof from "@/components/SocialProof";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <Specialties />
        <SocialProof />
      </main>
    </div>
  );
};

export default Index;
