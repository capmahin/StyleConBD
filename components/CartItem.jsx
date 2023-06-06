// import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
        {/* IMAGE START */}
        <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <img src="product-1.webp"  />
            </div>
            {/* IMAGE END */}

            <div className="w-full flex flex-col">

                <div className="flex flex-col md:flex-row justify-between">
                 {/* PRODUCT TITLE */}
                 <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        Jordan Retro 6 6
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        Men&apos;s Golf Shoes
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CartItem