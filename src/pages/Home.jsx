import { motion } from "motion/react";
import { animate, createTimeline, createTimer } from "animejs";

import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { FeaturedSection } from "../components/FeaturedSection";
import { InfoSection } from "../components/infoSection";
import { TestimonialSection } from "../components/TestimonialSection";
import { FooterSection } from "../components/FooterSection";
function Home() {
  return (
    <>
      <div className="min-h-screen bg-navy-900 overflow-x-hidden">
        <NavBar />
        <HeroSection />
        <FeaturedSection />
        <InfoSection/>
        <TestimonialSection/>
        <FooterSection/>
      </div>
    </>
  );
}

export default Home;
