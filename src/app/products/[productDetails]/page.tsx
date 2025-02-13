"use client"
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";





interface SnipcartAPI {
  api: {
    cart: {
      items: {
        add: (item: {
          id: string;
          name: string;
          price: number;
          url: string;
          description?: string;
          image?: string;
        }) => void;
      };
    };
  };
}

declare global {
  interface Window {
    Snipcart: SnipcartAPI;
  }
}







// declare global {
//   interface Window {
//     Snipcart: any;
//   }
// }
export default function ProductDetails() 
  
  {
    const searchParams = useSearchParams()
    const heading = searchParams.get('heading')
    const title = searchParams.get('title')
    const description = searchParams.get('description')
    const price = searchParams.get('price')
    const productImage = searchParams.get('productImage')
//-------------------------------
const handleAddToCart = () => {
  window.Snipcart.api.cart.items.add({
    id: heading || 'default-id',
    name: title || 'default-title',
    price: price ? parseFloat(price) : 0,
    url: `/products/productDetails?heading=${heading}&title=${title}
    &description=${description}&price=${price}&productImage=${productImage}`,
    description: description || undefined,
    image: productImage || undefined,
  });
};

    return (
      <div className="min-h-screen bg-white p-6 mt-[100px]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Product Image */}
            <div className="relative aspect-square rounded-lg bg-[#F5F5F5] p-8">
              <Image
                src={productImage || '/default-image.jpg'}
                alt="Nike Air Force 1 PLT.AF.ORM"
                className="h-full w-full object-contain"
                width={600}
                height={600}
              />
            </div>
  
            {/* Product Details */}
            <div className="flex flex-col justify-center space-y-6 pt-6 text-black lg:pt-0">
              <h1 className="font-poppins text-4xl font-medium leading-tight md:text-5xl">
                {title}
              </h1>
  
              <p className="max-w-xl text-base leading-relaxed">
                {description}
              </p>
  
              <div className="space-y-4">
                <p className="font-poppins text-3xl font-medium md:text-4xl">Rs.{price ? parseFloat(price).toLocaleString() : '0.00'}</p>
                <div className="mt-10">
  
           
            <Button className="h-12 w-[300px] rounded-full px-8 bg-black text-white p-2 hover:bg-gray-900 transition-colors"
            onClick={handleAddToCart}>
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              Add To Cart
            </Button>
            
  
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  




















