import Link from "next/link"
import Image from 'next/image'
import { Search, Heart, ShoppingCart, User } from 'lucide-react'

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Furniro Logo"
            width={50}
            height={32}
          />
          <span className="text-xl font-bold">Furniro</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-12">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <Link href="/shop" className="font-medium">
            Shop
          </Link>
          <Link href="/about" className="font-medium">
            About
          </Link>
          <Link href="/contact" className="font-medium">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  )
}