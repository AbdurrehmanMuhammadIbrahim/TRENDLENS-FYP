"use client"
import React from "react";
// import { useNavigate } from "react-router-dom";
import "./article.css";
import Image from "next/image";
import img1 from "../../assets/img1.jpeg"
import Link from "next/link";

const Article = ({ data, title }) => {
    // const navigate = useNavigate();
    // window.location.reload(false);

    const truncateText = (text, maxLength) => {
        if (!text) {
            return ''; // Return an empty string if text is null or undefined
        }
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    };


    return (
        <div
            className="PRproduct-card"
        // onClick={() => navigate("/product/" + id)}
        >
            <div className="PRthumbnail">

                <img 
                    src={
                        process.env.NEXT_PUBLIC_API_URL +
                        data?.image?.data?.attributes.url
                    }

                />
                  

            </div>
            <div className="arc-card-title">
            {/* { data?.title} */}

            {truncateText(data?.title, 40)}
             
            </div>
          <Link style={{textDecoration:"none"}} href={`/Articles/${data?.title}`}>

          <div className="arc_btn">Read More</div>
          </Link>
            
        </div>
    );
};

export default Article;