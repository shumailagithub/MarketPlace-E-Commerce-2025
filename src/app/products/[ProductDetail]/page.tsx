

import { ShoppingCart } from "lucide-react";
import Image from "next/image";

// export default async function ProductDetails({searchParams} : {searchParams: Promise<{
//     title: string,
//     price: number,
//     description: string,
//     productImage: string,
// }>}) 

// {

// const {title, price, description, productImage} = await searchParams;


//   return (
//     <div className="max-w-7xl mx-auto px-2 exsm:px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
//       {/* Tabs for Description, Additional Information, and Reviews */}
//       <Tabs defaultValue="description" className="w-full">
//         {/* Tab navigation list with 3 items */}
//         <TabsList className="grid w-full grid-cols-1 xsm:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-8 exsm:mb-[90px]">
//           <TabsTrigger value="description" className="text-base sm:text-lg">Description</TabsTrigger>
//           <TabsTrigger value="additional" className="text-base sm:text-lg">Additional Information</TabsTrigger>
//           <TabsTrigger value="reviews" className="text-base sm:text-lg">Reviews [5]</TabsTrigger>
//         </TabsList>

//         {/* Tab content for "Description" */}
//         <TabsContent value="description" className="space-y-4 sm:space-y-6">
//           {/* <div className="prose max-w-none">
//             <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6">
//              {title}
//             </p>
//             <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8">
//               {description}
//             </p>
            
//           </div> */}

//           {/* Grid layout for images, responsive with 1 column on small screens and 2 columns on medium and larger screens */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
//             <div className="bg-[#fdf6f0] rounded-lg p-4 sm:p-8">
//               <Image
//                 src={productImage}
//                 alt="Sofa straight view"
//                 width={350}
//                 height={300}
//                 className="w-full h-auto object-cover"
//               />


// {/* name and description to test */}
// <div className="prose max-w-none">
//             <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6">
//              {title}
//             </p>
//             <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8">
//               {description}
//             </p>
            
//           </div>







             
//             </div>
//             <h1 className="text-4xl font-bold">Rs.{price.toLocaleString()}.00</h1>
//             <div className="bg-[#fdf6f0] rounded-lg p-4 sm:p-8">
//               <Image
//                 src="/sofa.png"
//                 alt="Sofa L-shaped view"
//                 width={350}
//                 height={300}
//                 className="w-full h-auto object-cover"
//               />

//             </div>
//             <h1 className="text-4xl font-bold">Rs.{price.toLocaleString()}.00</h1>
//           </div>
//         </TabsContent>

//         {/* Tab content for "Additional Information" */}
//         <TabsContent value="additional">
//           <div className="prose max-w-none">
//             <p className="text-gray-600">Additional product information will be displayed here.</p>
//           </div>
//         </TabsContent>

//         {/* Tab content for "Reviews" */}
//         <TabsContent value="reviews">
//           <div className="prose max-w-none">
//             <p className="text-gray-600">Product reviews will be displayed here.</p>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }




















export default async function ProductDetails({searchParams} : {searchParams: Promise<{
  title: string,
  description: string,
  price: number,
  productImage: string
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
  
{/* </Link> */}
{/* <Link href={`/checkout?title=${title}&price=${price}&productImage=${productImage}`}> */}
<button className="h-12 w-[300px] rounded-full px-8 bg-black text-white p-2 hover:bg-gray-900 transition-colors 
flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            Add To Cart
          </button>
          {/* </Link> */}





          {/* <Link
            href="/checkout"
            className="text-sm sm:text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
          >
            <button className="h-12 w-[300px] rounded-full px-8 bg-black text-white p-2 hover:bg-gray-900 transition-colors 
flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            Add To Cart
          </button>
          </Link> */}


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
