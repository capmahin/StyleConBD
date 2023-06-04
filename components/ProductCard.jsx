import React from 'react'
import Image from "next/image";
import Link from "next/link";


const ProductCard = () => {
  return (
    <Link href="/product/1">
      <img className="w-full" src="/product-1.webp" alt="" />
    </Link>
  )
}

export default ProductCard