import React from "react";

import classes  from './create-account.module.scss'

function CreateAccount () {

  return (
    <div className={classes ['create-account']}>
      <h1 className={classes.title}>Create new account</h1>
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
          <span className={classes.text}>Password </span>
          <input  className={classes.input}
            type="input" 
            placeholder="Password"
          ></input>
        </div>

        <div className={classes.name}>
          <span className={classes.text}>Repeat Password </span>
          <input  className={classes.input}
            type="input" 
            placeholder="Password"
          ></input>
        </div>
      </form>

      <div className={classes.agreement}>
        <label className={classes.label}> 
          <input className={classes.input1}
            type = "checkbox"
            //   checked={filters.all}
            //   onClick = {() => {checkboxChange('all')}}
          ></input>
          <div className="">I agree to the processing of my personal 
        information</div>
        </label>
      </div>

      <div className={classes.create}>
        <button className={classes['button-create']}>
          Create
        </button>
        <span className={classes['text-sing']}>
        Already have an account? <a href='dcdcsd'> Sign In.</a>
        </span>
      </div>

    </div>
  )
}

export default CreateAccount