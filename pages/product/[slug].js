import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
        <Wrapper>
            <div>
             {/* Left column start */}
             <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">Left</div>
            {/* Left column end */}

            {/* Right column start */}
            <div className="flex-[1] py-3">Right</div>
            {/* Right column end */}
            </div>
           
        </Wrapper>
    </div>
  )
}

export default ProductDetails