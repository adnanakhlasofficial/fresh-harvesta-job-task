const OfferSection = () => {
  return (
    <section className="bg-[url(/images/offer-bg.jpg)] bg-cover bg-center py-24 my-24">
      <div className="container mx-auto px-2">
        <div>
          <p className="bg-[#749B3F1A] w-fit px-4 text-[#749B3F] font-medium py-1 rounded-lg ">
            Special Offer
          </p>
          <h2 className="xl:text-7xl lg:text-5xl text-3xl xl:leading-24 lg:leading-16 text-[#212337] max-w-[835px] font-medium mb-2 ">
            Seasonal Fruit Bundle
          </h2>
          <p className="text-[#212337] text-5xl font-medium">
            Discount up to <span className="text-[#FF6A1A]">80% OFF</span>
          </p>
        </div>
        <div className="my-8 grid grid-cols-4 gap-2 lg:max-w-lg">
          <div className="p-7 bg-white rounded-lg w-full text-center">
            <p className="lg:text-5xl text-2xl font-semibold text-[#212337]">
              3
            </p>
            <p className="lg:text-lg text-xs text-[#4A4A52]">days</p>
          </div>
          <div className="p-7 bg-white rounded-lg w-full text-center">
            <p className="lg:text-5xl text-2xl font-semibold text-[#212337]">
              18
            </p>
            <p className="lg:text-lg text-xs text-[#4A4A52]">hours</p>
          </div>
          <div className="p-7 bg-white rounded-lg w-full text-center">
            <p className="lg:text-5xl text-2xl font-semibold text-[#212337]">
              54
            </p>
            <p className="lg:text-lg text-xs text-[#4A4A52]">minutes</p>
          </div>
          <div className="p-7 bg-white rounded-lg w-full text-center">
            <p className="lg:text-5xl text-2xl font-semibold text-[#212337]">
              21
            </p>
            <p className="lg:text-lg text-xs text-[#4A4A52]">seconds</p>
          </div>
        </div>
        <div>
          <p className="bg-[#176D38] w-fit py-4 px-8 text-4xl text-white font-semibold rounded-full mt-6">
            CODE : <span className="text-[#FAC714]">FRESH28</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
