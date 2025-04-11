import sterling from "@/assets/heroPartners/sterling.png";
import crusadersterling from "@/assets/heroPartners/crusadersterling.png";
import NAFC from "@/assets/heroPartners/NAFC.png";
import nbf from "@/assets/heroPartners/nbf.png";
import militaryPension from "@/assets/heroPartners/militaryPension.png";
import stanbic from "@/assets/heroPartners/stanbic.png";
import bankMusa from "@/assets/heroPartners/bankmusa.png";
import bankIga from "@/assets/heroPartners/bankiga.png";
import lapo from "@/assets/heroPartners/lapo.png";
import npfMicroFinance from "@/assets/heroPartners/npfMicroFinance.png";
import santander from "@/assets/heroPartners/santander.png";

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
          <img src={lapo} className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img src={npfMicroFinance} className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img src={sterling} className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img src={crusadersterling} className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img src={NAFC} className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img src={nbf} className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img src={militaryPension} className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img src={stanbic} className="lg:w-[250.85px] lg:h-[99.92px]" />
        </div>
        <div className="flex flex-col lg:flex-row gap-[37.92px] items-center justify-center">
          <img src={bankMusa} className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img src={bankIga} className="lg:w-[250.85px] lg:h-[99.92px]" />
          <img src={santander} className="lg:w-[250.85px] lg:h-[99.92px]" />
        </div>
      </div>
    </section>
  );
};

export default TheyTrustUs;
