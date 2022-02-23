import React from "react";
import yo from '../img/yo-circulo-cv.png';
import { GoLogoGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import {BsWhatsapp} from 'react-icons/bs'


function Contact() {
    return  <div className="container">    
       <div id="cardP">
           <div className="imageBox">
      <img src={yo} alt="Person" className="cardP__image"/>
      </div>
      <p className="cardP__name">Valkiria Salerno</p>   
     
      <ul class="social-icons">
        <li><a href="https://www.linkedin.com/in/valkiria-salerno-9860a6164/"><BsLinkedin /></a></li>
        <li><a href="https://github.com/valkiriaspell"><GoLogoGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/valkiria-salerno-9860a6164/"><BsWhatsapp /></a></li>               
      </ul>
      <button className="btn draw-border">Follow</button>
      <button className="btn draw-border">Message</button>
    </div>
  </div>          
}
export default Contact;

