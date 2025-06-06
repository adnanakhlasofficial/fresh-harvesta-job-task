const Banner = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-2 h-[85vh] flex flex-col justify-center">
      <div>
        <p className="bg-[#749B3F1A] w-fit px-4 text-[#749B3F] font-medium py-1 rounded-lg ">
          Welcome to Fresh Harvests
        </p>
        <h2 className="xl:text-7xl lg:text-5xl text-3xl xl:leading-24 lg:leading-16 text-[#212337] max-w-[660px] font-medium mb-4 ">
          Fresh Fruits and Vegetables
        </h2>
        <p className="text-sm text-[#4A4A52] max-w-[448px]">
          At Fresh Harvests, we are passionate about providing you with the
          freshest and most flavorful fruits and vegetables
        </p>
        <button className="bg-[#FF6A1A] text-white text-base font-medium rounded-lg py-4 px-8 cursor-pointer mt-6">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
