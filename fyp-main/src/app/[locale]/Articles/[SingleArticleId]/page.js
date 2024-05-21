"use client"
import React, { useState, useEffect, useContext } from "react";
import "./SingleArticle.css"
import useFetch from "../../../hooks/useFetch ";
import { useParams } from 'next/navigation'
import RelatedArticles from "./RelatedProduct/page";
import Comments from "./Comments/page"
import { useTranslations } from "next-intl";
import axios from "axios";
import { Context } from "../../../utils/context";
import ReactMarkdown from "react-markdown"; 



export default function SingleArticle() {
  const title = useParams()
  console.log('title-sin', title)

  console.log(title.SingleArticleId, "sineeeee")

  const { data } = useFetch(`/api/articles?populate=*&[filters][slug]=${title.SingleArticleId}&locale=${title.locale}`);
  // console.log('data-sin', data)

  const article = data?.data[0]?.attributes;


  const t = useTranslations("Home");
  const [label, setLabel] = useState();


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: " ",
    articles: " ",
    locale: "",
    // Add other form fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the field name is "comment" (textarea) and the locale is Urdu
    
    if (name === ('comment', 'name') && title.locale === 'ur' && value !== '') {
      // Check if the input contains Urdu characters or spaces
      const isUrdu = /^[\u0600-\u06FF\s]+$/.test(value);
      // Only update the form state if the input is in Urdu or if it's empty
      if (isUrdu) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      // For other input fields and conditions, update the form state with any input
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)

    const formDataToSend = new FormData();
    formDataToSend.append('data', JSON.stringify({
      name: formData.name,
      email: formData.email,
      comment: formData.comment,
      articles: [data?.data[0]?.id],
      locale: title.locale

    }));
    console.log(formDataToSend)



    try {

      const response = await axios.post(`http://localhost:1337/api/comments/?populate=*&[filters][articles]=${title.SingleArticleId}&locale=${title.locale}`, formDataToSend, {

        headers: {
          'Content-Type': 'multipart/form-data'
        }


      });
      console.log('Article created successfully', response.data);
      // clear the form fields after submission
      setFormData({
        name: '',
        email: '',
        comment: '',
        articles: ''
      });


    } catch (error) {
      console.error('Error creating comment:', error);
      alert("please write right credentials", error)
    }


  };
  useEffect(() => {
    if (title.locale === 'ur') {
      setLabel({ textAlign: "right", fontFamily: "Jameel Noori Nastaleeq", fontSize: "18pt", wordSpacing: "3pt" })
    }
    else if (title.locale === 'en') {
      setLabel({ textAlign: "left", fontFamily: "Garamond", fontSize: "16pt" })
    }

  }, [title]);
  return (
    <>
      <div>


        <div className="sing-main" >
          <div style={{ borderBottom: "1px solid #8a8a8a8a", marginBottom: 50, marginTop: 20 }}>
            <div className='all-sig-blog-img'>
              <img
                src={
                  process.env.NEXT_PUBLIC_API_URL + data?.data[0]?.attributes?.image.data.attributes.url
                }

              />
            </div>
            <div className='sig-Article-cmt-dt'>
              <div className='sig-Article-cmt-svg'>
                <p>{data?.data[0]?.attributes?.createdAt} </p>
              </div>
              <div className='sig-Article-cmt-svg'>
                <p>{data?.data[0]?.attributes?.comments?.data.length} comment</p>
              </div>
            </div>
            <div className="sing-text" style={label}>
              <h2 style={{ color: "black", textTransform: "capitalize", margin: "20px 0px", }}>{data?.data[0]?.attributes?.title}</h2>
              <p style={label}>
                {/* {data?.data[0]?.attributes?.desc} */}
                <ReactMarkdown >{data?.data[0]?.attributes?.desc}</ReactMarkdown>
              </p>
            </div>
          </div>


          <div>
            <h1 style={{ textDecoration: "underLine" }}>Comments</h1>
            <Comments />

          </div>
        
        </div>
        <div className="sing-main">
          <div className='blg-leave' style={label}>
            {t("comment-head")}
          </div>
          <div className='blg-inp'>
            <div className='blg-inp-name'>
              <input placeholder='Name' id='blg-InpID' name="name" value={formData.name} onChange={handleChange}></input>
              <input type="email" placeholder='Email' id='blg-InpID' name="email" value={formData.email} onChange={handleChange}></input>
            </div>

            <div>
              <h4 style={label} className="cmt-head">{t("comment-text")}</h4>
              <textarea type="textarea" id='blg-InpID' name="comment" value={formData.comment} onChange={handleChange}></textarea>

            </div>
            <div className='blg-Btn' onClick={handleSubmit}> Post Comment</div>
          </div>
        </div>
      </div>
    </>
  )
}
