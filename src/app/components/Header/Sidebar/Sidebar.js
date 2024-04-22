"use client"
import React, { useState,useEffect } from "react";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import Dropdown from "../Dropdown";
// import { BsCartX } from "react-icons/bs";
// import { Context } from "../../utils/context";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
// import CartItem from "./CartItem/CartItem";
// import { loadStripe } from "@stripe/stripe-js";
// import { makePaymentRequest } from "../../utils/api";

import "./Sidebar.css";
// import CartItem from "./CartItems/CartItem";
// const navItems = [
//     { text: 'Home', href: '/' },
//     { text: 'Dropdown', isDropdown: true }, 
//     { text: 'Articles', href: '/Articles/AllArticles' },
//     { text: 'About', href: '/About' },
//     { text: 'Contact Us', href: '/Contact' },

// ];



const sidebar = ({ setShowsidebar }) => {
    const t = useTranslations("Home");
    const [label, setLabel] = useState();

    const locale =useParams()
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
                    {/* <span className="heading">Shopping sidebar</span> */}
                    <span
                        className="close-btn"
                    >
                        <MdClose size={28}
                            onClick={() => setShowsidebar(false)} />
                        {/* <span className="textCT" onClick={() => setShowsidebar(false)}>close</span> */}
                    </span>
                </div>
                <div className="sd-list">
                    <div className="sd-li" >

                       
                  
              {/* {navItems.map((navItem, index) => (
                 <button style={{padding:10,backgroundColor:"rgba(75,137,201,1)",borderColor:"cadetblue",borderRadius:5,width:"95vw",fontSize:"25px",fontWeight:700,color:" rgba(7,41,77,1)",textAlign:"left",textTransform:"uppercase",marginBottom:10}}>
                 {navItem.text} 
                 

                    </button>
             ))} */}

{navItems.map((navItem, index) => (
                <button key={index}   style={{padding:10,backgroundColor:"rgba(75,137,201,1)",borderColor:"cadetblue",borderRadius:5,width:"95vw",fontSize:"25px",fontWeight:700,color:" rgba(7,41,77,1)",textAlign:"left",textTransform:"capitalize",marginBottom:10}}  >
                    {navItem.isDropdown ? (
                        <Dropdown/>
                    ) : (
                        <Link href={navItem.href}  className='sidebar-link' onClick={() => setShowsidebar(false)}>
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











{/* <ul disablePadding className='Li_Item'
                  // component={Link} 
                  component="a"
                  // to={`/mindmaps/${index + 1}`}
href={`/mindmaps/${index + 1}`}
// href="/mindmaps/10"

                //   secondaryAction={
                //     <IconButton edge="end" >
                //       <ErrorOutlineIcon />
                //     </IconButton>
                //   }
                  >
                  {/* <button >
                    {/* <ListItemIcon sx={{ marginLeft: 2 }}>
                      <KeyboardArrowLeftIcon />
                    </ListItemIcon > */}
                    {/* <text primary={`surah no ${index + 1}`} >jghjgjghjghj{index + 1}</text> */}
                  {/* </button> */} 
                // </ul> */}