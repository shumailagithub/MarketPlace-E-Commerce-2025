"use client";

import { ShoppingCart } from 'lucide-react';
import Swal from 'sweetalert2';
import { Product } from "@/types/product"
import { addToCart } from '@/app/actions/actions';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();

    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000
    });

    addToCart(product);
  };

  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-110 transition-transform duration-300 ease-in-out px-4 py-2 rounded-md"
      onClick={handleAddToCart}
    >
      <ShoppingCart className="inline-block mr-2" />
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
