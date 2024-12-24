
// import React from "react";
// import Image from "next/image";
// import { BlogData } from "@/constant/blogData";

// function BlogCenter() {
//   return (
//     <>
//       {BlogData.map((item, index) => (
//         <div key={index} className="w-full mb-12">
//           {/* image top div */}
//           <div className="w-full">
//             <Image
//               src={item.src}
//               width={820}
//               height={400}
//               alt="image1"
//               className="w-full h-auto"
//             />
//           </div>

//           <div className="flex flex-wrap gap-4 mt-4">
//             <div className="flex gap-2">
//               <Image src="/date.png" width={20} height={20} alt="date" />
//               <p className="text-gray-400">{item.date}</p>
//             </div>
//             <div className="flex gap-2">
//               <Image src="/admin.png" width={20} height={20} alt="admin" />
//               <p className="text-gray-400">{item.admin}</p>
//             </div>
//             <div className="flex gap-2">
//               <Image src="/wood.png" width={20} height={20} alt="category" />
//               <p className="text-gray-400">{item.category}</p>
//             </div>
//           </div>

//           {/* bottom div */}
//           <div className="mt-4">
//             <h1 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2">{item.h1}</h1>
//             <p className="text-sm sm:text-base leading-relaxed mb-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
//             </p>
//             <p className="text-sm underline cursor-pointer">Read More</p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default BlogCenter;


















import React from "react";
import Image from "next/image";
import { BlogData } from "@/constant/blogData";

function BlogCenter() {
  return (
    <div className="px-4 lg:px-12">
      {BlogData.map((item, index) => (
        <div
          key={index}
          className="w-full mb-8 lg:mb-12 border-b pb-6 last:border-none"
        >
          {/* Image Section */}
          <div className="w-full">
            <Image
              src={item.src}
              width={820}
              height={400}
              alt="image1"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Image src="/date.png" width={20} height={20} alt="date" />
              <p>{item.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/admin.png" width={20} height={20} alt="admin" />
              <p>{item.admin}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/wood.png" width={20} height={20} alt="category" />
              <p>{item.category}</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-4">
            <h1
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3"
            >
              {item.h1}
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet.
            </p>
            <p className="text-sm font-medium text-[#B88E2F] underline cursor-pointer hover:text-[#A17B2A]">
              Read More
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogCenter;
