import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Empathy from "./components/Empathy";
import Why from "./components/Why";
import WhatWeSee from "./components/WhatWeSee";
import HowItWorks from "./components/HowItWorks";
import Advantages from "./components/Advantages";
import Channels from "./components/Channels";
import Testimonials from "./components/Testimonials";
import Principles from "./components/Principles";
import Pricing from "./components/Pricing";
import Disclaimer from "./components/Disclaimer";
import FinalCTA from "./components/FinalCTA";

export default function App() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="min-h-screen w-full bg-white">
      {/* 스마트스토어 상세페이지 너비: 860px */}
      <div className="max-w-[860px] mx-auto px-0">
        <Header />
        
        <main className="w-full">
          <Hero />
          <Empathy />
          <Testimonials />
          <Why />
          <WhatWeSee />
          <Advantages />
          <HowItWorks />
          <Channels />
          <Principles />
          <Pricing />
          <Disclaimer />
          <FinalCTA />
        </main>
      </div>
    </div>
  );
}