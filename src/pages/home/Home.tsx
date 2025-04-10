import Hero from "./sections/Hero";
import TrustedConsultantSection from "./sections/TrustedConsultantSection";

const Home = () => {
  return (
    <main className="bg-gradient-to-r from-[#05071E] to-[#000080] flex justify-center items-center flex-col overflow-clip">
      <div className="w-full relative">
        <Hero />   
        <TrustedConsultantSection />
      </div>
    </main>
  );
};

export default Home;
