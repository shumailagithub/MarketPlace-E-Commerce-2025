import BeautifulRoom from "@/components/beautifulRoom/beautifulRoom";
import Browserange from "@/components/browserrang/Browserrange"
import Hero from "@/components/hero/Hero";
import OurProducts from "@/components/ourproducts/OurProducts";
import PhotoGallery from "@/components/photogallery/PhotoGallery";
import ShipmentForm from "@/components/shipmentForm";




export default async function Home() {
// -----------------------------Shipment For

//carrier_id

//service_code

//-----------------------------------


  return (
    <>
  
      <Hero />
      <Browserange />
      <OurProducts />
      <BeautifulRoom />
      <PhotoGallery />

       {/* Shipment Form */}
       <div className="py-[200px]">
                    <ShipmentForm />
                  </div>
    </>
  );
}
