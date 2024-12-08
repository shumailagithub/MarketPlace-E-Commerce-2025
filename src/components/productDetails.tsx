'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Minus, Plus, Star, Twitter } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

interface ProductImage {
  src: string
  alt: string
}

const productImages: ProductImage[] = [
  { src: "/pic94.png", alt: "picture" },
  { src: "/pic98.png", alt: "picture" },
  { src: "/pic97.png", alt: "picture" },
  { src: "/pic96.png", alt: "picture" },
]

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = React.useState("L")
  const [selectedColor, setSelectedColor] = React.useState("purple")
  const [quantity, setQuantity] = React.useState(1)
  const [selectedImage, setSelectedImage] = React.useState(productImages[0])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={cn(
                    "relative h-20 w-20 overflow-hidden rounded-lg border",
                    selectedImage === image && "ring-2 ring-primary"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-cover"
                    fill
                  />
                </button>
              ))}
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">Asgaard sofa</h1>
            <p className="text-2xl font-semibold text-muted-foreground">Rs. 250,000.00</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
              <Star className="h-5 w-5 fill-primary/50 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">5 Customer Review</span>
          </div>
          <p className="text-muted-foreground">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
            highs for a sound.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-medium">Size</h3>
              <div className="flex gap-2">
                {["L", "XL", "XS"].map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="w-12"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">Color</h3>
              <div className="flex gap-2">
                {[
                  { name: "purple", class: "bg-purple-500" },
                  { name: "black", class: "bg-black" },
                  { name: "gold", class: "bg-yellow-600" },
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={cn(
                      "h-8 w-8 rounded-full",
                      color.class,
                      selectedColor === color.name && "ring-2 ring-primary ring-offset-2"
                    )}
                  >
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex items-center rounded-lg border">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button className="flex-1">Add To Cart</Button>
              <Button variant="outline">+ Compare</Button>
            </CardContent>
          </Card>
          <div className="space-y-4 border-t pt-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">SKU:</span>
              <span className="text-muted-foreground">SS001</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Category:</span>
              <span className="text-muted-foreground">Sofas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Tags:</span>
              <div className="flex gap-2 text-muted-foreground">
                {["Sofa", "Chair", "Home", "Shop"].map((tag) => (
                  <Link key={tag} href="#" className="hover:underline">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Share:</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Facebook className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

