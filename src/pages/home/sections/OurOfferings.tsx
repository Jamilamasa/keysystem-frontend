import { MagicButtonLink } from "@/components/ui/MagicButton";
import offering1 from "@/assets/offerings/offering1.png";
import offering2 from "@/assets/offerings/offering2.png";
import offering3 from "@/assets/offerings/offering3.png";
import offering4 from "@/assets/offerings/offering4.png";
import offering5 from "@/assets/offerings/offering5.png";
import offering6 from "@/assets/offerings/offering6.png";
import offering7 from "@/assets/offerings/offering7.png";
import offering8 from "@/assets/offerings/offering8.png";
import offering9 from "@/assets/offerings/offering9.png";
import { cn } from "@/lib/utils";

const OurOfferings = () => {


  return (
    <section className="bg-[#05071E] text-white text-center pt-[198.6px] pb-[204.17px]">
      <div className=" flex flex-col items-center justify-center lg:w-[882px] m-auto">
        <h1 className="lg:text-[50px] text-[40px] font-bold leading-[100%] mb-[19px]">
          Our Offerings
        </h1>
        <p className="lg:text-[24px] text-[14px] font-normal leading-[150%] mb-[35px]">
          Leverage KeySystem’s cutting-edge expertise to transform your
          business. Our tailored software and cybersecurity solutions drive
          efficiency, security, and growth. We empower businesses to thrive in
          the digital age
        </p>
        <MagicButtonLink title="Learn More" href="#" variant="default" />
      </div>
      {/* Services */}
      <div className="flex justify-between w-full lg:max-w-[1173.55px] m-auto px-5">
        {[0, 1, 2].map((col) => (
          <div
            key={col}
            className={cn(
              "flex flex-col gap-[55px]",
              col === 1 && "mt-[100px]" // middle column
            )}
          >
            {[
              offering1,
              offering2,
              offering3,
              offering4,
              offering5,
              offering6,
              offering7,
              offering8,
              offering9,
            ]
              .slice(col * 3, col * 3 + 3)
              .map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`offering ${col * 3 + i + 1}`}
                  className="lg:w-[277.55px] w-[177.55px]"
                />
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurOfferings;
