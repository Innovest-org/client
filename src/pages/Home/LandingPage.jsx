import React, { useRef } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/sections/Navbar/Navbar";
import HeroSection from "../../components/sections/HeroSection/HeroSection";
import SecondSection from "../../components/sections/SecondSection/SecondSection";
import ThirdSection from "../../components/sections/ThirdSection/ThirdSection";
import InvestmentSection from "../../components/sections/InvestmentSection/InvestmentSection";
import HowItWorks from "../../components/sections/HowItWorks/HowItWorks";
import TeamSection from "../../components/sections/TeamSection/TeamSection";
import InvestmentArea from "../../components/sections/InvestmentAreaSection/InvestmentAreaSection";
import InsightsSection from "../../components/sections/FAQSection/InsightsSection";
import ContactUsSection from "../../components/sections/ContactUs/ContactUsSection";
import Footer from "../../components/sections/Footer/Footer";
import "./LandingPage.css";

export default function LandingPage() {
  const investmentsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const expertsRef = useRef(null);
  const joinUsRef = useRef(null);
  const insightsRef = useRef(null);

  const scrollToInnovest = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <Navbar
        refs={{
          investments: investmentsRef,
          howItWorks: howItWorksRef,
          experts: expertsRef,
          joinUs: joinUsRef,
          insights: insightsRef,
        }}
      />
      <main style={{ paddingTop: "70px" }}>
        <HeroSection />
        <SecondSection />
        <ThirdSection />

        <div ref={investmentsRef}>
          <InvestmentSection scrollToHowItWorks={scrollToInnovest} />
        </div>

        <div ref={howItWorksRef}>
          <HowItWorks />
        </div>

        <div ref={expertsRef}>
          <TeamSection />
        </div>

        <div ref={joinUsRef}>
          <InvestmentArea />
        </div>

        <div ref={insightsRef}>
          <InsightsSection />
        </div>

        <ContactUsSection />
        <Footer />
      </main>
    </>
  );
}
