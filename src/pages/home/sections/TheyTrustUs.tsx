import sterling from "@/assets/heroPartners/sterling.webp";
import crusadersterling from "@/assets/heroPartners/crusadersterling.webp";
import NAFC from "@/assets/heroPartners/NAFC.webp";
import nbf from "@/assets/heroPartners/nbf.webp";
import militaryPension from "@/assets/heroPartners/militaryPension.webp";
import stanbic from "@/assets/heroPartners/stanbic.webp";
import bankMusa from "@/assets/heroPartners/bankmusa.webp";
import bankIga from "@/assets/heroPartners/bankiga.webp";
import lapo from "@/assets/heroPartners/lapo.webp";
import npfMicroFinance from "@/assets/heroPartners/npfMicroFinance.webp";
import santander from "@/assets/heroPartners/santander.webp";

const TheyTrustUs = () => {
  return (
    <section className="bg-[#020107] text-white pt-[100.73px] lg:px-[103px] px-10">
      <div className=" flex flex-col items-center justify-center lg:w-[882px] m-auto">
        <h1 className="lg:text-[50px] text-[30px] font-bold leading-[100%] mb-[19px]">
          They Trust Us
        </h1>
        <p className="lg:text-[24px] text-[14px] font-normal leading-[150%] mb-[80px]">
          And so can you
        </p>
      </div>
      {/* Partners */}
      <div className=" max-w-6xl mx-auto">
        <div className="grid gap-[37.92px] lg:grid-cols-4 mb-[37.92px]">
          <img src={lapo} alt="trust" className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img
            src={npfMicroFinance}
            className="lg:w-[250.85px] lg:h-[99.92px]"
          />
          <img src={sterling} alt="trust" className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img
            src={crusadersterling} alt="trust"
            className="lg:w-[250.85px] lg:h-[99.92px]"
          />
          <img src={NAFC} alt="trust" className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img src={nbf} alt="trust" className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img
            src={militaryPension} alt="trust"
            className="lg:w-[250.85px] lg:h-[99.92px]"
          />
          <img src={stanbic} alt="trust" className="lg:w-[250.85px] lg:h-[99.92px]" />
        </div>
        <div className="flex flex-col lg:flex-row gap-[37.92px] items-center justify-center">
          <img src={bankMusa} alt="trust" className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img src={bankIga} alt="trust" className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img src={santander} alt="trust" className="lg:w-[250.85px] lg:h-[99.92px]" />
        </div>
      </div>
    </section>
  );
};
 
export default TheyTrustUs;
