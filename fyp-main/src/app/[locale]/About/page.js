"use client";
import React, { useEffect, useContext, useState } from "react";
import "./about.css"
import HeroBanner from "../../components/HeroBanner/page";
import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";
import Link from "next/link";
import Header from "../../components/Header/page";
import { useParams } from 'next/navigation'


export default function About() {
  const { about, setAbout } = useContext(Context);
  const locale = useParams()
  const [label, setLabel] = useState();
  useEffect(() => {
    getAbout();

    if (locale.locale === 'ur') {
      setLabel({ textAlign: "right", fontFamily: "Jameel Noori Nastaleeq", fontSize: "18pt", wordSpacing: "3pt" })
    }
    else if (locale.locale === 'en') {
      setLabel({ textAlign: "left", fontFamily: "Garamond", fontSize: "16pt" })
    }

  }, [locale]);


  const getAbout = () => {
    fetchDataFromApi(`/api/abouts?populate=*&locale=${locale.locale}`).then((res) => {
      setAbout(res);
    });
  };

  return (
    <div>
      <HeroBanner name="About" />
      <div>
        <div className="about-container"  >

        
          {about?.data?.map((item) => (
            <div
              key={item.id}
              className='about-main' >

              <div className='about-left' style={label}>
                <h1>
                  {item.attributes.title}
                </h1>
                <p>

                  {item.attributes.text}
                </p>

                <Link style={{ textDecoration: "none" }} href="/">
                  <div className="about-cta">Explore More</div>
                </Link>


              </div>

              <div className='about-right'>
                <img src={process.env.NEXT_PUBLIC_API_URL +
                  item.attributes.image.data?.attributes.url
                } />

              </div>
            </div>
          ))}
        </div>
      </div>




    </div>
  )
}
