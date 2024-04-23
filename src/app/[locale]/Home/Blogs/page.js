"use client"
import React,{useState,useEffect,} from 'react'
import img1 from "../../../assets/img2.jpg"
import "./Blogs.css"
import Image from 'next/image'
import { useParams } from 'next/navigation';
import { fetchDataFromApi } from "../../../utils/api";
import { Context } from "../../../utils/context";
import useFetch from "../../../hooks/useFetch ";

export default function Blogs() {

    const locale = useParams();


  
    const { data } = useFetch(
        `/api/articles?populate=*&locale=${locale.locale}&pagination[start]=0&pagination[limit]=4&sort=createdAt:desc`
    )

    const [label, setLabel] = useState();
    useEffect(() => {
    if(locale.locale === 'ur'){
      setLabel({textAlign:"right",fontFamily:"Jameel Noori Nastaleeq",fontSize:"18pt",wordSpacing:"3pt" })
    }
    else if(locale.locale === 'en'){
      setLabel({textAlign:"left",fontFamily:"Garamond",fontSize:"16pt"})
    }
},[locale]);
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    return (
        <div style={{ maxWidth: 1340, margin:"50pt auto",padding:" 0 20px"}}>

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
                        <div className='Bg-Img'>

                            {/* <Image src={img1} alt="blogimg"
                            
                            /> */}
   <img 
                    src={
                        process.env.NEXT_PUBLIC_API_URL +
                        data?.data[0]?.attributes?.image?.data?.attributes?.url
                    }

                />
                        </div>

                        <div>
                            <h2 >
                            {data?.data[0].attributes?.title}
                               {/* Blog Title */}
                            </h2>
                        </div>
                        <div className='Bg-para' >
                        {/* {data?.data[0].attributes?.desc} */}
                        {truncateText(`${data?.data[0].attributes.desc}`, 140)}
                        </div>


                        {/* <div className='Bg-Title'>

                    </div> */}
                        {/* <div className='Bg-Desc'>

                        </div> */}
                    </div>
                    <div className='right-Bg'>
                    {/* {Array.from(Array(3)).map((_, index) => ( */}
                    {data?.data.slice(1)?.map((item, index) => (

                        <div className='Blog-content' key={index}>
                            <div className='Blog-img'>
                                {/* gfghfgh */}
                                <img  alt="blogimg"
                    src={
                        process.env.NEXT_PUBLIC_API_URL +
                        item?.attributes?.image?.data?.attributes?.url
                    }

                />
                                {/* <Image src={img1}  alt="blogimg"/> */}
                            </div>
                            <div className='blog-text'>
                                <h2 className='title-Blog'>
                                {item?.attributes.title}
                                </h2>
                                <p> 
                                    {truncateText(`${item?.attributes.desc}`, 140)}
                                    </p>
                            </div>

                        </div>

                        // <div className='Blog-content'>
                        //     <div className='Blog-img'>
                        //         <img src={img1}>

                        //         </img>
                        //     </div>
                        //     <div className='blog-text'>
                        //         <h2 className='title-Blog'>
                        //            Blog Title
                        //         </h2>
                        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales in mi non accumsan. Mauris vestibulum risus nec mauris tristique consequat</p>
                        //     </div>

                        // </div>
                        // <div className='Blog-content'>
                        //     <div className='Blog-img'>
                        //         <img src={img1}>

                        //         </img>
                        //     </div>
                        //     <div className='blog-text'>
                        //         <h2 className='title-Blog'>
                        //            Blog Title
                        //         </h2>
                        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales in mi non accumsan. Mauris vestibulum risus nec mauris tristique consequat </p>
                        //     </div>

                        // </div>
                     ))}

                </div>
                {/* </div> */}

            </div>
        </div>
    )
}
