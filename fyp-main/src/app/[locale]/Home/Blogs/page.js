"use client"
import React, { useState, useEffect, } from 'react'
import img1 from "../../../assets/img2.jpg"
import "./Blogs.css"
import Image from 'next/image'
import { useParams } from 'next/navigation';
import { fetchDataFromApi } from "../../../utils/api";
import { Context } from "../../../utils/context";
import useFetch from "../../../hooks/useFetch ";
import Link from 'next/link'

export default function Blogs() {

    const locale = useParams();



    const { data } = useFetch(
        `/api/articles?populate=*&locale=${locale.locale}&pagination[start]=0&pagination[limit]=4&sort=createdAt:desc`
    )
    console.log("blg-data", data)

    const [label, setLabel] = useState();
    useEffect(() => {
        if (locale.locale === 'ur') {
            setLabel({ textAlign: "right", fontFamily: "Jameel Noori Nastaleeq", fontSize: "18pt", wordSpacing: "3pt" })
        }
        else if (locale.locale === 'en') {
            setLabel({ textAlign: "left", fontFamily: "Garamond", fontSize: "16pt" })
        }
    }, [locale]);
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    return (
        <div style={{ maxWidth: 1340, margin: "50pt auto", padding: " 0 20px" }}>

            <div className='blog-head '>

                <div className='latest-Blog'>
                    Latest Articles
                </div>
                <div className='bg-title'>
                    From the Articles
                </div>


            </div>



            <div className='Blogs-main' style={label}>

                <div className='left-Bg'>
                    <Link style={{ textDecoration: "none", color: "black" }} href={`/${locale.locale}/Articles/${data?.data[0]?.attributes?.slug}`}>

                        <div className='Bg-Img'>
                            <img
                                src={
                                    process.env.NEXT_PUBLIC_API_URL +
                                    data?.data[0]?.attributes?.image?.data?.attributes?.url
                                }
                            />
                        </div>

                        <div>
                            <h2 >

                                {truncateText(`${data?.data[0].attributes?.title}`, 80)}
                            </h2>
                        </div>
                        <div className='Bg-para' >
                            {truncateText(`${data?.data[0].attributes.desc}`, 140)}
                        </div>

                    </Link>

                </div>
                <div className='right-Bg'>


                    {data?.data.slice(1)?.map((item, index) => (
                        <Link style={{ textDecoration: "none", color: "black" }} href={`/${locale.locale}/Articles/${item.attributes?.slug}`}>

                            <div className='Blog-content' key={index}>

                                <div className='Blog-img'>

                                    <img alt="blogimg"
                                        src={
                                            process.env.NEXT_PUBLIC_API_URL +
                                            item?.attributes?.image?.data?.attributes?.url
                                        }

                                    />

                                </div>
                                <div className='blog-text'>
                                    <h2 className='title-Blog'>

                                        {truncateText(`${item?.attributes.title}`, 70)}
                                    </h2>
                                    <p>
                                        {truncateText(`${item?.attributes.desc}`, 140)}
                                    </p>
                                </div>

                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    )
}
