import React from 'react';
import Icon from '../img/weatherIcon.png'
import './Nav.css';
import { Link } from 'react-router-dom';
import Fecha from './Fecha';




function Nav() {
  return (
    <nav className="naviBar">
        <span >
          <Link to="/">
          <img id="logoHenry" src={Icon} width="40" height="40" className="d-inline-block align-top" alt="" />
          </Link>          
          <Fecha />
        </span>        
        <Link to='/Weather'> 
        <span>Weather</span>
        </Link>
        <Link to='/about'> 
        <span>About</span>
        </Link>
        <Link to='/Contact'>
          <span>Contact</span>
          </Link>    </nav>
  );
};

export default Nav;
