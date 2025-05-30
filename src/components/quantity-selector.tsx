"use client";

import type React from "react";

import { useState } from "react";
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const addToCart = () => {
    console.log(`Added ${quantity}kg to cart`);
    // Add your cart logic here
  };

  return (
    <div className="w-full max-w-md pt-6 space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <p className="text-lg font-medium text-gray-700">Quantity</p>
        <div className="flex items-center border border-gray-300 rounded-md">
          <Button
            variant="ghost"
            size="sm"
            onClick={decrementQuantity}
            className="h-10 w-10 p-0 hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <p className="text-2xl font-semibold px-4 text-center border-0 border-l border-r border-gray-300 rounded-none focus:ring-0 focus:border-gray-300">
            {quantity}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={incrementQuantity}
            className="h-10 w-10 p-0 hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <span className="text-lg font-normal text-[#4A4A52]">/kg</span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={toggleFavorite}
          className={`flex-1 h-12 ${
            isFavorite
              ? "bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
              : "bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          <Heart
            className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`}
          />
          Save as favorite
        </Button>
        <Button
          onClick={addToCart}
          className="flex-1 h-12 bg-orange-500 hover:bg-orange-600 text-white"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to cart
        </Button>
      </div>
    </div>
  );
}
