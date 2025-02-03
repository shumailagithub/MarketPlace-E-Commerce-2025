"use client";
import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Shopbottombar from "@/components/shopBottomBar/Shopbottombar";

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      <form className="md:col-span-2 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="font-medium mb-2 block">Your name</label>
          <Input
            name="name"
            placeholder="Abc"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="font-medium mb-2 block">Email address</label>
          <Input
            name="email"
            placeholder="Abc@def.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="font-medium mb-2 block">Subject</label>
          <Input
            name="subject"
            placeholder="This is optional"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="font-medium mb-2 block">Message</label>
          <Textarea
            name="message"
            placeholder="Hi! I'd like to ask about..."
            className="min-h-[120px]"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full md:w-auto bg-[#B88E2F] hover:bg-[#B88E2F]/90"
        >
          Submit
        </Button>
      </form>

      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-md text-center space-y-4 shadow-md max-w-md w-full mx-4">
            <h3 className="text-lg font-medium text-gray-800">Your Submission</h3>
            <div className="text-left text-gray-700">
              <p>
                <strong>Name:</strong> {formData.name}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Subject:</strong> {formData.subject || "N/A"}
              </p>
              <p>
                <strong>Message:</strong> {formData.message}
              </p>
            </div>
            <Button
              className="bg-[#B88E2F] hover:bg-[#B88E2F]/90"
              onClick={closePopup}
            >
              Coment Submitted
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 md:mb-16">
            For more information about our products & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            <ContactForm />
          </div>
        </div>
      </section>

      <Shopbottombar />
    </div>
  );
}
