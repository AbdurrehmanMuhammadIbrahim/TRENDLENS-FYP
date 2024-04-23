"use client"
import React,{useState,useEffect} from "react";
import "./SingleArticle.css"
import useFetch from "../../../hooks/useFetch ";
import { useParams } from 'next/navigation'
import RelatedProducts from "./RelatedProduct/page";
import { useTranslations } from "next-intl";
// import { Context } from "../../utils/context";

export default function SingleArticle() {
  const title = useParams()
const { data } = useFetch(`/api/articles?populate=*&[filters][title]=${title.SingleArticleId}&locale=${title.locale}`);
// console.log(data)
const article = data?.data[0]?.attributes;
const t = useTranslations("Home");

// console.log ("id---",title)

const [label, setLabel] = useState();
useEffect(() => {
if(title.locale === 'ur'){
  setLabel({textAlign:"right",fontFamily:"Jameel Noori Nastaleeq",fontSize:"18pt",wordSpacing:"3pt" })
}
else if(title.locale === 'en'){
  setLabel({textAlign:"left",fontFamily:"Garamond",fontSize:"16pt"})
}

},[title]);
  return (
    <>
      <div>
     

        <div className="sing-main" >
          <div style={{ borderBottom: "1px solid #8a8a8a8a", marginBottom: 50, marginTop: 20 }}>
            <div className='all-sig-blog-img'>
            <img 
                    src={
                        process.env.NEXT_PUBLIC_API_URL+data?.data[0]?.attributes?.image.data.attributes.url
                    }

                />
            </div>
            <div className='sig-Article-cmt-dt'>
              <div className='sig-Article-cmt-svg'>
                <p>{data?.data[0]?.attributes?.createdAt} </p>
              </div>
              <div className='sig-Article-cmt-svg'>
                <p>2 comments</p>
              </div>
            </div>
            <div className="sing-text" style={label}>
              <h1 style={{ color: "black", textTransform: "capitalize",margin:"20px 0px",}}>{data?.data[0]?.attributes?.title}</h1>
              <p style={label}>
              {data?.data[0]?.attributes?.desc}
              </p>
            </div>
          </div>

          <div>
            <RelatedProducts 
            SingleArticleId={title}
                    CategoryId={article?.categories.data[0].id}
                    />
          </div>

        </div>
        <div className="sing-main">    
<div className='blg-leave' style={label}>
        {t("comment-text")}
    </div>
    <div className='blg-inp'>
    <div className='blg-inp-name'>
                    <input placeholder='Name' id='blg-InpID'></input>
                    <input placeholder='Last Name' id='blg-InpID'></input>
                  </div>
    
    <div>
    <textarea placeholder='Your message' type="textarea" id='blg-InpID'></textarea>
   
    </div>
    <div className='blg-Btn'> Post Comment</div>
    </div>
</div>
      </div>
    </>
  )
}
