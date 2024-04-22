"use client";
import React, { useEffect, useContext } from "react";
// import AppBar from "../Appbar"
import "./about.css"
import HeroBanner from "../../components/HeroBanner/page";
// import Container from '@mui/material/Container';
// import img1 from "../../assets/social-media-blog-concept-futuristic-icon-design-graphics-hand-with-smartphone_102583-6104.avif"
import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";
import Link from "next/link";
import Header from "../../components/Header/page";


export default function About() {
    const {about,setAbout} = useContext(Context);

    useEffect(() => {
        getAbout();
        
        }, []);
        
        const getAbout = () => {
        fetchDataFromApi("/api/abouts?populate=*").then((res) => {
          setAbout(res);
          console.log("GFDFG",res)
        });
        };
        
    return (
        <div>
{/* <Header/> */}
<HeroBanner name="About"/>
            <div>
                <div className="about-container"  >
                    
                {/* <div className='about-head'>
                            About Us
                        </div> */}
                        {about?.data?.map((item) => (
                    <div  
                    key={item.id}
                     className='about-main'>
                        
                        <div className='about-left'>
                            <h1>
                            {item.attributes.title}
                            </h1>
                            <p>
                            
                            {item.attributes.text}     
                            </p>
                        
                              <Link style={{textDecoration:"none"}} href="/">
                              <div className="about-cta">Explore More</div>
                              </Link>

                            
                        </div>

                        <div className='about-right'>
<img src={process.env.NEXT_PUBLIC_API_URL +
                            item.attributes.image.data?.attributes.url
                        }/>

                        </div>
                    </div>
                      ))} 
                </div>
            </div>




        </div>
    )
}
