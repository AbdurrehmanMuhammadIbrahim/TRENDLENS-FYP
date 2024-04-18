"use client"; // This is a client component 👈🏽
import { useEffect, useState ,useContext} from "react";

import { FaSearchPlus  } from "react-icons/fa";
import { MdOutlineMenuOpen  } from "react-icons/md";

import "./Header.css";
import Sidebar from "./Sidebar/Sidebar"
import Link from "next/link"
import Dropdown from "./Dropdown";
import FtrImg from "../../assets/img1.jpeg"
import Image from 'next/image';
import Search from "../Search/page";






const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showsidebar, setShowsidebar] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [toggle, setToggle] = useState(true);

    const toggleOn = () => {
        setToggle(toggle => !toggle)
        console.log("toggle click")
    }



    const navItems = [
        { text: 'Home', href: '/' },
        { text: 'Dropdown', isDropdown: true }, 
        { text: 'Articles', href: '/Articles/AllArticles' },
        { text: 'About', href: '/About' },
        { text: 'Contact Us', href: '/Contact' },
        // { text: 'Privacy&policy', href: '/privacy' },
    
    ];
    
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >

<div className="trend-head">
{/* <Image src={FtrImg} width={50} alt="headerImg"/> */}
TREND-LENS
</div>
                
                <div className="header-content">
             
                    <div className="center" >
                        <ul className="left">
                        {navItems.map((navItem, index) => (
                <li key={index}>
                    {navItem.isDropdown ? (
                        <Dropdown />
                    ) : (
                        <Link href={navItem.href} className='header-Link' >
                            {navItem.text}
                        </Link>
                    )}
                   
                </li>
            ))}
            <li  onClick={() => setSearchModal(true)}> <FaSearchPlus size={16}/></li>
            <li> <button className={`toggle ${toggle ? 'on' : 'off'}`} 
        
        
            
            onClick={toggleOn}>
           {toggle ? 'English' : 'اردو'}
      <span className="pin" />
      {/* <span></span> */}
    </button>
    </li>
                        </ul>
                    </div>
                    <div className="hd-right">

                        <span
                            className="menu-icon"
                            onClick={() => setShowsidebar(true)}
                        ><MdOutlineMenuOpen  size={24}/>
                            {/* <FaThMenuOutline /> */}
                            {/* {!!cartCount && <span>{cartCount}</span>} */}
                        </span>
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}

            {showsidebar && <Sidebar setShowsidebar={setShowsidebar} />}
        </>
    )
}

export default Header
