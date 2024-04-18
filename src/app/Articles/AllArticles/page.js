"use client";
import React,{useContext,useEffect} from 'react'
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Article from "../../Articles/page";

const AllArticle= () => {
  const {articles,setArticles, } = useContext(Context);

  useEffect(() => {

  getarticles();
  }, []);

  const getarticles = () => {
    fetchDataFromApi("/api/articles?populate=*&sort=createdAt:desc").then((res) => {
      console.log("Arc-data",res)
      setArticles(res);
    });
    };

  

  return (
    <div>
     
<Article headingText="Articles" articles={articles}/>

    </div>
  )
}

export default AllArticle;
