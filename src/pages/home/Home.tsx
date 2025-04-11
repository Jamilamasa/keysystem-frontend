import CallToAction from "./sections/CallToAction";
import ComplianceCertification from "./sections/ComplianceCertification";
import Hero from "./sections/Hero";
import OurOfferings from "./sections/OurOfferings";
import { OurPartners } from "./sections/OurPartners";
import OurProcess from "./sections/OurProcess";
import TheyTrustUs from "./sections/TheyTrustUs";
import TrustedConsultantSection from "./sections/TrustedConsultantSection";
import WhatWeRepresent from "./sections/WhatWeRepresent";

const Home = () => {
  return (
    <main className="bg-gradient-to-r from-[#05071E] to-[#000080] flex justify-center items-center flex-col overflow-clip">
      <div className="w-full relative">
        <Hero />   
        <TrustedConsultantSection />
        <OurOfferings/>
        <WhatWeRepresent/>
        <ComplianceCertification/>
        <TheyTrustUs/>
        <OurProcess/>
        <OurPartners/>
        <CallToAction/>
      </div>
    </main>
  );
};

export default Home;
