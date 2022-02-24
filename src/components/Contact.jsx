import React from "react";
import yo from '../img/yo-circulo2.png';
import { GoLogoGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import {BsWhatsapp} from 'react-icons/bs';
import "./contact.css";

function Contact() {
    return  <div className="container">    
           <div className="imageBox">
      <img src={yo} alt="Person" id="photo"/>
      </div>
       <div id="cardP">
      <p className="cardP__name">Valkiria Salerno</p>   
      <p className="secTitle">Front End Developer</p>   
      <p className="secTitle">UI/UX Designer</p>   
      <p className="secTitle">Jr.</p>   
     
      <ul class="social-icons">
        <li><a href="https://www.linkedin.com/in/valkiria-salerno-9860a6164/"><i><BsLinkedin /></i></a></li>
        <li><a href="https://github.com/valkiriaspell"><i><GoLogoGithub /></i></a></li>
        <li><a href="https://www.linkedin.com/in/valkiria-salerno-9860a6164/"><i><BsWhatsapp /></i></a></li>               
      </ul>
      <button className="btn draw-border">Follow</button>
      <button className="btn draw-border">Message</button>
    </div>
  </div>          
}
export default Contact;

