import React from "react";

import unknownUser from './unknownUser.png'
import classes from './article-small.module.scss'

function ArticleSmall () {
  return (
    <div className={classes.article}>
      <h5 className={classes["title-article"]}>Some article title</h5>
      <div className= {classes.favorites}>
        <div className= {classes.heart}></div>
        <span className= {classes.number}>12</span>
      </div>
      <div className= {classes.tags}>
        <span className= {classes.tag}>Tag 1</span>
        <div className= {classes.tag}>Some tag</div>
      </div>
      <div className= {classes.text}>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>

      <div className= {classes.author}>
        <h6 className= {classes.username}>John Doe</h6>
        <div className= {classes.createdAt}>March 5, 2020</div>
        <img className={classes["img-user"]} src={unknownUser} alt="img"></img>
        
      </div>

    </div>
    
  )
}

export default ArticleSmall