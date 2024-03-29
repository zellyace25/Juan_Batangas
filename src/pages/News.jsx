import React from "react";
import Header from "./Header";
import HeroNews from "./News/HeroNews";
import NewsSection from "./News/NewsSection";
import Footer from "./Footer";

function News() {
  return (
    <>
      <Header />  
      <HeroNews/> 
      <NewsSection/>
      <Footer/>
    </>
  );
}

export default News;
