import React,{useEffect,useState} from 'react'
import useFetch from "../../../../hooks/useFetch ";
import { useParams } from 'next/navigation'

function comment() {
    const title = useParams()
    const [label, setLabel] = useState();

    useEffect(() => {
      if(title.locale === 'ur'){
        setLabel({textAlign:"right",fontFamily:"Jameel Noori Nastaleeq",fontSize:"18pt",wordSpacing:"3pt" })
      }
      else if(title.locale === 'en'){
        setLabel({textAlign:"left",fontFamily:"Garamond",fontSize:"14pt"})
      }                      
        // TRENLENS <br/>Created BY  BC200405344@vu.edu.pk

      
      },[title]);

    const { data } = useFetch(`/api/comments?populate=*&[filters][articles][title]=${title.SingleArticleId}&locale=${title.locale}`);
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
<div className='cmt-name' style={label}>{item.attributes.name}</div>
<div className='cmt-comment'style={label}>{item.attributes.comment}</div>
</div>
        ))}
    </div>
  )
}

export default comment
