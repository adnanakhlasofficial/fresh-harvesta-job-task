import React from "react";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import grocery from "@/images/groceries.jpg";
import grocery2 from "@/images/groceries2.jpg";
import grocery3 from "@/images/groceries3.jpg";

const BlogSection = () => {
  const blogs = [
    {
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      date: "May 23, 2024",
      image: grocery,
    },
    {
      title:
        "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
      date: "May 23, 2024",
      image: grocery2,
    },
    {
      title:
        "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
      date: "May 23, 2024",
      image: grocery3,
    },
  ];

  return (
    <section className="contianer mx-auto px-2 my-24">
      <SectionTitle
        tag="Our Blog"
        title="Fresh Harvest Blog"
        description="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
        className="text-center"
        titleClassName="mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mt-12">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.title}
            title={blog.title}
            date={blog.date}
            image={blog.image}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
