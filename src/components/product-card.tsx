import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = product.price * (1 - product.dicountPercentage / 100)

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={product.productImage || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {product.dicountPercentage > 0 && (
              <Badge className="absolute top-2 right-2 bg-red-500">-{product.dicountPercentage}%</Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <div className="space-y-1">
            <h3 className="font-semibold truncate">{product.title}</h3>
            <div className="flex items-center gap-2">
              <span className="font-bold">${discountedPrice.toFixed(2)}</span>
              {product.dicountPercentage > 0 && (
                <span className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

