// import Image from 'next/image'

// export default function BeautifulRoom() {
  
//   return (
//     <section className="relative bg-[#fcf8f3] flex flex-col gap-[34px]  justify-between items-center py-[44px]
//     lg:flex-row 
//     ">
      
      

//       {/* left text */}
//       <div className="flex flex-col gap-4 w-[343px] 
//       exsm:w-[300px]
//       xsm:ml-[50px] 
      
      
//       ">
//         <h1 className="xsm:text-[40px] exsm:text-[30px] xsm:leading-[48px] exsm:leading-[42px] font-bold">50+ Beautiful rooms 
//         inspiration</h1>
//         <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
//         <button className="px-[30px] py-[12px] bg-[#B88E2F] text-white font-bold">Explore More</button>
//       </div>

//       {/* right div */}
//       <div className="flex flex-col gap-[20]
//       lg:flex-row
//       xsm:ml-[50px]
      
//       exsm:gap-[10px]
//       overflow-hidden
      
//       ">

//         {/* 1 */}
//         <div className=" relative xsm:w-[328px] xsm:h-[582px] exsm:w-[280px] exsm:h-[480px]">
//           <Image src="/room1.png" alt="room1" layout='fill' objectFit="cover"></Image>
//         </div>

//         {/* 2 */}
//         <div className=" relative xsm:w-[302px] xsm:h-[486px] exsm:w-[280px] exsm:h-[480px]">
//           <Image src="/room2.png" alt="room2" layout='fill' objectFit="cover"></Image>
//         </div>
        
//         {/* 3 */}
//         <div className=" relative xsm:w-[302px] xsm:h-[486px] exsm:w-[280px] exsm:h-[480px] ">
//           <Image src="/room3.png" alt="room3" layout='fill' objectFit="cover"></Image>
//         </div>

//       </div>
//     </section>
//   )
// }


















import Image from 'next/image';

export default function BeautifulRoom() {
  return (
    <section
      className="relative bg-[#fcf8f3] flex flex-col gap-6 justify-between items-center py-8
      lg:flex-row lg:py-12"
    >
      {/* Left text */}
      <div
        className="flex flex-col gap-4 w-full max-w-[343px] text-center 
        lg:text-left lg:max-w-[400px] lg:ml-8"
      >
        <h1
          className="text-[30px] leading-[42px] font-bold 
          sm:text-[36px] sm:leading-[48px] 
          lg:text-[40px]"
        >
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-sm text-gray-700 sm:text-base">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button
          className="px-6 py-2 bg-[#B88E2F] text-white font-bold rounded
          sm:px-8 sm:py-3"
        >
          Explore More
        </button>
      </div>

      {/* Right images */}
      <div
        className="flex flex-col gap-4 
        sm:flex-row sm:gap-6 
        lg:gap-8 lg:ml-8"
      >
        {/* Image 1 */}
        <div className="relative w-[280px] h-[400px] sm:w-[300px] sm:h-[500px] lg:w-[328px] lg:h-[582px]">
          <Image
            src="/room1.png"
            alt="room1"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-[280px] h-[400px] sm:w-[300px] sm:h-[500px] lg:w-[302px] lg:h-[486px]">
          <Image
            src="/room2.png"
            alt="room2"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>

        {/* Image 3 */}
        <div className="relative w-[280px] h-[400px] sm:w-[300px] sm:h-[500px] lg:w-[302px] lg:h-[486px]">
          <Image
            src="/room3.png"
            alt="room3"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
}
