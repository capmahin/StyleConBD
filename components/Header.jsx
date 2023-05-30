import React,{useState,useEffect} from 'react'

const Header = () => {
  const [mobileMenu,setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  return (
    <header className={`w-full h-[50px]`}>Header</header>
  )
}

export default Header