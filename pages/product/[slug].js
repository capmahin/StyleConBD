import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
        <Wrapper>
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
             {/* Left column start */}
             <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                <ProductDetailsCarousel/>
             </div>
            {/* Left column end */}

            {/* Right column start */}
            <div className="flex-[1] py-3">
                {/* PRODUCT TITLE */}
                <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Jordan Retro 6 6
                        </div>
                         {/* PRODUCT SUBTITLE */}
                         <div className="text-lg font-semibold mb-5">
                           Men&apos;s Golf Shoes
                        </div>

                        {/* Product Price */}
                        <div className="text-lg font-semibold">
                           MRP: $ 19 695.00
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>
                        {/* product size range start */}
                        <div className="mb-10">

                        </div>
                         {/* product size range end */}
            </div>
            {/* Right column end */}
            </div>
           
        </Wrapper>
    </div>
  )
}

export default ProductDetails