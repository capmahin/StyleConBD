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
                       {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* size start */}
                            <div className="grid grid-cols-3 gap-2">
                             <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                 UK 6
                             </div>
                             <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                 UK 6.5
                             </div>
                             <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                 UK 7
                             </div>
                             <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                 UK 7.5
                             </div>
                             <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                 UK 8
                             </div>
                             <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                 UK 8.5
                             </div>
                             <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                 UK 9
                             </div>
                             <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                 UK 9.5
                             </div>
                             <div className="border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50">
                                 UK 10
                             </div>
                             <div className="border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50">
                                 UK 10.5
                             </div>
                             <div className="border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50">
                                 UK 11
                             </div>
                            </div>
                            {/* size end */}
                            <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>
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