import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <section className="flex justify-between items-center py-4 container mx-auto px-2">
        <div>
          <h1 className="text-xl font-semibold">
            <Link href="/">Fresh Harvest</Link>
          </h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-8 text-[#212337] font-medium">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-8 text-[#212337] font-medium">
            <li>
              <Link className="flex gap-2" href="#">
                <Heart />
                Favourites
              </Link>
            </li>
            <li>
              <Link className="flex gap-2" href="#">
                <ShoppingCart />
                Cart
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="border border-[#FF6A1A] text-[#FF6A1A] hover:bg-[#FF6A1A] hover:text-white px-6 py-3 rounded-lg"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
