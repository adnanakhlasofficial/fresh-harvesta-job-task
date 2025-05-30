import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";
import PhoneNavbar from "./PhoneNavbar";

const Navbar = () => {
  const [form, setForm] = useState("login");

  const shiftForm = (value: string) => {
    setForm(value);
  };

  return (
    <div className="absolute top-0 w-full ">
      <section className=" flex justify-between items-center py-7 max-w-[1200px] mx-auto px-2">
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
          <ul className="flex gap-8 text-[#212337] font-medium items-center">
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
              <Dialog>
                <DialogTrigger>
                  <button className="border border-[#FF6A1A] text-[#FF6A1A] hover:bg-[#FF6A1A] hover:text-white px-6 py-3 rounded-lg">
                    {" "}
                    Sign in
                  </button>
                </DialogTrigger>
                <DialogContent className="h-fit">
                  <DialogHeader>
                    {form === "login" ? (
                      <LoginForm shiftForm={shiftForm} />
                    ) : (
                      <RegisterForm shiftForm={shiftForm} />
                    )}
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </li>
          </ul>
        </div>
        <div className="lg:hidden block">
          <PhoneNavbar />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
