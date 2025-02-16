"use client"
import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import Dropdown from "../Dropdown";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import "./Sidebar.css";



const sidebar = ({ setShowsidebar }) => {
    const t = useTranslations("Home");
    const [label, setLabel] = useState();

    const locale = useParams()

    const navItems = [
        { text: `${t("Home-link")}`, href: '/' },
        { text: `${t("Dropdown-link")}`, isDropdown: true },
        { text: `${t("Articles-link")}`, href: '/Articles/AllArticles' },
        { text: `${t("About-link")}`, href: '/About' },
        { text: `${t("Contact-link")}`, href: '/Contact' },
        { text: `${t("Add-Article-link")}`, href: '/AddArticle' },

    ];


    return (
        <div className="sidebar-panel">
            <div
                className="opac-layer"
            ></div>
            <div className="sidebar-content">
                <div className="sidebar-header">
                    <span
                        className="close-btn"
                    >
                        <MdClose size={28}
                            onClick={() => setShowsidebar(false)} />
                    </span>
                </div>
                <div className="sd-list">
                    <div className="sd-li" >

                        {navItems.map((navItem, index) => (
                            <button key={index} style={{ padding: 10, backgroundColor: "rgba(75,137,201,1)", borderColor: "cadetblue", borderRadius: 5, width: "95vw", fontSize: "25px", fontWeight: 700, color: " rgba(7,41,77,1)", textAlign: "left", textTransform: "capitalize", marginBottom: 10 }}  >
                                {navItem.isDropdown ? (
                                    <Dropdown />
                                ) : (
                                    <Link href={navItem.href} className='sidebar-link' onClick={() => setShowsidebar(false)}>
                                        {navItem.text}

                                    </Link>
                                )}

                            </button>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default sidebar;