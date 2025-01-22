"use server";

import { client } from "@/sanity/lib/client";

async function uploadImageToSanity(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
    const blob = await response.blob();
    const asset = await client.assets.upload("image", blob);
    // console.log("Uploaded image:🤣", asset);

    return asset;
  } catch (error) {
    console.error("Image upload failed:", error); //aik new folder create karay is project ko close kary ok is ko cmd mein open karay  ok
    throw error;
  }
}

export async function fetchData() {
  try {
    const response = await fetch("https://template6-six.vercel.app/api/products");
    console.log("🤓 Response status:", response.status);

    if (!response.ok) throw new Error(`Failed to fetch products: ${response.statusText}`);
    const products = await response.json();



    console.log("Fetched products:", products);

    // Upload images concurrently
    const uploadPromises = products.map(async (product: any) => {
      if (!product.image) {
        console.warn(`Skipping product with missing image: ${product.id}`);
        return;
      }

      const imageAsset = await uploadImageToSanity(product.image);

    //   await client.createOrReplace(sanityProduct);

    [
        {
          "_id": `product-${product.id}`,
          "_type": "product",
          "name": product.title,
          "price": product.price,
          "discountPercentage": product.dicountPercentage || 0,
          "tags": product.category ? [product.category] : [],
          "image": {
            "_type": "image",
            "asset": {
              "_type": "reference",
              "_ref": imageAsset._id,
            }
          },
          "description": product.description,
        //   "rating": product.rating?.rate || 0,
        //   "ratingCount": product.rating?.count || 0,
        }
      ]


    });

    await Promise.all(uploadPromises);
  } catch (error) {
    console.error("Data fetching failed:", error);
    throw error;
  }
}
