"use client"

import React, { useState, useEffect } from "react"
import { Heart } from "lucide-react"

import Image from "next/image"
import { Product } from "@/types/product"

// Move recommendedProducts outside the component
const recommendedProducts: Product[] = [
  {
    id: "1",
    title: "Going all-in with millennial design",
    price: 199.99,
    productImage: "/rp1.png",
    tags: [],
    description: "",
    isNew: false,
    dicountPercentage: 0,
    stockLevel: 0,
    isFeaturedProduct: 0,
    inventory: 0
  },
  {
    id: "2",
    title: "Exploring new ways of decorating",
    price: 249.99,
    productImage: "/rp2.png",
    tags: [],
    description: "",
    isNew: false,
    dicountPercentage: 0,
    stockLevel: 0,
    isFeaturedProduct: 0,
    inventory: 0
  },
  {
    id: "3",
    title: "Handmade pieces that took time to make",
    price: 299.99,
    productImage: "/rp3.png",
    tags: [],
    description: "",
    isNew: false,
    dicountPercentage: 0,
    stockLevel: 0,
    isFeaturedProduct: 0,
    inventory: 0
  },
  {
    id: "4",
    title: "Handmade pieces that took time to make",
    price: 299.99,
    productImage: "/Syltherine.png",
    tags: [],
    description: "",
    isNew: false,
    dicountPercentage: 0,
    stockLevel: 0,
    isFeaturedProduct: 0,
    inventory: 0
  },
]

const WishlistButton = () => {
  const [wishlist, setWishlist] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist")
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist))
    } else {
      // If wishlist is empty, add recommended products
      setWishlist(recommendedProducts)
      localStorage.setItem("wishlist", JSON.stringify(recommendedProducts))
    }
  }, []) // No warning now ✅

  const toggleWishlist = () => {
    setIsOpen(!isOpen)
  }

  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id)
    setWishlist(updatedWishlist)
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
  }

  return (
    <div className="relative">
      <button
        aria-label="Wishlist"
        className="p-2 hover:bg-black/5 rounded-full transition-colors"
        onClick={toggleWishlist}
      >
        <Heart className="w-6 h-6" />
        {wishlist.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            {wishlist.length}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Wishlist</h3>
            {wishlist.length === 0 ? (
              <p>Your wishlist is empty. Here are some recommendations:</p>
            ) : (
              <ul>
                {wishlist.map((item) => (
                  <li key={item.id} className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Image
                        src={item.productImage || "/4.png"}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="mr-2"
                      />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <button onClick={() => removeFromWishlist(item.id)} className="text-red-500 hover:text-red-700">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default WishlistButton