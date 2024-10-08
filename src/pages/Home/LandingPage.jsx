import React from "react";
import Navbar from "../../components/sections/Navbar/Navbar";
import HeroSection from "../../components/sections/HeroSection/HeroSection";
import SecondSection from "../../components/sections/SecondSection/SecondSection";
import ThirdSection from "../../components/sections/ThirdSection/ThirdSection";
import InvestmentSection from "../../components/sections/InvestmentSection";
import HowItWorks from "../../components/sections/HowItWorks/HowItWorks";
import TeamSection from "../../components/sections/TeamSection/TeamSection";
import InvestmentArea from "../../components/sections/InvestmentAreaSection";
import InsightsSection from "../../components/sections/FAQSection";
import Footer from "../../components/sections/Footer/Footer";


export default function LandingPage() {

  return (
    <div>
         <Navbar
        refs={{
          investments: investmentsRef,
          howItWorks: howItWorksRef,
          experts: expertsRef,
          joinUs: joinUsRef,
          insights: insightsRef,
        }}
      />
      <Navbar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <InvestmentSection />
      <HowItWorks />
      <TeamSection />
      <InvestmentArea />
      <InsightsSection />
      <Footer />
    </div>
  );
}
