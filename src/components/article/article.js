import React from "react";

import unknownUser from './unknownUser.png'
import './article.css'

function Article () {
  return (
    <div className="article">
      <h5 className="title-article">Some article title</h5>
      <div className="favorites">
        <div className="heart"></div>
        <span className="number">12</span>
      </div>
      <div className="tags">
        <span className="tag">Tag 1</span>
        <div className="tag">Some tag</div>
      </div>
      <div className="text">Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>

      <div className="author">
        <h6 className="username">John Doe</h6>
        <div className="createdAt">March 5, 2020</div>
        <img className="img-user" src={unknownUser} alt="img"></img>
        
      </div>

    </div>
    
  )
}

export default Article