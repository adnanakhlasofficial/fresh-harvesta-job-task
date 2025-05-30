import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  id,
  name,
  price,
  image,
}: {
  id: string;
  name: string;
  price: number;
  image: string;
}) => {
  return (
    <div className="rounded-lg shadow-lg text-center p-4 bg-[f4f6f6] w-[282px]">
      <Link href={`/product-details/${id}`}>
        <div>
          <Image
            src={image}
            className="aspect-square"
            alt="image"
            width={250}
            height={250}
          />
        </div>
        <h3 className="text-lg font-medium text-[#212337] mt-3">{name}</h3>
        <p className="text-[#4A4A52]">${price}/kg</p>
        <button className="w-full block border border-[#D9D9D9] rounded-lg py-3 mt-3 hover:bg-[#FF6A1A] hover:border-[#FF6A1A] hover:text-white font-medium transition-colors duration-300 cursor-pointer">
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
