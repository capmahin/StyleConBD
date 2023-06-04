import React from 'react'
import Image from "next/image";
import Link from "next/link";


const ProductCard = () => {
  return (
    <Link href="/product/1">
      <img className="w-full" src="/product-1.webp" alt="" />
      <div className="p-4 text-black/[0.9]">
      <h2 className="text-lg font-medium">Product Name</h2>
      </div>
    </Link>
  )
}

export default ProductCard