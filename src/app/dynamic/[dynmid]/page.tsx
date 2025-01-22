"use client";

import { useState } from "react";
import { Star, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";

 function DynamicProducts() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");

  return (
    <div className="min-h-screen bg-[#FFF9F3] text-black flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-center items-center bg-[#FFF9F3]">
        <Image
          src="/3.png"
          alt="Product"
          width={400}
          height={400}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="flex-1 bg-white text-black">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Price */}
          <h2 className="text-3xl font-medium">Rs. 250,000.00</h2>

          {/* Rating */}
          <div className="flex items-center gap-4">
            <div className="flex">
              {[1, 2, 3, 4].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mask-half" />
            </div>
            <span className="text-gray-400">5 Customer Review</span>
          </div>

          {/* Size Selection */}
          <div className="space-y-4">
            <h3 className="text-lg">Size</h3>
            <RadioGroup
              defaultValue={selectedSize}
              onValueChange={setSelectedSize}
              className="flex gap-3"
            >
              {["L", "XL", "XS"].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                  <Label
                    htmlFor={`size-${size}`}
                    className="px-4 py-2 border rounded-md cursor-pointer peer-data-[state=checked]:bg-white peer-data-[state=checked]:text-black"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Color Selection */}
          <div className="space-y-4">
            <h3 className="text-lg">Color</h3>
            <RadioGroup
              defaultValue={selectedColor}
              onValueChange={setSelectedColor}
              className="flex gap-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="purple" id="color-purple" className="peer sr-only" />
                <Label
                  htmlFor="color-purple"
                  className="w-8 h-8 rounded-full bg-purple-600 cursor-pointer ring-offset-2 ring-offset-black peer-data-[state=checked]:ring-2"
                />
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gold" id="color-gold" className="peer sr-only" />
                <Label
                  htmlFor="color-gold"
                  className="w-8 h-8 rounded-full bg-yellow-600 cursor-pointer ring-offset-2 ring-offset-black peer-data-[state=checked]:ring-2"
                />
              </div>
            </RadioGroup>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 border rounded-lg w-fit">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-black hover:text-white hover:bg-gray-800"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
              className="text-black hover:text-white hover:bg-gray-800"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Product Details */}
          <div className="space-y-4 pt-8 border-t border-gray-800">
            <div className="flex gap-4">
              <span className="text-gray-400 w-24">SKU</span>
              <span>: SS001</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-400 w-24">Category</span>
              <span>: Sofas</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-400 w-24">Tags</span>
              <span>: Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-400 w-24">Share</span>
              <span>:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicProducts;