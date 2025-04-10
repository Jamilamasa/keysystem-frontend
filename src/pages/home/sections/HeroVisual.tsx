import image from "@/assets/HeroVisual.png";
import stroke from "@/assets/stroke.png";

const HeroVisual = () => {
  return (
    <>
      {/* Background Decorative Stroke */}
      <img
        src={stroke}
        alt="Decorative Stroke"
        className="absolute md:top-16 lg:-top-5 left-1/2 -translate-x-1/2 w-[150%] md:w-[100vw] pointer-events-none select-none z-0"
      />

      {/* Foreground Main Image */}
      <div className="relative z-10 overflow-hidden rounded-[17.59px] shadow-lg w-full max-w-4xl mx-auto">
        <img
          src={image}
          alt="Professional Analyzing Data"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
};

export default HeroVisual;
