import React from "react";
import { Pagination } from "antd";

import Header from "../header";
import ListOfArticles from "../listOfArticles";

import classes from'./app.module.scss'
import '../normalize.css'

function  App () {


  return(
    <div className={classes.app}>
      <Header />
      <div className={classes.main}>
        <ListOfArticles />
        <Pagination 
          defaultCurrent={1}
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
    </div>
  )
}


export default  App