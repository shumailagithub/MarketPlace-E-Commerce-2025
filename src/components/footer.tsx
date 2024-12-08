export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-black/[0.17] py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-poppins">Funiro.</h2>
            <p className="text-gray-500 font-poppins">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-gray-500 font-poppins font-medium">Links</h3>
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-black font-poppins font-medium hover:text-gray-700"
              >
                Home
              </a>
              <a
                href="#"
                className="text-black font-poppins font-medium hover:text-gray-700"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-black font-poppins font-medium hover:text-gray-700"
              >
                About
              </a>
              <a
                href="#"
                className="text-black font-poppins font-medium hover:text-gray-700"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h3 className="text-gray-500 font-poppins font-medium">Help</h3>
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-black font-poppins font-medium hover:text-gray-700"
              >
                Payment Options
              </a>
              <a
                href="#"
                className="text-black font-poppins font-medium hover:text-gray-700"
              >
                Returns
              </a>
              <a
                href="#"
                className="text-black font-poppins font-medium hover:text-gray-700"
              >
                Privacy Policies
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-gray-500 font-poppins font-medium">
              Newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full border-b border-black pb-1 text-sm font-poppins text-gray-500 focus:outline-none"
              />
              <button className="w-full sm:w-auto border-b border-black pb-1 text-sm font-poppins font-medium">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#D9D9D9] pt-6 text-center">
          <p className="text-black font-poppins">
            2023 Funiro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
