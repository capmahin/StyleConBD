import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
        <Carousel>
                <div>
                    <img src="/slide-1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/slide-2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/slide-3.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default HeroBanner