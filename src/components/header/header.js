import React from "react";

import classes from'./header.module.scss'

function Header () {

  return (
    <div className={classes.header}>
      <span className= {classes["neme-blog"]}>
        Realworld Blog
      </span>
      <div className= {classes["header-right-menu"]} >
        <button className= {classes["sign-in"]}>Sign In</button>
        <button className= {classes["sing-up"]}>Sign Up</button>
      </div>
    </div>
  )
}

export default Header