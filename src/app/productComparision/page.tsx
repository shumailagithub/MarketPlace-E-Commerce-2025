// "use client";
// import React from "react";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa6";
// import { FaRegStarHalfStroke } from "react-icons/fa6";
// import { IoIosArrowDown } from "react-icons/io";
// import { PcSection } from "@/constant/pcSection";
// // import { pcCard } from "@/constant/pcCard";
// import { Button } from "@/components/ui/button";
// import Shopbottombar from "@/components/shopBottomBar/Shopbottombar";
// import Link from "next/link";
// import { Product, products } from "@/constant/pro1";
// import { ShoppingCart } from "lucide-react";


// function ProductComparison({ Product }:{Product: Product[] }) {
//   // const cart = localStorage.getItem('cart');
//   const handleClick = (product: Product) => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '{}');
//    if(cart[product.name]) {
//     cart[product.name] = {
//      ...cart[product.name],
//      quantity: cart[product.name].quantity + 1,
//   };
// }else {
//   cart[product.name] = { ...product, quantity: 1 };
// }
// localStorage.setItem('cart', JSON.stringify(cart));
//   };


//   return (
//     <>


//       <div className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-16 mb-12">
//             <div className="container text-center">
//               <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
//               <h1 className="text-3xl md:text-4xl font-medium mb-4 font-poppins">Product Comparison</h1>
//               <div className="flex items-center justify-center gap-2 text-sm">
//                 <a href="#" className="hover:underline">Home</a>
//                 <span>
//                   <Image src="/rightA.png" width={20} height={20} alt="arrow" />
//                 </span>
//                 <span>Comparison</span>
//               </div>
//             </div>
//           </div>
//       <section className="m-auto pb-[112px]">
//         {/* upper div */}
//         <div className="w-full max-w-screen-xl m-auto mt-[55px] border-b-[1px] border-gray-300 px-[16px] sm:px-[50px] flex gap-[50px] flex-wrap justify-between">
//           <div className="w-full sm:w-[223px] text-left">
//             <h1 className="text-[24px] sm:text-[28px] leading-[30px] sm:leading-[35.42px] font-semibold mb-[21px]">
//               Go to Product page for more Products
//             </h1>
//             <p className="underline text-[14px] sm:text-[16px]">View More</p>
//           </div>

//           {products.map((product, index) => {
//             return (
//               <div
//                 key={index}
//                 className="w-full sm:w-[280px] flex flex-col gap-[18px] mb-[64px]"
//               >
//                 <div className="relative w-full h-[150px] sm:h-[177px] mb-[18px]">
//                   <Image
//                     src={product.image}
//                     alt="cart"
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>

//                 <div className="pl-4">
//                   <h1 className="text-[20px] sm:text-[24px] leading-[26px] sm:leading-[30.36px] font-semibold mb-[6px]">
//                     {product.name}
//                   </h1>

//                   <p className="mb-[7px] text-[16px] sm:text-[18px] leading-[22px] sm:leading-[27px]">{product.price}</p>

//                   <pre className="text-[14px] sm:text-[16px]">
//                     {product.reviews}
//                     {[...Array(product.star)].map((_, index) => (
//                       <FaStar 
//                         key={index}
//                         color="yellow"
//                         size={18}
//                         className="inline ml-[6px] mb-[7px]"
//                       />
//                     ))}
//                     <FaRegStarHalfStroke
//                       color="yellow"
//                       size={18}
//                       className="inline ml-[6px] mb-[7px]"
//                     />
//                     |
//                     <span className="text-gray-500">No reviews</span>
//                   </pre>
//                 </div>
//               </div>
//             );
//           })}

//           <div className="w-full sm:w-[242px] text-left flex flex-col gap-[20px] items-left justify-center">
//             <h1 className="text-[20px] sm:text-[24px] leading-[30.36px] font-semibold">
//               Add A Product
//             </h1>
//             <div>
//               {/* <Button className="bg-[#b88e2f] w-full sm:w-[242px] px-[15px] py-[10px]">
//                 Choose a Product{"/Shop"}
//                 <IoIosArrowDown size={18} className="inline ml-[42px]" />
//               </Button> */}

//               <Link href="/shop" passHref>
//               <Button className="bg-[#b88e2f] w-full sm:w-[242px] px-[15px] py-[10px]">
//                 Choose a Product{"/Shop"}
//                 <IoIosArrowDown size={18} className="inline ml-[42px]" />
//               </Button>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="mt-[42px] px-[16px] sm:px-[50px]">
//           {PcSection.map((section, index) => (
//             <div key={index} className="mt-[96px]">
//               <h3 className="text-[18px] sm:text-2xl font-medium">{section.heading}</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <div className="w-full border-r border-gray-300">
//                   <div className="font-medium mt-[28px] mb-[34px]">{section.one}</div>
//                   <div className="font-medium mb-[34px]">{section.two}</div>
//                   <div className="font-medium mb-[34px]">{section.three}</div>
//                   <div className="font-medium mb-[34px]">{section.four}</div>
//                 </div>

//                 <div className="w-full border-r border-gray-300">
//                   <div className="mb-[34px] mt-[28px]">{section.five}</div>
//                   <div className="mb-[34px]">{section.six}</div>
//                   <div className="mb-[34px]">{section.seven}</div>
//                   <div className="mb-[34px]">{section.eight}</div>
//                 </div>
//                 <div className="w-full border-r border-gray-300">
//                   <div className="mb-[34px] mt-[28px]">{section.nine}</div>
//                   <div className="mb-[34px]">{section.ten}</div>
//                   <div className="mb-[34px]">{section.eleven}</div>
//                   <div className="mb-[34px]">{section.twelve}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex items-center justify-center mt-[53px] mb-[50px] gap-[24px] sm:gap-[108px] flex-wrap">
//           <div />
//          <Link href={"/shop"} passHref>
//          </Link>
//           {/* <Button onClick={() => handleClick(products[0])} className="text-[16px] sm:text-[20px] leading-[30px] w-[160px] sm:w-[215px] py-[12px] sm:py-[17px] px-[12px] sm:px-8 lg:px-12 bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white h-16">
//             Add To Cart
//           </Button> */}

// <Link href={`/cart?title=${products[0].name}&price=${products[0].price}&productImage=${products[0].image}`} passHref>
//           <Button className="h-12 w-[300px] rounded-full px-8 bg-black text-white p-2 hover:bg-gray-900 transition-colors">
//             <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
//             Add To Cart
//           </Button>
//           </Link>
//         </div>

//         <Shopbottombar/>
//       </section>
//     </>
//   );
// }

// export default ProductComparison;



























"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { PcSection } from "@/constant/pcSection";
export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import Shopbottombar from "@/components/shopBottomBar/Shopbottombar";
import PcSectionTwo from "@/components/PcSectionTwo/PcSectionTwo";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ProductComparisonContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

 

  return (
    <>
      <div className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-16 mb-12">
        <div className="container text-center">
          <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4 font-poppins">Product Comparison</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <span>
              <Image src="/rightA.png" width={20} height={20} alt="arrow" />
            </span>
            <span>Comparison</span>
          </div>
        </div>
      </div>

      <section className="m-auto pb-[112px]">
        {id && !isNaN(Number(id)) && <PcSectionTwo id={Number(id)} />}

        <div className="mt-[42px] px-[16px] sm:px-[50px]">
          {PcSection.map((section, index) => (
            <div key={index} className="mt-[96px]">
              <h3 className="text-[18px] sm:text-2xl font-medium">{section.heading}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="w-full border-r border-gray-300">
                  <div className="font-medium mt-[28px] mb-[34px]">{section.one}</div>
                  <div className="font-medium mb-[34px]">{section.two}</div>
                  <div className="font-medium mb-[34px]">{section.three}</div>
                  <div className="font-medium mb-[34px]">{section.four}</div>
                </div>

                <div className="w-full border-r border-gray-300">
                  <div className="mb-[34px] mt-[28px]">{section.five}</div>
                  <div className="mb-[34px]">{section.six}</div>
                  <div className="mb-[34px]">{section.seven}</div>
                  <div className="mb-[34px]">{section.eight}</div>
                </div>
                <div className="w-full border-r border-gray-300">
                  <div className="mb-[34px] mt-[28px]">{section.nine}</div>
                  <div className="mb-[34px]">{section.ten}</div>
                  <div className="mb-[34px]">{section.eleven}</div>
                  <div className="mb-[34px]">{section.twelve}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-[53px] mb-[50px] gap-[24px] sm:gap-[108px] flex-wrap">
          <div />
          <Link href="/cart">
            <Button className="exsm:hidden sm:block text-[16px] sm:text-[20px] leading-[30px] py-[12px] sm:py-[17px] px-[12px] sm:px-8 lg:px-12 w-[160px] sm:w-[215px] bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white h-16">
              Add To Cart
            </Button>
          </Link>

          <Link href="/cart">
            <Button className="text-[16px] sm:text-[20px] leading-[30px] w-[160px] sm:w-[215px] py-[12px] sm:py-[17px] px-[12px] sm:px-8 lg:px-12 bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white h-16">
              Add To Cart
            </Button>
          </Link>
        </div>

        <Shopbottombar />
      </section>
    </>
  );
}

function ProductComparison() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductComparisonContent />
    </Suspense>
  );
}

export default ProductComparison;
