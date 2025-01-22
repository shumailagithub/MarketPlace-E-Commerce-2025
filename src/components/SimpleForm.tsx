// "use client";
// // import Link from 'next/link';
// import React from 'react';
// import { useForm } from "react-hook-form";

// function SimpleForm() {

//     const { register, handleSubmit,
//       formState: { errors }

//      } = useForm(); 

//     const CustomerSubmit = (data: any) => {
//      console.log(data)
//     }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#fdf6f0] w-full">
//       {/* Form Container */}
//       <form onSubmit={handleSubmit(CustomerSubmit)} className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
//         <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
//         {/* Username Field */}
//         <div className="mb-4">
//           <label
//             htmlFor="username"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Username
//           </label>
//           <input
//           {...register("username",
//             {required: true}
//           )}
//             type="text"
//             id="username"
//             name="username"
//             placeholder="Enter your username"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-[#897a6d]"
//             required
//           />
//         { errors.username && errors.username.type === "required" &&(
//             <p className='text-gray-900 font-bold'>user Name is required</p>
//         )}
          
//         </div>
//         {/* Email Field */}
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-gray-700 font-medium mb-2"
//           >
//             Email Address
//           </label>
//           <input
//           {...register("email", { required: true})}
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-[#B88E2F]"
//             required
//           />
//            { errors.email && errors.email.type === "required" &&(
//             <p className='text-gray-900 font-bold'>user Email is required</p>
//         )}
//         </div>
//         {/* Submit Button */}
//         <div>
//           <button
//             type="submit"
//             className="w-full bg-[#B88E2F] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#B88E2F] transition duration-300"
//           >
//             Submit
//           </button>
//         </div>
//         {/* Go to Homepage Button */}
//         {/* <div className="flex justify-center mt-6">
//           <Link href={"/"}
//              className="bg-[#7a6552] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#897a6d] transition duration-300">
//               Go to Homepage
            
//           </Link>
//         </div> */}
//       </form>
//     </div>
//   );
// }

// export default SimpleForm;



















"use client";
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

// Define a TypeScript interface for the form data
interface IFormInput {
  username: string;
  email: string;
}

function SimpleForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>(); // Use the IFormInput type with useForm

  // Update the function to use the correct type
  const CustomerSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fdf6f0] w-full">
      {/* Form Container */}
      <form onSubmit={handleSubmit(CustomerSubmit)} className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        {/* Username Field */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-2"
          >
            Username
          </label>
          <input
            {...register("username", { required: true })}
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-[#897a6d]"
            required
          />
          {errors.username && errors.username.type === "required" && (
            <p className='text-gray-900 font-bold'>User Name is required</p>
          )}
        </div>
        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email Address
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-[#B88E2F]"
            required
          />
          {errors.email && errors.email.type === "required" && (
            <p className='text-gray-900 font-bold'>Email is required</p>
          )}
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#B88E2F] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#B88E2F] transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SimpleForm;
