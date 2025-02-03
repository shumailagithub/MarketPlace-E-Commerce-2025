import BeautifulRoom from "@/components/beautifulRoom/beautifulRoom";
import Browserange from "@/components/browserrang/Browserrange"
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import OurProducts from "@/components/ourproducts/OurProducts";
import PhotoGallery from "@/components/photogallery/PhotoGallery";

// interface product {
//   id: string;
//   title: string;
//   price: number;
//   description: string;
//   productImage: string;
//   src: string;
// }

export default function Home() {

  // const res = await fetch("https://template6-six.vercel.app/api/products");

  // const product: product = await res.json();
  return (
    <>
      <Navbar />
      <Hero />
      <Browserange />
      <OurProducts />
      <BeautifulRoom />
      <PhotoGallery />
    </>
  );
}
