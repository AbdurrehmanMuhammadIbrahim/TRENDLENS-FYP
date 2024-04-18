"use client"
import React from 'react'
import img1 from "../../assets/img2.jpg"
import "./Blogs.css"
import Image from 'next/image'

export default function Blogs() {

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


              
                <div className='Blogs-main'>


                    <div className='left-Bg'>
                        <div className='Bg-Img'>

                            <Image src={img1} alt="blogimg"/>

                        </div>

                        <div>
                            <h2 className='title-Blog'>
                               Blog Title
                            </h2>
                        </div>
                        <div className='Bg-para' >
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales in mi non accumsan. Mauris vestibulum risus nec mauris tristique consequat
                        </div>


                        {/* <div className='Bg-Title'>

                    </div> */}
                        <div className='Bg-Desc'>

                        </div>
                    </div>
                    <div className='right-Bg'>
                    {Array.from(Array(3)).map((_, index) => (
                        <div className='Blog-content' key={index}>
                            <div className='Blog-img'>
                                {/* gfghfgh */}
                                <Image src={img1}  alt="blogimg"/>
                            </div>
                            <div className='blog-text'>
                                <h2 className='title-Blog'>
                                   Blog Title
                                </h2>
                                <p> 
                                    {truncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales in mi non accumsan. Mauris vestibulum risus nec mauris tristique consequat", 120)}
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
