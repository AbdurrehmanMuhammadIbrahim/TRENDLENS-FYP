"use client";
import React, { useState ,useContext,useEffect,useRef } from 'react';
import "./footer.css"
// import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "@fortawesome/free-solid-svg-icons";
import FtrImg from "../../assets/img1.jpeg"
import Image from 'next/image';
import Link from 'next/link';
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { useTranslations } from "next-intl";
import { useParams } from 'next/navigation';
// import Payment from "../../";


const Footer = () => {
    const { categories, setCategories } = useContext(Context);
    const t = useTranslations("Home");
    const locale = useParams();

        // const fontSize = i18n.lang === 'ur' ? '20px' : '16px';
    
        const navItems = [
            { text: `${t("Home-link")}`, href: '/' },
            // { text: `${t("Dropdown-link")}`, isDropdown: true }, 
            { text: `${t("Articles-link")}`, href: '/Articles/AllArticles' },
            { text: `${t("About-link")}`, href: '/About' },
            { text: `${t("Contact-link")}`, href: '/Contact' },
            { text: `${t("Add-Article-link")}`, href: '/AddArticle' },
        
        ];
        
    

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    {/* <div className="title">About</div> */}
                    <div className="ftr-text">
                        {/* Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo. */}
                        <Image src={FtrImg} width={100} alt="footerImg"/>
                    </div>
                </div>
                <div className="col">
                    <div className="ft-title">{t("Contact-link")}</div>
                    <div className="c-item">
                        {/* <FaLocationArrow /> */}
                        <div className="ftr-text">
                        {t("address")}
                        </div>
                    </div>
                    <div className="c-item">
                        {/* <FaMobileAlt /> */}
                        <div className="ftr-text">Phone: 0471 272 0261</div>
                    </div>
                    <div className="c-item">
                        {/* <FaEnvelope /> */}
                        <div className="ftr-text">Email: BC200405344@vu.edu.pk</div>
                    </div>
                </div>
                <div className="col">
                <div className="ft-title">{t("Dropdown-link")}</div>

                {categories?.data?.map((item, index) => (
     <Link style={{textDecoration:"none"}} href={`${locale.locale}/Category/${item?.attributes.title}`}>


                    <div className="ftr-text"> 
                    
               {item?.attributes.title} / {item?.attributes.urduTitle}

                    </div>
                    </Link>

                ))}
                </div>
                <div className="col">
          <div className="ft-title">Pages</div>

                {navItems.map((navItem, index) => (
                    <div className="ftr-text">
                     <Link href={navItem.href} className='header-Link' >
                            {navItem.text}
                        </Link>
                    
                    </div>
                //    <span className="ftr-text">About</span>
                //     <span className="ftr-text">Privacy Policy</span>
                //     <span className="ftr-text">Returns</span>
                //     <span className="ftr-text">Terms & Conditions</span>
                //     <span className="ftr-text">Contact Us</span> 
                ))}
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="ftr-text">
                        Mindmap 2023 CREATED BY<br/>BC200405344@vu.edu.pk
                        
                    </span>
                    {/* <img src={Payment} /> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;