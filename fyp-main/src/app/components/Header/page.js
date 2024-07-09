"use client"; // This is a client component 👈🏽
import { useEffect, useState, useContext } from "react";
import { FaSearchPlus } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useParams } from "next/navigation";
import "./Header.css";
import Sidebar from "./Sidebar/Sidebar"
import Link from "next/link"
import Dropdown from "./Dropdown";
import FtrImg from "../../assets/img1.jpeg"
import Image from 'next/image';
import Search from "../Search/page";
import { useTranslations } from "next-intl";
import Cookies from 'js-cookie';



const Header = () => {
    const t = useTranslations("Home");
    const locale = useParams();

    const navItems = [
        { text: `${t("Home-link")}`, href: '/' },
        { text: `${t("Dropdown-link")}`, isDropdown: true },
        { text: `${t("Articles-link")}`, href: '/Articles/AllArticles' },
        { text: `${t("About-link")}`, href: '/About' },
        { text: `${t("Contact-link")}`, href: '/Contact' },
        { text: `${t("Add-Article-link")}`, href: '/AddArticle' }
    ];




    const [scrolled, setScrolled] = useState(false);
    const [showsidebar, setShowsidebar] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [toggle, setToggle] = useState("");

    const [label, setLabel] = useState();
    const [flex, setFlex] = useState()

    useEffect(() => {
        if (locale.locale === 'ur') {
            setFlex({ flexDirection: "row-reverse" })
            setLabel({ fontSize: "18pt", gap: 30, fontFamily: 'Jameel Noori Nastaleeq', margin: "2px auto" })
        }
       
    }, [locale]);

    const toggleOn = () => {
        setToggle(toggle => !toggle)

    }

    const getLanguageLink = () => {
        if (toggle) {
            return '/en' // English link

        }
        else {
            return '/ur'; // Urdu link
        }
    };


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

                <div className="trend-head" >
                    {t("title")}

                </div>

                <div className="header-content" style={label}>

                    <div className="center" >
                        <ul className="left" style={label}>
                            {navItems.map((navItem, index) => (
                                <li key={index} style={label}>
                                    {navItem.isDropdown ? (
                                        <Dropdown />
                                    ) : (
                                        <Link href={navItem.href} className='header-Link' >
                                            {navItem.text}
                                        </Link>
                                    )}

                                </li>
                            ))}
                            <li onClick={() => setSearchModal(true)}> <FaSearchPlus size={16} /></li>

                            <li ><Link href={getLanguageLink()}>

                                <button onClick={toggleOn} className={`toggle ${toggle ? 'on' : 'off'}`}  >
                                    {toggle ? 'English' : 'اردو'}
                                    <span className="pin" />
                                </button>



                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hd-right" >

                        <span >
                            <Link href={getLanguageLink()}  >

                                <button style={{ marginRight: "10pt" }} onClick={toggleOn} className={`toggle ${toggle ? 'on' : 'off'}`}  >
                                    {toggle ? 'English' : 'اردو'}
                                    <span className="pin" />
                                </button>



                            </Link>
                        </span>
                        <span style={{ marginRight: 20 }} onClick={() => setSearchModal(true)}> <FaSearchPlus size={16} /></span>

                        <span
                            className="menu-icon" style={label}
                            onClick={() => setShowsidebar(true)}

                        ><MdOutlineMenuOpen size={24} />
                         
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
