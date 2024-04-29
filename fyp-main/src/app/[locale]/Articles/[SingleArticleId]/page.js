"use client"
import React,{useState,useEffect,useContext} from "react";
import "./SingleArticle.css"
import useFetch from "../../../hooks/useFetch ";
import { useParams } from 'next/navigation'
import RelatedProducts from "./RelatedProduct/page";
import Comments from "./Comments/page"
import { useTranslations } from "next-intl";
import axios from "axios";
import { Context } from "../../../utils/context";


export default function SingleArticle() {
  const title = useParams()

console.log(title.locale,"sineeeee")

const { data } = useFetch(`/api/articles?populate=*&[filters][title]=${title.SingleArticleId}&locale=${title.locale}`);
console.log('data',data)
// const { comment } = useFetch("/api/comments");
// console.log("comment",comment)

const article = data?.data[0]?.attributes;


const t = useTranslations("Home");
const [label, setLabel] = useState();


const [formData, setFormData] = useState({
  name: '',
  email: '',
  comment: " ",
  articles:" "
// locale:" ",
  // Add other form fields here
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


const handleSubmit = async (e) => {
  console.log(formData)
  e.preventDefault();

  const formDataToSend = new FormData(); // Use FormData for multipart data
  formDataToSend.append('data', JSON.stringify({
    name: formData.name,
    email: formData.email,
    comment:formData.comment,
    articles: [data?.data[0]?.id],
    publishedAt: null,

  }));
  console.log(formDataToSend)

  // formDataToSend.append('files.image', formData.image); // Append image file


  try {

    const response = await axios.post(`http://localhost:1337/api/comments/?populate=*&[filters][articles]=${title.SingleArticleId}`, formDataToSend, {

      headers: {
        'Content-Type': 'multipart/form-data'
      }


    });
    console.log('Article created successfully', response.data);
   


  } catch (error) {
    console.error('Error creating comment:', error);
    alert("please write right credentials" , error)
  }


};
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
  <h1 style={{textDecoration:"underLine"}}>Comments</h1>
  <Comments />

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
                    <input placeholder='Name' id='blg-InpID'  name="name" value={formData.name} onChange={handleChange}></input>
                    <input type="email" placeholder='Email' id='blg-InpID' name="email" value={formData.email} onChange={handleChange}></input>
                  </div>
    
    <div>
    <textarea placeholder='Your message' type="textarea" id='blg-InpID'  name="comment" value={formData.comment} onChange={handleChange}></textarea>
   
    </div>
    <div className='blg-Btn' onClick={handleSubmit}> Post Comment</div>
    </div>
</div>
      </div>
    </>
  )
}
