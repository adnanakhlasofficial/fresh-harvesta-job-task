import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

const BlogCard = ({
  title,
  date,
  image,
}: {
  title: string;
  date: string;
  image: StaticImageData;
}) => {
  return (
    <div className="max-w-[384px] space-y-6">
      <div className="aspect-video">
        <Image src={image} alt="blog_img" className="rounded-xl" />
      </div>
      <div>
        <p className="text-base text-[#4A4A52]">{date}</p>
        <h3 className="text-lg font-medium text-[#212337] mt-2 mb-4">
          {title}
        </h3>
        <button className="flex gap-2 items-center text-lg text-[#FF6A1A] font-semibold">
          Read More <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
