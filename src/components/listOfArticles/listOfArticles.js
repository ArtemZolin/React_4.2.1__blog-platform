import React from "react";
import { Pagination, Spin } from "antd";

import ArticleSmall from "../article-small";


import classes from './listOfArticles.module.scss'

function ListOfArticles () {

 


  return (
    <div className={classes["list-of-articles"]}>
      <Spin spinning= {false}  style={{ display: 'flex', justifyContent: 'center' }} />

      <ArticleSmall />
      <ArticleSmall />
      <ArticleSmall />
      <ArticleSmall />
      <ArticleSmall /> 

    
      
      <Pagination 
        defaultCurrent={1}
        defaultPageSize={5}
        style={{ textAlign: 'center', paddingBottom: '14px' }}
        showSizeChanger={false}
        // itemSize= {22}
        // itemSizeSM = {14}
        // controlHeight ={22}
        // borderRadius = {4}
        // itemActiveBgDisabled= {rgba(24, 144, 255, 1)}
        // current={numberPage}
        // total={totalPages * 10}
        // showSizeChanger={false}guestSessionId
        // onChange={this.changePage}
        align="center"
      />      
    </div>
  )
}

export default ListOfArticles

