import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <section className="container mx-auto px-2 py-12 divide-y-2 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-12">
        <div>
          <h2 className="text-2xl font-bold">Fresh Harvest</h2>
        </div>
        <div className="lg:justify-self-center space-y-4">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="flex flex-col gap-2 *:text-[#4A4A52]">
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="lg:justify-self-center space-y-4">
          <h3 className="text-lg font-medium">Quick Links 2</h3>
          <ul className="flex flex-col gap-2 *:text-[#4A4A52]">
            <li>Favourites</li>
            <li>Cart</li>
            <li>Sign in</li>
            <li>Register</li>
          </ul>
        </div>
        <div className="lg:justify-self-center space-y-4">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="flex flex-col gap-4 *:text-[#4A4A52]">
            <li className="flex gap-2 items-center">
              <Phone className="text-[#749B3F]" /> 1234 5678 90
            </li>
            <li className="flex gap-2">
              <Mail className="text-[#749B3F]" /> Freshharvests@gmail.com
            </li>
            <li className="flex gap-2">
              <MapPin className="text-[#749B3F]" /> Tanjung Sari Street,
              Pontianak, Indonesia
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between pt-12">
        <p className="font-medium">
          &copy; Copyright 2024, All Rights Reserved by Banana Studio
        </p>
        <ul className="flex gap-4 items-center">
          <li className="p-2 bg-[#212337] text-white rounded-full">
            <Twitter size={18} />
          </li>
          <li className="p-2 bg-[#212337] text-white rounded-full">
            <Facebook size={18} />
          </li>
          <li className="p-2 bg-[#212337] text-white rounded-full">
            <Instagram size={18} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
