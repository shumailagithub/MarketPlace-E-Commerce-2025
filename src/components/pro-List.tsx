// import Image from "next/image"
// import { Heart, Share2, BarChart2, ShoppingCart } from 'lucide-react'
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import Shopbottombar from "@/components/shopBottomBar/Shopbottombar";
// import Link from "next/link";
// import { Product } from "@/types/product";

// const formatPrice = (price: number) => {
//   return `$${price.toFixed(2)}`;
// };

// const ProList = ({products}:{products:Product[]}) => {
//   return (
//     <>
//     <section className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-12 md:py-16">
//       <div className="container mx-auto px-4 text-center">
//         <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
//         <h1 className="text-3xl md:text-4xl font-medium mb-4">Shop</h1>
//         <div className="flex items-center justify-center gap-2 text-sm">
//           <a href="#" className="hover:underline">
//             Home
//           </a>
//           <span>
//             <Image src={"/rightA.png"} width={20} height={20} alt="arrow" />
//           </span>
//           <span>Shop</span>
//         </div>
//       </div>
//     </section>

  

//     <div className="container mx-auto p-4 md:p-6">
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {products.map((product: Product, id: number) => (
//           <Card 
//           key={id}
//            className="group relative overflow-hidden shadow-md">
           
//            <Link href={`/products/ProductDetail?title=${product.title}
//            &dicountPercentage=${product.dicountPercentage}
//             &description=${product.description}
//             &price=${product.price}
//             &productImage=${product.productImage}`} passHref>
//             <div className="relative aspect-square">
              
//               <Image
//                src={product.productImage} 
//                alt={product.title}
//                   fill 
//               className="object-cover transition-transform group-hover:scale-105"
//               /> 
//               </div>
//                {product.dicountPercentage && ( 
//                <Badge className="absolute left-4 top-4 bg-red-500">-{product.dicountPercentage}%</Badge>
//                )} 
//               {product.isNew && (
//                 <Badge className="absolute left-4 top-4 bg-emerald-500">{product.tags}</Badge>
//               )}
//               <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
//                 <Button size="icon" variant="secondary">
//                   <Share2 className="h-4 w-4" />
//                 </Button>
//                 <Button size="icon" variant="secondary">
//                   <BarChart2 className="h-4 w-4" />
//                 </Button>
//                 <Button size="icon" variant="secondary">
//                   <Heart className="h-4 w-4" />
//                 </Button>
//               </div>
//             </Link>
//             <CardContent className="p-4">
//               <h3 className="text-lg font-semibold">{product.title}</h3>
//               {/* <p className="text-sm text-gray-500">{item.category}</p> */}
//             </CardContent>
//             <CardFooter className="flex flex-col items-start gap-4 p-4">
//               <div className="flex items-center gap-2">
//                 <span className="text-lg font-bold">{formatPrice(product.price)}</span>
//                 {product.price && (
//                   <span className="text-sm text-gray-500 line-through">
//                     {formatPrice(product.price)}
//                   </span>
//                 )}
//               </div>
//               {/* <Button className="w-full md:w-auto">
//                 <ShoppingCart className="mr-2 h-4 w-4" />
//                 Add to cart
//               </Button> */}


// <Link href={`/cart?title=${product.title}&price=${product.price}&productImage=${product.productImage}`} passHref>
//           <Button className="h-12 w-[300px] rounded-full px-8 bg-black text-white p-2 hover:bg-gray-900 transition-colors">
//             <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
//             Add To Cart
//           </Button>
//           </Link>
//             </CardFooter>
//           </Card>
        
//       </div>
//       <div className="mt-8 flex justify-center gap-2 flex-wrap">


//     <Link href={'/Singleproduct'}>
//     <Button variant="outline" className="w-12">1</Button>
//     </Link>
//         <Button variant="outline" className="w-12">2</Button>
//         <Button variant="outline" className="w-12">3</Button>
//         <Button variant="outline" className="w-20">Next</Button>
//       </div>
//     </div>

//     <Shopbottombar />
    
//     </section>
//   </>
//   )
// }

// export default ProList