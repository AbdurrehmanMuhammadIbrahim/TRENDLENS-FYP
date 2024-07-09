"use client";
import React, { useContext, useEffect } from 'react'
import Slider from '../../components/Slider/page';
import HomeArticle from './HomeArticle/page';
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Newsletter from '../../components/NewsLetter/page';
import Category from './Category/category';
import Article from "../Articles/page";
import { useParams } from 'next/navigation';
// import Newsletter from "@strapi-newsletter/react";


const Home = () => {
  const locale = useParams();
  const { categories, setCategories, articles, setArticles, } = useContext(Context);

  useEffect(() => {
    getCategories();
    getarticles();
  }, []);

  const getarticles = () => {
    fetchDataFromApi(`/api/articles?populate=*&locale=${locale.locale}&pagination[start]=0&pagination[limit]=8&sort=createdAt:asc`).then((res) => {
      setArticles(res);
    });
  };


  const getCategories = () => {
    fetchDataFromApi(`/api/categories?populate=*&locale=${locale.locale}`).then((res) => {
      setCategories(res);
    });
  };
  return (
    <div>
      <Slider />
      <Category categories={categories} />
      <HomeArticle />
      <Article headingText="Popular Articles" articles={articles} />
      <Newsletter />

    </div>
  )
}

export default Home;
