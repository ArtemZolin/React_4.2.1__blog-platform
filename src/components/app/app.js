import React from "react";


import Header from "../header";
import ListOfArticles from "../listOfArticles";
import ArticleLong from "../article-long";
import CreateAccount from "../create-account";
import SingIn from "../sing-in/sing-in";
import EditProfile from "../edit-profile/edit-profile";

import classes from'./app.module.scss'
import '../normalize.css'

function  App () {
  console.log('',<ListOfArticles />)
  console.log('',<ArticleLong/>)
  console.log('', <CreateAccount/>)
  console.log('', <SingIn />)
  console.log('', )

  return(
    <div className={classes.app}>
      <Header />
      <div className={classes.main}>
        
        <EditProfile />
      </div>
    </div>
  )
}


export default  App