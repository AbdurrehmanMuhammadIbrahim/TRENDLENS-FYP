'use client'
import { useParams } from 'next/navigation'
import useFetch from "../../../hooks/useFetch ";
import Articles from "../../Articles/page";
import "./Category.css";
import HeroBanner from '@/app/components/HeroBanner/page';



const Category = () => {
    const title = useParams()
    const { data } = useFetch(
        `/api/articles?populate=*&locale=${title.locale}&[filters][categories][title]=${title.CategoryId}`


    );

    return (
        <div className="category-main-content">
            <HeroBanner name={
                title.CategoryId
            } />

            <div className="layout">
                <Articles innerPage={true} articles={data} />
            </div>
        </div>
    );
};

export default Category;