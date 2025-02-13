"use client";
import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import Shopbottombar from "@/components/shopBottomBar/Shopbottombar";
import { sendEmail } from "@/services/emailServices";


const ContactForm: React.FC = () => {
  return <ContactUs />;
};

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Shumaila Gulfam",
      from_name: name,
      from_email: email,
      message: message
    };

    try {
      await sendEmail(templateParams);
      alert("Email sent successfully");
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('EmailJs Error', error);
      alert("Failed to send email");
    }
  };

  return (
    <div>
      <div className="w-[650px] mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name & Email Fields */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="flex-1 p-4 text-white bg-[#B88E2F] rounded-[8px] placeholder-white outline-none"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Your email"
              className="flex-1 p-4 text-white bg-[#B88E2F] rounded-lg placeholder-white outline-none"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Subject Field */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 text-white bg-[#B88E2F] rounded-lg placeholder-white outline-none"
          />

          {/* Message Field */}
          <textarea
            placeholder="Your message"
            className="w-full h-[224px] p-4 text-white bg-[#B88E2F] rounded-lg placeholder-white outline-none"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          {/* Submit Button */}
          <input
            type="submit"
            className="w-[178px] h-[52px] bg-[#B88E2F] text-white rounded-lg cursor-pointer hover:bg-[rgb(218,173,67)] transition"
            value="Send message"
          />
        </form>
      </div>
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
                    H# 363 Street 6/A Kashmir Colony, Karachi
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 md:w-8 md:h-8" />
                <div>
                  <h3 className="font-medium text-lg md:text-xl mb-2">Phone</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Mobile: +92 336 2059152
                    <br />
                    
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
