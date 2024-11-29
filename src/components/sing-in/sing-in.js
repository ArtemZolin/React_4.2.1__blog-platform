import React from "react";

import classes from './sing-in.module.scss'

function SingIn () {

  return (
    <div className={classes ['sing-in']}>
      <h1 className={classes.title}>Sign In</h1>

      <form className={classes.form}>

        <div className={classes.name}>
          <span className={classes.text}>Email address </span>
          <input  className={classes.input}
            type="input" 
            placeholder="Email address"
          ></input>
        </div>

        <div className={classes.name}>
          <span className={classes.text}>Password </span>
          <input  className={classes.input}
            type="input" 
            placeholder="Password"
          ></input>
        </div>
      </form>

      <div className={classes.create}>
        <button className={classes['button-create']}>
        Login
        </button>
        <span className={classes['text-sing']}>
        Don’t have an account? <a href='dcdcsd'> Sign In.</a>
        </span>
      </div>

    </div>
  )
}

export default SingIn