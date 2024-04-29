import React from "react";
import useFetch from "../../../../hooks/useFetch ";
import Articles from "../../../Articles/page";
import { useParams } from 'next/navigation'

const RelatedProducts = ({ CategoryId, SingleArticleId }) => {

    const title = useParams()

    const { data } = useFetch(
        `/api/articles?populate=*&filters[id][$ne]=${SingleArticleId}&filters[categories][id]=${CategoryId}&locale=${title.locale}&pagination[start]=0&pagination[limit]=4`
   
   
    );
    console.log ("id",title)

    return (
        <div className="related-products">
            <Articles headingText="Related Articles"
             articles={data} 
             />
        </div>
    );
};

export default RelatedProducts;