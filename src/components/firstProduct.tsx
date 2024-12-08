import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2, Heart, BarChart2 } from 'lucide-react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  tag?: {
    text: string
    type: "sale" | "new"
  }
}

const products: Product[] = [
  {
    id: "1",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    image: "/card01.png",
    tag: {
      text: "-30%",
      type: "sale"
    }
  },
  {
    id: "2",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    image: "/FeaturedProducts.png",
  },
  {
    id: "3",
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    image: "/card03.png",
    tag: {
      text: "-50%",
      type: "sale"
    }
  },
  {
    id: "4",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    image: "/card04.png",
    tag: {
      text: "New",
      type: "new"
    }
  },
  {
    id: "5",
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    image: "/card4.png",
  },
  {
    id: "6",
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    image: "/card5.png",
    tag: {
      text: "New",
      type: "new"
    }
  },
  {
    id: "7",
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    originalPrice: 14000000,
    image: "/card7.png",
    tag: {
      text: "-50%",
      type: "sale"
    }
  },
  {
    id: "8",
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    image: "/card8.png",
    tag: {
      text: "New",
      type: "new"
    }
  },
]

const formatPrice = (price: number): string => `Rp ${price.toLocaleString('id-ID')}`

export default function ProductGrid() {
  return (
    <div className="w-full px-4 py-8">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">Our Products</h1>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group relative">
            {/* Product Image */}
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
                {product.tag && (
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white
                      ${product.tag.type === 'sale' ? 'bg-red-500' : 'bg-emerald-500'}`}
                  >
                    {product.tag.text}
                  </span>
                )}
              </div>
              {/* Product Details */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
                <div className="mt-2 space-y-1">
                  <div className="font-semibold">{formatPrice(product.price)}</div>
                  {product.originalPrice && (
                    <div className="text-muted-foreground line-through text-sm">
                      {formatPrice(product.originalPrice)}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            {/* Footer */}
            <CardFooter className="p-4 pt-0 flex flex-col gap-2">
              <Button className="w-full bg-primary hover:bg-primary/90">Add to cart</Button>
              <div className="flex justify-between items-center">
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <BarChart2 className="h-4 w-4" />
                  <span className="sr-only">Compare</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Like</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="px-8">
          Show More
        </Button>
      </div>
    </div>
  );
}


