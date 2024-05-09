"use client"
import React, { useState ,useContext,useEffect,useRef } from 'react';
import Link from 'next/link';
import "./Header.css";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { useTranslations } from "next-intl";
import { useParams } from 'next/navigation';



const Dropdown = () => {
  const text = useTranslations("Home");
const locale = useParams();
    const [isActive, setIsActive] = useState(false);
    const { categories, setCategories } = useContext(Context);
    const dropdownRef = useRef(null);

  
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsActive(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('click', handleClickOutside);

        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);
    const getCategories = () => {
      fetchDataFromApi("/api/categories?populate=*").then((res) => {
        console.log("cat-data",res)
        setCategories(res);
      });
      };
      useEffect(() => {
        getCategories();
        }, []);
      
    return (

        <div className="dropdown" ref={dropdownRef}>
            <div
                onClick={(e) => {
                    setIsActive(!isActive);
                }}
                className="dropdown-btn">
{text("Dropdown-link")}
                {/* {selected} */}
                <span
                    className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
                />
            </div>
            <div
                className="dropdown-content"
                style={{ display: isActive ? "block" : "none" }}
            >
              
                   {categories?.data?.map((item, index) => (
                          
                          <Link href={`/${locale.locale}/Category/${item?.attributes.title}`} 
                          className='drop-Link'
                       
                          >
                <div
                key={index}
                    onClick={(e) => {
                        // setIsSelected(e.target.textContent);
                        setIsActive(!isActive);
                    }}
                    className="item"
                >
                  
                   
                    {/* <Link href={`/${locale.locale}/Category/${item?.attributes.title}`} 
                     className='drop-Link'
                  
                     > */}
                                        {item?.attributes.title} / {item?.attributes.urduTitle}
                                    {/* </Link> */}
                                 
                </div>
                </Link>
                   ))}
            
            </div>
        </div>
    )
}

export default Dropdown;
