"use client"
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ClerkProvider, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();


  const isStudio = pathname.startsWith("/studio");
  const isHome = pathname === "/";
  const isAdmin = pathname.startsWith("/admin");
  const isOrders = pathname.startsWith("/orders");
  const isCustomers = pathname.startsWith("/customers");
  const isStatistics = pathname.startsWith("/product-data");
  const isReviews = pathname.startsWith("/reviews");

  const studioAndHome = !isStudio && !isHome && !isAdmin && !isOrders && !isCustomers && !isStatistics && !isReviews

  return (
  
    <ClerkProvider>
      <html lang="en">
        <body 
        className="antialiased">
        {studioAndHome && <Navbar />}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
          
          </SignedIn>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
