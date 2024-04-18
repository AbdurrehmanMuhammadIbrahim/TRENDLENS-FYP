'use client'
import { useParams } from 'next/navigation'
import useFetch from "../../hooks/useFetch ";
import Articles from "../../Articles/page";
import "./Category.css";
import HeroBanner from '@/app/components/HeroBanner/page';



const Category = () => {
    const title = useParams()
    // const router = useRouter();
    // const { id } = router.query;
    const { data } = useFetch(
        `/api/articles?populate=*&[filters][categories][title]=${title.CategoryId}`
    

    );
    // console.log("data",data)
    console.log('ID:', title);
    return (
        <div className="category-main-content">
<HeroBanner name={
                        data?.data[0]?.attributes?.categories?.data[0].attributes.title
                    }/>

            <div className="layout">
                {/* <div className="category-title">
                   Category title
                   {
                        data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    }
                </div> */}
                <Articles innerPage={true}  articles={data}/>
            </div>
        </div>
    );
};

export default Category;