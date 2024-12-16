export default function Footer() {
    return (
      <footer className="w-full border-t border-black/[0.17] bg-white py-12 mt-[1px]">
        {/* Container for the footer */}
        <div className="container px-4 md:px-10 lg:px-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-8">
            
            {/* Company Info Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-poppins mb-4 md:mb-7">Funiro.</h2>
              <p className="text-gray-500 font-poppins">
                400 University Drive Suite 200 Coral Gables,
                <br />
                FL 33134 USA
              </p>
            </div>
  
            {/* Links Section */}
            <div className="space-y-4">
              <h3 className="text-gray-500 font-poppins font-medium mb-4 md:mb-7">Links</h3>
              <nav className="flex flex-col space-y-4 md:space-y-6">
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  Home
                </a>
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  Shop
                </a>
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  About
                </a>
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  Contact
                </a>
              </nav>
            </div>
  
            {/* Help Section */}
            <div className="space-y-4">
              <h3 className="text-gray-500 font-poppins font-medium mb-4 md:mb-7">Help</h3>
              <nav className="flex flex-col space-y-4 md:space-y-6">
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  Payment Options
                </a>
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  Returns
                </a>
                <a href="#" className="text-black font-poppins font-medium hover:text-gray-700">
                  Privacy Policies
                </a>
              </nav>
            </div>
  
            {/* Newsletter Section */}
            <div className="space-y-4">
              <h3 className="text-gray-500 font-poppins font-medium mb-4 md:mb-7">Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Email Input Field */}
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full border-b border-black pb-1 text-sm font-poppins text-gray-500 focus:outline-none"
                  />
                </div>
                {/* Subscribe Button */}
                <button className="border-b border-black pb-1 text-sm font-poppins font-medium">
                  SUBSCRIBE
                </button>
              </div>
            </div>
  
          </div>
  
          {/* Bottom Section (Copyright) */}
          <div className="border-t border-[#D9D9D9] pt-6 text-center">
            <p className="text-black font-poppins">2023 Funiro. All rights reserved</p>
          </div>
        </div>
      </footer>
    );
  }
  