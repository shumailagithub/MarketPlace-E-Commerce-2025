import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";









export default async function ProductDetails({searchParams} : {searchParams: Promise<{
    title: string,
    description: string,
    price: number,
    productImage: string,
  }>}) 
  
  {
  
    const {title, description, price, productImage} = await searchParams
  
    return (
      <div className="min-h-screen bg-white p-6 mt-[100px]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Product Image */}
            <div className="relative aspect-square rounded-lg bg-[#F5F5F5] p-8">
              <Image
                src={productImage}
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
                <p className="font-poppins text-3xl font-medium md:text-4xl">Rs.{price.toLocaleString()}.00</p>
                <div className="mt-10">
  
            <Link href={`/cart?title=${title}&price=${price}&productImage=${productImage}`} passHref>
            <Button className="h-12 w-[300px] rounded-full px-8 bg-black text-white p-2 hover:bg-gray-900 transition-colors">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              Add To Cart
            </Button>
            </Link>
  
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  