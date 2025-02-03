"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Shopbottombar from '@/components/shopBottomBar/Shopbottombar'
import { Trash } from 'lucide-react'
import CartTotals from '@/components/cartTotals/CartTotals'
import { useRouter, useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';


interface Iproduct{
  title: string, 
  price: string, 
  description: string, 
  productImage: string,  
}
function Cart() {

  const router = useRouter();
  const searchParam = useSearchParams();
  const [cartItem, setCartItem] = useState<Iproduct[]>([]);

  const [qty, setQty] = useState(1)

  useEffect(() => {
    
    const cart = localStorage.getItem("cart")
    const updatedcart = cart ? JSON.parse(cart) : []

    const title = searchParam.get("title");
    const price = searchParam.get("price");
    const description = searchParam.get("description");
    const productImage = searchParam.get("productImage");

    if(title && price && description && productImage){
      const isDuplicate = updatedcart.some((item: Iproduct) => item.title === title);

      if(!isDuplicate){
        updatedcart.push({title, price, description, productImage})
      }

      localStorage.setItem("cart", JSON.stringify(updatedcart))
      setCartItem(updatedcart)
      router.replace("/cart")
    }
    
  }, [searchParam, router])

  function handleRemoveItem(index: number){
    const removeCard = [...cartItem]
    removeCard.splice(index, 1)

    localStorage.setItem("cart", JSON.stringify(removeCard))
    setCartItem(removeCard)
  }

  function handleQuantity(index: number, num: string){
    setQty(Number(num))
  }



  return (
    <>


      {/* Banner Section */}

      <section className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-12 md:py-16 mb-6">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Cart</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="#" className="hover:underline">
              Home
            </a>
            <span>
              <Image src={"/rightA.png"} width={20} height={20} alt="arrow" />
            </span>
            <span>Cart</span>
          </div>
        </div>
      </section>


      {/* Middle Section */}
      <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-24 mb-16">

        {/* Left Div - Cart Items */}
        <div className="w-full lg:w-[817px]">
          <div className="bg-[#f9f1e7] w-full h-14 px-4 flex items-center text-[16px] leading-[24px]">
            <p className="w-1/4 text-center">Product</p>
            <p className="w-1/4 text-center">Price</p>
            <p className="w-1/4 text-center">Quantity</p>
            <p className="w-1/4 text-center">SubTotal</p>
          </div>



          {cartItem.map((item: Iproduct, index: number) => {
            return (
              <Card key={index}>
                <div className="mt-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.productImage}
                      alt={item.title}
                      width={108}
                      height={105}
                      className="max-w-full"
                    />
                    <p className="text-[#9f9f9f]">{item.title}</p>
                  </div>

                  <p className="text-[#9f9f9f]">Rs.{item.price}</p>

                  <input type='number' 
                  min={1} value={qty} onChange={(e) => {handleQuantity(index, e.target.value)
                  }}
                    className="w-12 h-12 text-center text-[16px] leading-[24px]"
                  
                  />

                  <p className="text-[#9f9f9f]">Rs.{(Number(item.price) * qty).toLocaleString()}</p>
                  
                  <Button variant="ghost" size="sm" onClick={() =>{handleRemoveItem(index)}} >
                  
                  
                  <Trash size={28} fill="#b88e2f" />               
                  </Button>
                  
                </div>
              </Card>
            )
          })}

        </div>

        {/* Right Div - Image */}
        <div className="w-full lg:w-[393px]">

          <CartTotals />
        </div>

      </div>

      <Shopbottombar />
    </>
  )
}

export default Cart