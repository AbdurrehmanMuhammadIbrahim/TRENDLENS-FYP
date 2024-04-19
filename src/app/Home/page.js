"use client";
import React,{useContext,useEffect} from 'react'
import Slider from '../Slider/page';
import Blogs from './Blogs/page';
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../utils/context";
import Newsletter from '../components/NewsLetter/page';
import Category from './Category/category';
import Article from "../Articles/page";

const Home= () => {
  const { categories, setCategories,articles,setArticles, } = useContext(Context);

  useEffect(() => {
  getCategories();
  getarticles();
  }, []);

  const getarticles = () => {
    fetchDataFromApi("/api/articles?populate=*&pagination[start]=0&pagination[limit]=8&sort=createdAt:desc").then((res) => {
      console.log("Arc-data",res)
      setArticles(res);
    });
    };

  
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log("data",res)
        setCategories(res);
    });
    };
  return (
    <div>
      <Slider/>
      <Category categories={categories}/>
      <Blogs/>
<Article headingText="Popular Articles" articles={articles}/>

      <Newsletter/>
    </div>
  )
}

export default Home;
