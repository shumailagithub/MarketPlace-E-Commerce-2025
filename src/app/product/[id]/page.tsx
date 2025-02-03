
// import { ProductDetail } from "@/components/product-detail"
// import Shopbottombar from "@/components/shopBottomBar/Shopbottombar"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { BarChart2, Heart, Share2 } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import { Product } from "@/types/product"
// import { fetchData } from "@/services/mockApi"
// import { client } from "@/sanity/lib/client"


// async function getProduct(_id: string) {
//   // Replace with your API call
//   const res = await fetch(`https://template6-six.vercel.app/api/products`)
//   const product = await res.json()
//   return product
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product = await getProduct(params.id)

//   function formatPrice(price: any): import("react").ReactNode | Iterable<import("react").ReactNode> {
//     throw new Error("Function not implemented.")
//   }

//   if(!product || product.length === 0){
//     await fetchData();
   
//   }

//   const res = await client.fetch(`*[_type == 'product']{
//     'productImage': productImage.asset->url,
//       price,
//       tags,
//       description,
//       isNew,
//       title,
//       dicountPercentage,
//       inventory,
//       category,
//       }`)

//   if(!res || res.length === 0){
//     await fetchData();
   
//   }

//   return (
//     // <div className="container py-8">
//       // <ProductDetail product={product} />
    
//     // </div>
//     <>

//       <div className="container mx-auto p-4 md:p-6">
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {res.map((item: Product, id: number) => (
//             <Card key={id} className="group relative overflow-hidden shadow-md">
             
//              <Link href={`/products/ProductDetail?title=${item.title}
//              &dicountPercentage=${item.dicountPercentage}
//               &description=${item.description}
//               &price=${item.price}
//               &productImage=${item.productImage}`} passHref>
//               <div className="relative aspect-square">
                
//                 <Image
//                  src={item.productImage} 
//                  alt={item.title}
//                     fill 
//                 className="object-cover transition-transform group-hover:scale-105"
//                 /> 
//                 </div>
          
//                  {item.dicountPercentage && ( 
//                  <Badge className="absolute left-4 top-4 bg-red-500">-{item.dicountPercentage}%</Badge>
//                  )} 
//                 {item.isNew && (
//                   <Badge className="absolute left-4 top-4 bg-emerald-500">{item.tags}</Badge>
//                 )}
//                 <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
//                   <Button size="icon" variant="secondary">
//                     <Share2 className="h-4 w-4" />
//                   </Button>
//                   <Button size="icon" variant="secondary">
//                     <BarChart2 className="h-4 w-4" />
//                   </Button>
//                   <Button size="icon" variant="secondary">
//                     <Heart className="h-4 w-4" />
//                   </Button>
//                 </div>

                
//               </Link>
//               <CardContent className="p-4">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                  {/* <p className="text-sm text-gray-500">{item.category}</p>  */}
//               </CardContent>

//               <CardFooter className="flex flex-col items-start gap-4 p-4">
//                 <div className="flex items-center gap-2">
//                   <span className="text-lg font-bold">{formatPrice(item.price)}</span>
//                 </div> 
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//         <div className="mt-8 flex justify-center gap-2 flex-wrap">

//           <Link href={'/Singleproduct'}>
//             <Button variant="outline" className="w-12">1</Button>
//           </Link>
//           <Link href={"/OurProducts"}>
//             <Button variant="outline" className="w-12">2</Button>
//           </Link>
//           <Link href={"/BeautifulRoom"}>
//             <Button variant="outline" className="w-12">3</Button>
//           </Link>
//           <Button variant="outline" className="w-20">Next</Button>
//         </div>
//       </div>

//       <Shopbottombar />
      
//       <section/> 
//     </>
//   )
// }

