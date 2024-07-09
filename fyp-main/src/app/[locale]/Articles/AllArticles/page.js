"use client";
import React, { useContext, useEffect } from 'react'
import { fetchDataFromApi } from "../../../utils/api";
import { Context } from "../../../utils/context";
import Article from "../../Articles/page";
import { useParams } from 'next/navigation'

const AllArticle = () => {
  const locale = useParams()
  const { articles, setArticles, } = useContext(Context);


  // &locale=ur
  const getarticles = () => {
    fetchDataFromApi(`/api/articles/?populate=*&locale=${locale.locale}&sort=createdAt:desc`).then((res) => {
      setArticles(res);
    });
  };
  useEffect(() => {
    getarticles();
  }, []);


  return (
    <div>
      <Article headingText="Articles" articles={articles} />
    </div>
  )
}

export default AllArticle;
