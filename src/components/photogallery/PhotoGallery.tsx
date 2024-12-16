

import React from "react";
import Image from "next/image";

function PhotoGallery() {
  return (
    <section className="w-full max-w-[1440px] mx-auto mt-[100px] mb-[200px] px-4">
      <div className="text-center space-y-4 mb-10">
        <h3 className="text-xl font-semibold text-gray-600">
          Share your setup with
        </h3>
        <h2 className="text-4xl font-bold text-gray-900">#FuniroFurniture</h2>
      </div>


      <div className="relative w-full h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 lg:h-[600px]">
        {/* Image 1 */}
        <div className="relative lg:absolute lg:top-0 lg:left-0">
          <Image src="/pg1.png" height={382} width={100} alt="image1" className="w-full h-full object-cover" />
        </div>

        {/* Image 2 */}
        <div className="relative lg:absolute lg:top-[70px] lg:left-[100px]">
          <Image src="/pg2.png" width={451} height={312} alt="image2" className="w-full h-full object-cover" />
        </div>

        {/* Image 3 */}
        <div className="relative lg:absolute lg:top-[160px] lg:left-[570px]">
          <Image src="/pg3.png" width={295} height={392} alt="image3" className="w-full h-full object-cover" />
        </div>

        {/* Image 4 */}
        <div className="relative lg:absolute lg:top-[100px] lg:left-[875px]">
          <Image src="/pg4.png" width={290} height={384} alt="image4" className="w-full h-full object-cover" />
        </div>

        {/* Image 5 */}
        <div className="relative lg:absolute lg:top-[15px] lg:left-[1170px] h-[433px] w-full lg:w-[230px] bg-red-600">
          <Image src="/pg5.png" layout="fill" objectFit="cover" alt="image5" />
        </div>

        {/* Image 6 */}
        <div className="relative lg:absolute lg:top-[400px] lg:left-[0px] h-[323px] w-full lg:w-[200px] bg-red-600">
          <Image src="/pg6.png" height={323} width={200} alt="image6" className="w-full h-full object-cover" />
        </div>

        {/* Image 7 */}
        <div className="relative lg:absolute lg:top-[400px] lg:left-[215px] h-[242px] w-full lg:w-[344px] bg-red-600">
          <Image src="/pg7.png" height={242} width={344} alt="image7" className="w-full h-full object-cover" />
        </div>

        {/* Image 8 */}
        <div className="relative lg:absolute lg:top-[460px] lg:left-[875px] h-[242px] w-full lg:w-[178px] bg-red-600">
          <Image src="/pg8.png" height={242} width={178} alt="image8" className="w-full h-full object-cover" />
        </div>

        {/* Image 9 */}
        <div className="relative lg:absolute lg:top-[460px] lg:left-[1065px] h-[196px] w-full lg:w-[258px] bg-red-600">
          <Image src="/pg9.png" height={196} width={258} alt="image9" className="w-full h-full object-cover" />
        </div>

        
      </div>
    </section>
  );
}

export default PhotoGallery;




// import React from "react";
// import Image from "next/image";

// function PhotoGallery() {
//   return (
//     <>
//       <section className="w-[1440px] h-auto flex flex-col mt-[100px] mb-[400px]">
//         <div className="text-center space-y-4">
//           <h3 className="text-xl font-semibold text-gray-600">
//             Share your setup with
//           </h3>
//           <h2 className="text-4xl font-bold text-gray-900">#FuniroFurniture</h2>
//         </div>


// <div>

//         {/*upper imgage div */}
//         <div className=" relative w-full  h-full flex  gap-4 flex-wrap m-auto overflow-y-hidden-hidden  ">
//           <div>
//             <Image src="/pg1.png" height={382} width={100} alt="image1"></Image>
//           </div>

//           {/* imagge2 div2 */}
//           <div className="absolute top-[175px] left-[120px]">
//             <Image src="/pg2.png" width={451} height={312} alt="image2"></Image>
//           </div>
//           {/* imagge3 div3 */}
//           <div className="absolute top-[250px] left-[590px]">
//             <Image src="/pg3.png" width={295} height={392} alt="image2"></Image>
//           </div>
//           {/* imagge4 div4 */}
//           <div className="absolute top-[220px] left-[905px]">
//             <Image src="/pg4.png" width={290} height={384} alt="image2"></Image>
//           </div>
//           {/* imagge5 div5 */}
//           <div className="absolute bg-red-600 top-[135px] left-[1210px] h-[433px] w-[230px]">
//             <Image
//               src="/pg5.png"
//               layout="fill"
//               objectFit="cover"
//               alt="image2"
//             ></Image>
//           </div>
//         </div>



// {/* below image div */}


//         <div className=" relative w-full h-full flex sm:flex-col md:flex-row mt-10 gap-4 flex-wrap m-auto overflow-y-hidden-hidden ">
//           {/* imagge6 div6 */}
//           <div className="absolute bg-red-600 top-[-20px] z-10 left-[0px] h-[323px] w-[200px]">
//             <Image src="/pg6.png" height={323} width={200} alt="image2"></Image>
//           </div>
//           {/* imagge6 div6 */}
//           <div className="absolute bg-red-600 top-[-20px] left-[220px] h-[242px] w-[344px]">
//             <Image src="/pg7.png" height={242} width={344} alt="image2"></Image>
//           </div>
//           <div className="absolute bg-red-600 top-[60px] left-[905px] h-[242px] w-[178px]">
//             <Image src="/pg8.png" height={242} width={178} alt="image2"></Image>
//           </div>
//           <div className="absolute bg-red-600 top-[60px] left-[1100px] h-[196px] w-[258px]">
//             <Image src="/pg9.png" height={196} width={258} alt="image2"></Image>
//           </div>
//         </div>


//         </div>
//       </section>
//     </>
//   );
// }

// export default PhotoGallery;
