import React from 'react'
import Link from "next/link";
import {BsChevronDown} from "react-icons/bs"

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];
const MenuMobile = ({showCatMenu,setShowCatMenu,setMobileMenu}) => {
  return (
   <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
       {data.map((item)=>{
        return (
            <React.Fragment key={item.id}>
                {
                  !!item?.subMenu ? <li className="cursor-pointer flex items-center gap-2 relative"
                  onMouseEnter={()=> setShowCatMenu(true)}
                  onMouseLeave={()=> setShowCatMenu(false)}
                  >
                    <div>
                    {
                        item.name
                    }
                    <BsChevronDown size={14}/>
                    </div>
                   
                    {showCatMenu && (
                        <ul className="bg-white absolute top-6 left-0 min-w-[250px ] px-1 py-1 text-black shadow-lg">
                            {subMenuData.map((submenu)=>{
                                return (
                                    <Link key={submenu.id} href="/"  onClick={() => {
                                        setShowCatMenu(
                                            false
                                        );
                                        setMobileMenu(
                                            false
                                        );
                                    }}>
                                        <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                            {submenu.name}
                                            <span className="opacity-50 text-sm">78</span>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    )}
                  </li> : (
                       <li className="cursor-pointer">
                        <Link href={item?.url} onClick={()=> setMobileMenu(false)}>
                        {item.name}
                        </Link>
                       </li>
                  )  
                }
            </React.Fragment>
        )
       })}
   </ul>
  )
}

export default MenuMobile