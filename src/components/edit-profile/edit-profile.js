import React from "react";

import classes from './edit-profile.module.scss'

function EditProfile () {

  return (
    <div className={classes ['edit-profile']}>
      <h1 className={classes.title}>Edit Profile</h1>
      <form className={classes.form}>
  
        <div className={classes.name}>
          <span className={classes.text}>Username </span>
          <input  className={classes.input}
            type="input" 
            placeholder="Username"
          ></input>
        </div>
  
        <div className={classes.name}>
          <span className={classes.text}>Email address </span>
          <input  className={classes.input}
            type="input" 
            placeholder="Email address"
          ></input>
        </div>
  
        <div className={classes.name}>
          <span className={classes.text}>New password </span>
          <input  className={classes.input}
            type="input" 
            placeholder="New password"
          ></input>
        </div>
  
        <div className={classes.name}>
          <span className={classes.text}>Avatar image (url) </span>
          <input  className={classes.input}
            type="input" 
            placeholder="Avatar image"
          ></input>
        </div>
      </form>
      
      <button className={classes['button-create']}>
        Save
      </button>
       
    </div>
  )
}

export default EditProfile