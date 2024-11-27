import React from "react";

import './header.css'

function Header () {

  return (
    <div className="header">
      <span className="">
        Realworld Blog
      </span>
      <div className="header-right-menu">
        <button className="sign-in">Sign In</button>
        <button className="sing-up">Sign Up</button>
      </div>
    </div>
  )
}

export default Header