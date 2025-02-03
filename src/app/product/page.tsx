import { ProductList } from "@/components/product-list"


async function getProducts() {
  // Replace with your API call
  const res = await fetch("https://template6-six.vercel.app/api/products")
  const products = await res.json()
  return products
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="container py-8">
      <ProductList products={products} />
    </div>
  )
}

















