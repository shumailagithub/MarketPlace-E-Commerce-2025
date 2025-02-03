import CartPage from "@/components/AddToCartButton"
import { ProductDetail } from "@/components/product-detail"


async function getProduct(_id: string) {
  // Replace with your API call
  const res = await fetch(`https://template6-six.vercel.app/api/products`)
  const product = await res.json()
  return product
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  return (
    <div className="container py-8">
      <ProductDetail product={product} />
      <CartPage />
    </div>
  )
}

