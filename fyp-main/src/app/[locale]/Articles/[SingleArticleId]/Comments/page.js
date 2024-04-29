import React from 'react'
import useFetch from "../../../../hooks/useFetch ";
import { useParams } from 'next/navigation'

function comment() {
    const title = useParams()


    const { data } = useFetch(`/api/comments?populate=*&[filters][articles][title]=${title.SingleArticleId}`);
console.log("comment",data)

// const { data } = useFetch("/api/comments?populate=*&[filters][articles][title][$eq]=Article-3");
// console.log("comment",data)
  return (
    <div>

{!data?.data?.length && (
                    <div className="cmt-msg">
                        No Comment
                    </div>
               )} 
        {data?.data?.map((item, index) => (
    //   <div>{}</div>

<div key={index} className='cmt-main'>
<div className='cmt-name'>{item.attributes.name}</div>
<div className='cmt-comment'>{item.attributes.comment}</div>
</div>
        ))}
    </div>
  )
}

export default comment
