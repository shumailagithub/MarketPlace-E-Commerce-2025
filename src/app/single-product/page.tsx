import React from 'react'
import Relatedproducts from '@/components/relatedProduct/Relatedproducts'
import { ChevronRight } from 'lucide-react'
import DynamicProducts from '../dynamic/[dynmid]/page'
import Spmain from '@/components/spmain/Spmain'

function Singleproduct() {
  return (
    <>
      {/* Breadcrumb Navigation Section */}
      <div className="w-full flex items-center min-h-[80px] sm:h-[100px] mt-2 sm:mt-3 bg-[#f9f1e7] px-2 exsm:px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 box-border">
  {/* Breadcrumb Links */}
  <div className="w-full flex items-center flex-wrap text-sm exsm:text-base sm:text-lg md:text-[20px] leading-[22px] exsm:leading-[24px] sm:leading-[28px] md:leading-[30px]">
    
    {/* Home Link */}
    <p className="text-[#7c7474] flex items-center">
      Home
      <ChevronRight className="inline ml-1 exsm:ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
    </p>

    {/* Shop Link */}
    <p className="text-[#7c7474] ml-2 exsm:ml-3 sm:ml-4 md:ml-6 flex items-center">
      Shop
      <ChevronRight className="inline ml-1 exsm:ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
    </p>

    {/* Product Name with Left Border */}
    <div className="ml-2 exsm:ml-3 sm:ml-4 md:ml-6 pl-2 exsm:pl-3 sm:pl-4 md:pl-6 border-l-2 border-black">
      <p className="font-medium text-sm exsm:text-base sm:text-lg md:text-xl">Asgaard Sofa</p>
    </div>
  </div>
</div>




      {/* Main Product Section */}
      <Spmain id={1} />
      <DynamicProducts />

      {/* Product Details Section */}
      {/* <Productdetails /> */}

      {/* Related Products Section */}
      <Relatedproducts />
    </>
  )
}

export default Singleproduct
