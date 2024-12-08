
import Browserange from "@/components/browseRange";
import ProductGrid from "@/components/firstProduct";
import Hero from "@/components/hero ";
import Navbar from "@/components/navBar";
import ProductDetails from "@/components/productDetails";
import RelatedProducts from "@/components/relatedProducts";
import RoomInspiration from "@/components/roomInspiration";
import Footer from "@/components/footer";



export default function Home() {
  return (
   <>
  
   <Navbar/>
   <Hero/>
   <Browserange/>
   <ProductGrid/>
   <RoomInspiration/>
   <ProductDetails/>
   <RelatedProducts/>
   <Footer/>

   </>
  );
}
