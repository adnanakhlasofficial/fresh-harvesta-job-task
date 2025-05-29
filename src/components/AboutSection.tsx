import aboutImg from "@/images/about.jpg";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

const AboutSection = () => {
  return (
    <section className="container mx-auto flex justify-center gap-16 items-center my-24">
      <div className="w-2/3">
        <Image src={aboutImg} alt="aboutImage" />
      </div>
      <div>
        <SectionTitle
          tag="About Us"
          title="About Fresh Harvest"
          description="Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience."
        />
        <button className="mt-4 border-[#FF6A1A] text-[#FF6A1A] border hover:bg-[#FF6A1A] hover:text-white transition-colors duration-300 py-4 px-8 rounded-lg cursor-pointer">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
