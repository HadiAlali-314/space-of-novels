import ProductHeroSection from "@/components/prodHero/prod";
import HeroSection from "../components/Hero/hero";

import "./globals.css";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductHeroSection />
    </div>
  );
}
