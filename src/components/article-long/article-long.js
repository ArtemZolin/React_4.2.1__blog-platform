import React from "react";

import './article-long.module.scss'
import unknownUser from '../article-small/unknownUser.png'

function ArticleLong (){

  return(
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
      <pre>Est Ampyciden pater patent
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
      </pre>

    </div>
  )
}

export default ArticleLong