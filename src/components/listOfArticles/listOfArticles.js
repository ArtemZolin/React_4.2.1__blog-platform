import React from "react";

import ArticleSmall from "../article-small";
import ArticleLong from "../article-long";

import classes from './listOfArticles.module.scss'

function ListOfArticles () {

  const switcher = 0

  const show = switcher ? <ArticleSmall />  : <ArticleLong />


  return (
    <div className={classes["list-of-articles"]}>
        
      {/* <ArticleSmall />

      <ArticleSmall />
      <ArticleSmall />
      <ArticleSmall />
      <ArticleSmall /> */}

      {/* <ArticleLong /> */}
      {show}        
    </div>
  )
}

export default ListOfArticles

