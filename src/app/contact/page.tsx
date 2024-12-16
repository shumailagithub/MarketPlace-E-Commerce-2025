import Shopbottombar from "@/components/shopBottomBar/Shopbottombar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Contact</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="#" className="hover:underline">
              Home
            </a>
            <span>
              <Image src={"/rightA.png"} width={20} height={20} alt="arrow" />
            </span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 md:mb-16">
            For more information about our products & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                  <h3 className="font-medium text-lg md:text-xl mb-2">Address</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                  <h3 className="font-medium text-lg md:text-xl mb-2">Phone</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Mobile: +(84) 546-6789
                    <br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                  <h3 className="font-medium text-lg md:text-xl mb-2">Working Time</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Monday-Friday: 9:00 - 22:00
                    <br />
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="md:col-span-2 space-y-6">
              <div>
                <label className="font-medium mb-2 block">Your name</label>
                <Input placeholder="Abc" />
              </div>
              <div>
                <label className="font-medium mb-2 block">Email address</label>
                <Input placeholder="Abc@def.com" type="email" />
              </div>
              <div>
                <label className="font-medium mb-2 block">Subject</label>
                <Input placeholder="This is optional" />
              </div>
              <div>
                <label className="font-medium mb-2 block">Message</label>
                <Textarea placeholder="Hi! I'd like to ask about..." className="min-h-[120px]" />
              </div>
              <Button className="w-full md:w-auto bg-[#B88E2F] hover:bg-[#B88E2F]/90">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <Shopbottombar />
    </div>
  );
}
