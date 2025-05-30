import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";

const PhoneNavbar = () => {
  return (
    <section>
      <Sheet>
        <SheetTrigger className="lg:hidden block">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="divide-y-2">
            <ul className="flex gap-8 text-[#212337] font-medium flex-col pl-8 pt-8 pb-8">
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

            <ul className="flex gap-8 text-[#212337] font-medium flex-col pl-8 pt-8">
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
              <li className="mt-2">
                <Link
                  href="#"
                  className="border block w-full border-[#FF6A1A] text-center text-[#FF6A1A] hover:bg-[#FF6A1A] hover:text-white px-6 py-3 rounded-lg"
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default PhoneNavbar;
