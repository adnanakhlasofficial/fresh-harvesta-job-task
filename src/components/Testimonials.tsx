import React from "react";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import person from "@/images/person.jpg";

const Testimonials = () => {
  return (
    <section className="container mx-auto px-2 my-24">
      <SectionTitle
        tag="Testimonial"
        title="What Our Customers Say"
        description="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:"
        className="text-center"
        titleClassName="mb-4"
      />

      <div className="flex gap-12 justify-center items-center mt-12">
        <div>
          <Image className="w-3xs rounded-full" src={person} alt="person" />
        </div>
        <div className="max-w-xl space-y-8 p-8 bg-[#F4F6F6] rounded-3xl">
          <p className="text-[#4A4A52] text-xl">
            "I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It's always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to
            for all my fruit and vegetable needs.
          </p>
          <h3 className="text-lg">
            <span className="font-medium">Jane Doe</span> - Professional chef
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
