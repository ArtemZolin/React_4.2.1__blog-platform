// import React from "react";

import Markdown from 'react-markdown';


import unknownUser from '../image/unknownUser.png'

import classes from './article-long.module.scss'

function ArticleLong (){

  return(
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

  
      <Markdown className='description'>Est Ampyciden pater patent
Amor saxa inpiger
Lorem markdownum Stygias neque is referam fudi, breve per. Et Achaica tamen: nescia ista occupat, illum se ad potest humum et.

Qua deos has fontibus
Recens nec ferro responsaque dedere armenti opes momorderat pisce, vitataque et fugisse. Et iamque incipiens, qua huius suo omnes ne pendentia citus pedum.

Quamvis pronuba
Ulli labore facta. Io cervis non nosterque nullae, vides: aethere Delphice subit, tamen Romane ob cubilia Rhodopen calentes librata! Nihil populorum flava, inrita? Sit hic nunc, hoc formae Esse illo? Umeris eram similis, crudelem de est relicto ingemuit finiat Pelia uno cernunt Venus draconem, hic, Methymnaeae.

  1. Clamoribus haesit tenentem iube Haec munera
  2. Vincla venae
  3. Paris includere etiam tamen
  4. Superi te putria imagine Deianira
  5. Tremore hoste Esse sed perstat capillis siqua

  **жирный**  
__жирный__

~~зачеркнутый~~

Кор*рек*тно, кор**рек**тно, кор***рек***тно

Некор_рек_тно, некор__рек__тно, некор___рек___тно

      <u>Подчёркнутый текст</u>

- [x] Отмеченный пункт
- [ ] Неотмеченный пункт
      </Markdown>

    </div>
  )
}

export default ArticleLong