import React,{useState,useEffect} from 'react'
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";


import {IoMdHeartEmpty} from "react-icons/io";
import {BsCart} from "react-icons/bs";
import {BiMenuAltLeft} from "react-icons/bi";
import { VscChromeClose} from "react-icons/vsc";


const Header = () => {
  const [mobileMenu,setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 top-0 transition-transform duration-300 ${show}`}>
      
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
        <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}/>
      </Wrapper>

    </header>
  )
}

export default Header