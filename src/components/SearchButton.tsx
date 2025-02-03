"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import type { Product } from "@/types/product"

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [products, setProducts] = useState<Product[]>([])
  const [searchResults, setSearchResults] = useState<Product[]>([])

  useEffect(() => {
    // In a real application, you would fetch this from an API
    const dummyProducts: Product[] = [
      {
          id: "1", title: "Sofa", price: 599.99, productImage: "/sofa.png",
          tags: [],
          description: "",
          isNew: false,
          dicountPercentage: 0,
          stockLevel: 0,
          isFeaturedProduct: 0,
          inventory: 0
      },
      {
          id: "2", title: "Dining Table", price: 399.99, productImage: "/dining-table.png",
          tags: [],
          description: "",
          isNew: false,
          dicountPercentage: 0,
          stockLevel: 0,
          isFeaturedProduct: 0,
          inventory: 0
      },
      {
          id: "3", title: "Bed Frame", price: 299.99, productImage: "/bed-frame.png",
          tags: [],
          description: "",
          isNew: false,
          dicountPercentage: 0,
          stockLevel: 0,
          isFeaturedProduct: 0,
          inventory: 0
      },
    ]
    setProducts(dummyProducts)
  }, [])

  const toggleSearch = () => {
    setIsOpen(!isOpen)
    setSearchTerm("")
    setSearchResults([])
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    const results = products.filter((product) => product.title.toLowerCase().includes(term.toLowerCase()))
    setSearchResults(results)
  }

  return (
    <div className="relative">
      <button
        aria-label="Search"
        className="p-2 hover:bg-black/5 rounded-full transition-colors"
        onClick={toggleSearch}
      >
        <Search className="w-6 h-6" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="p-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((product) => (
                  <li key={product.id} className="mb-2">
                    <span>{product.title}</span>
                    <span className="ml-2 text-gray-500">${product.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              searchTerm && <p>No results found</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchButton

