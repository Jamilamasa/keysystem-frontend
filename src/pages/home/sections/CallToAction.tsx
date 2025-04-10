
const CallToAction = () => {
    return (
      <section className="relative bg-gradient-to-r from-[#4169E14A] to-40% to-[#060515] text-white px-6 py-16 lg:py-24">
      <div className="relative max-w-5xl mx-auto bg-[#0A0A2F] rounded-[20px] px-6 py-12 lg:px-12 overflow-hidden">
        {/* Gradient circle effect */}
        <div className="absolute -right-40 top-[0%] w-[400px] h-[400px] rounded-full bg-[#000080] z-0 pointer-events-none" />
        <div className="absolute -right-40 top-[3%] w-[350px] h-[350px] rounded-full bg-[#0D0D9F] z-0 pointer-events-none" />
        <div className="absolute -right-40 top-[10%] w-[300px] h-[300px] rounded-full bg-[#2020AC] z-0 pointer-events-none" />
        <div className="absolute -right-40 top-[17%] w-[250px] h-[250px] rounded-full bg-[#3838C9] z-0 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-gray-300 mb-1">Shoot us a Mail</p>
          <p className="text-sm lg:text-base text-gray-300 mb-4">
            Join numerous corporations, organizations, and businesses as they scale their teams, tap into new market opportunities, and build innovative products with KeySystem Technology.
          </p>
          <p className="text-sm lg:text-base text-gray-300 mb-8">
            Join thousands of students who are ready to learn new skills or take their career to the next level by enrolling in one of our training programs today.
          </p>

          {/* Button */}
          <a
            href="mailto:info@keysystem.com"
            className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white shadow-lg hover:brightness-110 transition"
          >
            Send Us a Mail Now
          </a>
        </div>
      </div>
      </section>
    );
  };
  
  export default CallToAction;
  