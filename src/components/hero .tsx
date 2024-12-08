import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section
          className="relative h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('/mainPic.png')" }}
        >
          {/* Container with padding for responsive layout */}
          <div className="container mx-auto h-full px-4 md:px-8 flex items-center justify-center lg:justify-end">
            <div className="relative z-10 max-w-md bg-[#FFF9F3] p-6 md:p-8">
              <p className="text-xs md:text-sm uppercase tracking-wide mb-2">New Arrival</p>
              <h1 className="text-2xl md:text-4xl font-bold text-[#B88E2F] mb-4">
                Discover Our
                <br />
                New Collection
              </h1>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis.
              </p>
              <Button className="bg-[#B88E2F] hover:bg-[#A17B2A] text-white px-6 py-4 md:px-8 md:py-6">
                BUY NOW
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
