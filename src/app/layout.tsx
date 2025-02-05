import {
  ClerkProvider,
} from '@clerk/nextjs';
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";




export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
    <html lang="en">
      <body>
      <Navbar />

        {children}
      
        <Footer />
      </body>
    </html>
  </ClerkProvider>
  );
}
