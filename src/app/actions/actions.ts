import type { Product } from "@/types/product"

export function getCartItems(): Product[] {
  try {
    const cartItems = localStorage.getItem("cartItems")
    return cartItems ? JSON.parse(cartItems) : []
  } catch (error) {
    console.error("Error parsing cart items:", error)
    return []
  }
}

export function removeFromCart(id: string): void {
  try {
    const cartItems = getCartItems()
    const updatedCart = cartItems.filter((item) => item.id !== id)
    localStorage.setItem("cartItems", JSON.stringify(updatedCart))
  } catch (error) {
    console.error("Error removing item from cart:", error)
    throw error
  }
}

export function updateCartQuantity(id: string, quantity: number): void {
  try {
    const cartItems = getCartItems()
    const updatedCart = cartItems.map((item) => (item.id === id ? { ...item, inventory: quantity } : item))
    localStorage.setItem("cartItems", JSON.stringify(updatedCart))
  } catch (error) {
    console.error("Error updating cart quantity:", error)
    throw error
  }
}

export function addToCart(product: Product): void {
  try {
    const cartItems = getCartItems()
    const existingItem = cartItems.find((item) => item.id === product.id)
    if (existingItem) {
      updateCartQuantity(product.id, existingItem.inventory + 1)
    } else {
      const updatedCart = [...cartItems, { ...product, inventory: 1 }]
      localStorage.setItem("cartItems", JSON.stringify(updatedCart))
    }
  } catch (error) {
    console.error("Error adding item to cart:", error)
    throw error
  }
}























