import { MagicButtonLink } from "@/components/ui/MagicButton";
import certifications from "@/assets/complianceCertification.png"

const ComplianceCertification = () => {


  return (
    <section className="bg-[#05071E] text-white text-center pt-[198.6px] px-2">
      <div className=" flex flex-col items-center justify-center lg:w-[882px] m-auto">
        <h1 className="lg:text-[50px] text-[30px] font-bold leading-[100%] mb-[19px]">
        Compliance Certifications/Standards We Specialize In
        </h1>
        <p className="lg:text-[24px] text-[14px] font-normal leading-[150%] mb-[44px]">
        Elevate Your Organization's Security Posture with Our Compliance/Standards Consulting Services
        </p>
        <MagicButtonLink title="Contact Us" href="#" variant="default" otherClasses="mb-[76px]"/>
      </div>
      {/* Certification */}
     <img src={certifications} alt="certifications" className="w-[1234px] mx-auto"/>
    </section>
  );
};

export default ComplianceCertification;
