// "use client";

// import * as React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { MinusIcon, PlusIcon, Star, StarHalf } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// import { cn } from "@/lib/utils";

// interface ProductImage {
//   src: string;
//   alt: string;
// }

// export default function Spmain() {
//   const [selectedImage, setSelectedImage] = React.useState(0);
//   const [quantity, setQuantity] = React.useState(1);

//   const productImages: ProductImage[] = [
//     { src: "/sp1.png", alt: "Asgaard sofa front view" },
//     { src: "/sp2.png", alt: "Asgaard sofa side view" },
//     { src: "/sp3.png", alt: "Asgaard sofa detail view" },
//     { src: "/sp4.png", alt: "Asgaard sofa back view" },
//   ];

//   return (
//     <div className="w-full mx-auto px-4 py-8 mb-[58px] exsm:w-3/4 exsm:px-0 ">
//       {/* Main content grid, responsive for mobile and larger screens */}
//       <div className="grid gap-8 md:grid-cols-2 ">
//         {/* Image section (Thumbnails + Main Image) */}
//         <div className="flex gap-4 flex-col md:flex-row ">
//           {/* Thumbnails for product images */}
//           <div className="flex exsm:flex-wrap exsm:ml-8 gap-4 overflow-x-auto md:flex-col">
//             {productImages.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={cn(
//                   "border-2 rounded-lg overflow-hidden w-20 h-20 md:w-24 md:h-24",
//                   selectedImage === index ? "border-primary" : "border-transparent"
//                 )}
//               >
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   width={100}
//                   height={100}
//                   className="object-cover w-full h-full"
//                 />
//               </button>
//             ))}
//           </div>

//           {/* Main product image */}
//           <div className="flex-1">
//             <Image
//               src="/Spmain.png"
//               alt="mainImage"
//               width={600}
//               height={600}
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Product details section */}
//         <div className="space-y-6 ">
//           <div className="exsm:text-center sm:text-left">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Asgaard sofa</h1>
//             <p className="text-lg sm:text-2xl text-muted-foreground mt-2">Rs. 250,000.00</p>
//           </div>

//           {/* Product rating and review section */}
//           <div className="flex items-center gap-2">
//             <div className="flex">
//               {[...Array(4)].map((_, i) => (
//                 <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFC700] text-primary" />
//               ))}
//               <StarHalf className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
//             </div>
//             <span className="text-sm text-muted-foreground">5 Customer Review</span>
//           </div>

//           {/* Product description */}
//           <p className="text-sm sm:text-base text-muted-foreground">
//             Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
//             well-balanced audio which boasts a clear midrange and extended highs for a sound.
//           </p>

//           <div className="space-y-4">
//             {/* Size selection section */}
//             <div>
//               <h3 className="font-medium mb-2">Size</h3>
//               <RadioGroup defaultValue="L" className="flex gap-2 sm:gap-4">
//                 {["L", "XL", "XS"].map((size) => (
//                   <div key={size}>
//                     <RadioGroupItem value={size} id={size} className="peer sr-only" />
//                     <Label
//                       htmlFor={size}
//                       className="px-3 py-1 sm:px-4 sm:py-2 border rounded-md peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
//                     >
//                       {size}
//                     </Label>
//                   </div>
//                 ))}
//               </RadioGroup>
//             </div>

//             {/* Color selection section */}
//             <div>
//               <h3 className="font-medium mb-2">Color</h3>
//               <RadioGroup defaultValue="purple" className="flex gap-2 sm:gap-4">
//                 {["purple", "black", "gold"].map((color) => (
//                   <div key={color}>
//                     <RadioGroupItem value={color} id={color} className="peer sr-only" />
//                     <Label
//                       htmlFor={color}
//                       className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-${color}-500 peer-data-[state=checked]:ring-2 ring-offset-2 ring-${color}-500`}
//                     />
//                   </div>
//                 ))}
//               </RadioGroup>
//             </div>

//             {/* Quantity and Cart Buttons */}
//             <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
//               <div className="flex items-center border rounded-md w-[100px] sm:w-[123px] h-[48px] sm:h-[64px]">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="rounded-none"
//                 >
//                   <MinusIcon className="w-4 h-4" />
//                 </Button>
//                 <span className="w-8 sm:w-12 text-center">{quantity}</span>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="rounded-none"
//                 >
//                   <PlusIcon className="w-4 h-4" />
//                 </Button>
//               </div>

//              <Link href="/cart">
//              <Button variant="outline" className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]">
//                 Add To Cart
//               </Button>
             
//              </Link>


//              <Link href="/productComparison">
//              <Button variant="outline" className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]">
//                 + Compare
//               </Button>
//              </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






















"use client";

import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, Star, StarHalf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { products } from "@/constant/pro1";





 function Spmain(props:{id:number}) {

  
  console.log("------------>",props)
  

  const data = products[props.id];


  console.log("😎😍",data)
  

  return (
    <div className="w-full mt-[30px] mb-[100px] px-4 md:px-6 lg:px-10">
    <div className="m-auto flex flex-col  lg:flex-row gap-10 lg:justify-center ">
      {/* Product Images Section */}
      <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row gap-[31px] lg:w-1/2">
        <div className="flex flex-row lg:flex-col gap-4">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              src={data.src}
              alt="mainImage"
              width={76}
              height={80}
              className="w-[60px] h-[60px] rounded-xl md:w-[76px] md:h-[80px] object-cover"
            />
          ))}
        </div>
  
        <div className="relative w-full max-w-[300px] md:max-w-[423px] h-[300px] md:h-[500px] rounded-lg">
          <Image
            src={data.src}
            alt="mainImage"
            objectFit="cover"
            fill
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
  
      {/* Product Details Section */}
      <div className="w-full lg:w-[606px]  space-y-6 ">
        {/* Product Title and Price */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{data.name}</h1>
          <p className="text-lg sm:text-2xl text-muted-foreground mt-2">Rs. {data.price}</p>
        </div>
  
        {/* Product Rating and Review */}
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <div className="flex">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFC700] text-primary" />
            ))}
            <StarHalf className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
          </div>
          <span className="text-sm text-muted-foreground">|</span>
          <span className="text-sm text-muted-foreground">5 Customer Review</span>
        </div>
  
        {/* Product Description */}
        <p className="text-sm sm:text-base text-muted-foreground">
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
        </p>
  
        {/* Size Selection */}
        <div>
          <h3 className="font-medium mb-2">Size</h3>
          <RadioGroup defaultValue="L" className="flex gap-2 sm:gap-4 justify-center lg:justify-start">
            {["L", "XL", "XS"].map((size) => (
              <div key={size}>
                <RadioGroupItem value={size} id={size} className="peer sr-only" />
                <Label htmlFor={size} className="px-3 py-1 sm:px-4 sm:py-2 border rounded-md hover:bg-yellow-500 cursor-pointer">
                  {size}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
  
        {/* Color Selection */}
        <div>
          <h3 className="font-medium mb-2">Color</h3>
          <div className="flex gap-4 justify-center lg:justify-start">
            {["#816dfa", "black", "#b88e2f"].map((color) => (
              <div key={color} className="w-[30px] h-[30px] rounded-full" style={{ backgroundColor: color }}></div>
            ))}
          </div>
        </div>
  
        {/* Quantity and Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-3 items-center justify-center lg:justify-start">
          <div className="flex items-center border rounded-md w-[100px] sm:w-[123px] h-[48px] sm:h-[64px]">
            <Button variant="ghost" size="icon" className="rounded-none">
              <MinusIcon className="w-4 h-4" />
            </Button>
            <span className="w-8 sm:w-12 text-center">1</span>
            <Button variant="ghost" size="icon" className="rounded-none">
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
  
          <Link href="/cart">
            <Button variant={"outline"} className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]">Add To Cart</Button>
          </Link>
  
          
          {/* <Link href={`/productComparison?id=${data.id}`}>
            <Button variant="outline" className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]">+ Compare</Button>
          </Link> */}


<Link href={`/productComparison?id=${data.id}`}>
            <Button variant="outline" className="w-full sm:w-[215px] h-[48px] sm:h-[64px] rounded-md sm:rounded-[15px]">+ Compare</Button>
          </Link>




        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Spmain;


// import { Button } from "@/components/ui/button";