import Hero from "./sections/Hero";

const Home = () => {
  return (
    <main className="relative bg-gradient-to-r from-[#05071E] to-[#000080] flex justify-center items-center flex-col mx-auto lg:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
