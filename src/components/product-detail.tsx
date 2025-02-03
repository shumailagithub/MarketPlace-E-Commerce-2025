"use client"

import Image from "next/image"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import type { Product } from "../types/product"

interface ProductDetailProps {
  product: Product
  onAddToCart?: (product: Product, quantity: number) => void
}

export function ProductDetail({ product, onAddToCart }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const discountedPrice = product.price * (1 - product.dicountPercentage / 100)

  const handleAddToCart = () => {
    onAddToCart?.(product, quantity)
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="overflow-hidden">
        <div className="relative aspect-square">
          <Image src={product.productImage || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
          {product.dicountPercentage > 0 && (
            <Badge className="absolute top-4 right-4 bg-red-500">-{product.dicountPercentage}%</Badge>
          )}
        </div>
      </Card>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold">${discountedPrice.toFixed(2)}</span>
            {product.dicountPercentage > 0 && (
              <span className="text-lg text-muted-foreground line-through">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold">Description</h2>
          <p className="text-muted-foreground">{product.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
              +
            </Button>
          </div>
          <Button onClick={handleAddToCart} className="flex-1">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

