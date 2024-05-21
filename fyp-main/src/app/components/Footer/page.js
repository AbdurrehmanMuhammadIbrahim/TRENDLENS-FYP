"use client";
import React, { useState, useContext, useEffect, useRef } from 'react';
import "./footer.css"
import FtrImg from "../../assets/img1.jpeg"
import Image from 'next/image';
import Link from 'next/link';
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { useTranslations } from "next-intl";
import { useParams } from 'next/navigation';


const Footer = () => {
    const { categories, setCategories } = useContext(Context);
    const t = useTranslations("Home");
    const locale = useParams();

    const navItems = [
        { text: `${t("Home-link")}`, href: '/' },
        { text: `${t("Articles-link")}`, href: '/Articles/AllArticles' },
        { text: `${t("About-link")}`, href: '/About' },
        { text: `${t("Contact-link")}`, href: '/Contact' },
        { text: `${t("Add-Article-link")}`, href: '/AddArticle' },

    ];



    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="ftr-text">
                    
                        <Image src={FtrImg} width={100} alt="footerImg" />
                    </div>
                </div>
                <div className="col">
                    <div className="ft-title">{t("Contact-link")}</div>
                    <div className="c-item">
                        <div className="ftr-text">
                            {t("address")}
                        </div>
                    </div>
                    <div className="c-item">
                        <div className="ftr-text">Phone: 0471 272 0261</div>
                    </div>
                    <div className="c-item">
                        <div className="ftr-text">Email: BC200405344@vu.edu.pk</div>
                    </div>
                </div>
                <div className="col">
                    <div className="ft-title">{t("Dropdown-link")}</div>

                    {categories?.data?.map((item, index) => (
                        <Link style={{ textDecoration: "none" }} href={`/${locale.locale}/Category/${item?.attributes.title}`}>

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
                    ))}
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="ftr-text">
                        TRENLENS <br />Created BY  BC200405344@vu.edu.pk

                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;