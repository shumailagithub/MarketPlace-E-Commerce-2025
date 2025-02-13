// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Shopbottombar from "@/components/shopBottomBar/Shopbottombar";
// import { Trash } from "lucide-react";
// import CartTotals from "@/components/cartTotals/CartTotals";
// // import { useRouter, useSearchParams } from "next/navigation";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Product } from "@/types/product";
// import Link from "next/link";
// import { getCartItems, removeFormCart, updateCartQuantity } from "@/app/actions/actions";
// import Swal from "sweetalert2";


// function CartContent() {
//   //   const router = useRouter();
//   //   const searchParams = useSearchParams();
//   //   const [cartItem, setCartItem] = useState<Product[]>([]);
//   //   const [inventory, setInventory] = useState(1);

//   //   useEffect(() => {
//   //     const cart = localStorage.getItem("cart");
//   //     const updatedCart = cart ? JSON.parse(cart) : [];

//   //     const title = searchParams.get("title");
//   //     const price = searchParams.get("price");
//   //     const description = searchParams.get("description");
//   //     const productImage = searchParams.get("productImage");

//   //     if (title && price && description && productImage) {
//   //       const isDuplicate = updatedCart.some(
//   //         (item: Product) => item.title === title
//   //       );




//   //       console.log(localStorage.getItem("cart"));

//   //       if (!isDuplicate) {
//   //         updatedCart.push({ title, price, description, productImage });
//   //       }
//   //       localStorage.setItem("cart", JSON.stringify(updatedCart));
//   //       setCartItem(updatedCart);
//   //       router.replace("/cart");
//   //     }
//   //   }, [searchParams, router]);

//   //   function handleRemoveItem(index: number) {
//   //     const removeCart = [...cartItem];
//   //     removeCart.splice(index, 1);
//   //     localStorage.setItem("cart", JSON.stringify(removeCart));
//   //     setCartItem(removeCart);
//   //   }

//   //   function handleQuantity(index: number, num: string) {
//   //     setInventory(Number(num));
//   //   }









//   const [cartItems, setCartItems] = useState<Product[]>([])

//   useEffect(() => {
//     setCartItems(getCartItems())
//   }, []);

//   const handleRemove = (id : string) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "you will not be able to recover this item!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "yes, remove it!"
//     }).then((result) => {
//       if(result.isConfirmed){
//         removeFormCart(id)
//         setCartItems(getCartItems())
//         Swal.fire("Remove!", "Item has been removed.", "success");
//       }
//     })
//   }

//   const handleQuantityChange = (id: string, quantity: number) => 
//   {
//     updateCartQuantity(id, quantity);
//     setCartItems(getCartItems())
//   }

//   const handleIncrement = (id: string) => {
//   const product = cartItems.find((item) => item.id == id);
//   if(product)
//     handleQuantityChange(id, product.inventory + 1)
// }


// const handleDecriment = (id: string) => {

//   const product = cartItems.find((item) => item.id === id);
//   if(product && product.inventory > 1)
//     handleQuantityChange(id, product.inventory - 1)
// }


// const calculatedTotal = () => {
//   return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
// }


// const handleProceed = () => {
//    Swal.fire({
//     title: "proceed to Checkout?",
//     text: "please review your cart before checkout",
//     icon: "question",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "yes, proceed!"
//    }).then((result) => {
//     if(result.isConfirmed){
//       Swal.fire("success", "you has been successfully rocessed", "success")
//       setCartItems([])
//     }
//    })
// }

//   return (
//     <div>
//       <section className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-12 md:py-16 mb-6">
//         <div className="container mx-auto px-4 text-center">
//           <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
//           <h1 className="text-3xl md:text-4xl font-medium mb-4">Cart</h1>
//           <div className="flex items-center justify-center gap-2 text-sm">
//             <Link href="/">Home</Link>
//             <span>
//               <Image src={"/rightA.png"}
//                 width={20}
//                 height={20}
//                 alt="arrow" />
//             </span>
//             <span>Cart</span>
//           </div>
//         </div>
//       </section>

//       <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-24 mb-16">
//         <div className="w-full lg:w-[817px]">
//           <div className="bg-[#f9f1e7] w-full h-14 px-4 flex items-center text-[16px] leading-[24px]">
//             <p className="w-1/4 text-center">Product</p>
//             <p className="w-1/4 text-center">Price</p>
//             <p className="w-1/4 text-center">Quantity</p>
//             <p className="w-1/4 text-center">SubTotal</p>
//           </div>



//           {/* new cart Items */}
//           {/* <div>
//             {cartItems.map((item) => (
//               <div key={item.id}>
//                 {item.title}

//               </div>
//             ))}
//           </div> */}






//           {cartItems.map((item: Product, id: number) => (
//             <Card key={item.id}>
//               <div className="mt-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
//                 <div className="flex items-center gap-4">
//                   <Image src={item.productImage} 
//                   alt={item.title} 
//                   width={108} 
//                   height={105} 
//                   className="max-w-full" />
//                   <p className="text-[#9f9f9f]">{item.title}</p>
//                 </div>
//                 <p className="text-[#9f9f9f]">Rs.{item.price}</p>
//                 <input
//                   type="number"
//                   min={1}
//                   value={item.inventory}
//                   onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
//                   className="w-12 h-12 text-center text-[16px] leading-[24px]"
//                 />
//                 <p className="text-[#9f9f9f]">Rs.{(Number(item.price) * item.inventory).toLocaleString()}</p>
//                 <Button variant="ghost" size="sm" onClick={() => handleRemove(item.id)}>
//                   <Trash size={28} fill="#b88e2f" />
//                 </Button>
//               </div>
//             </Card>
//           ))}
//         </div>

//         <div className="w-full lg:w-[393px]">
//           <CartTotals />
//         </div>
//       </div>

//       <Shopbottombar />
//     </div>
//   );
// }

// export default CartContent;
