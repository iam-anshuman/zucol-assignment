import { Community } from "@/components/Community";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import { OrganizationStructure } from "@/components/OrganizationStructure";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>    
      <FeatureSection/>
      <Offer/>
      <Community/>
      <OrganizationStructure/>
    </div>
  );
}
