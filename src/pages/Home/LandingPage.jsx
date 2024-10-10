import React from "react";
import Navbar from "../../components/sections/Navbar/Navbar";
import HeroSection from "../../components/sections/HeroSection/HeroSection";
import SecondSection from "../../components/sections/SecondSection/SecondSection";
import ThirdSection from "../../components/sections/ThirdSection/ThirdSection";
import InvestmentSection from "../../components/sections/InvestmentSection/InvestmentSection.jsx";
import HowItWorks from "../../components/sections/HowItWorks/HowItWorks.jsx";
import TeamSection from "../../components/sections/TeamSection/TeamSection";
import InvestmentAreaSection from "../../components/sections/InvestmentAreaSection/InvestmentAreaSection.jsx";
import FQSection from '../../components/sections/FAQSection/InsightsSection.jsx'
import Footer from "../../components/sections/Footer/Footer";

import './LandingPage.css'


export default function LandingPage() {

  return (
    <div>
         {/* <Navbar
        refs={{
          investments: investmentsRef,
          HowItWorks: howItWorksRef,
          experts: expertsRef,
          joinUs: joinUsRef,
          insights: insightsRef,
        }}
      />
      <Navbar /> */}
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <InvestmentSection />
      <HowItWorks />
      <TeamSection />
      <InvestmentAreaSection />
      <FQSection />
      <Footer />
    </div>
  );
}
