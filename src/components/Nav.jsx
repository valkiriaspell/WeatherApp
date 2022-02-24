import React from 'react';
import Icon from '../img/weatherIcon.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
import Fecha from './Fecha';




function Nav({onSearch}) {
  return (
    <nav className="naviBar">
        <span className="navbar-brand">
          <Link to="/">
          <img id="logoHenry" src={Icon} width="30" height="30" className="d-inline-block align-top" alt="" />
          </Link>
          Valkiria - Weather App
          <Fecha />
        </span>
        <span className="navbar-brand">              
        <SearchBar
          onSearch={onSearch}
        />
        </span>
        <Link to='/about'> 
        <span>About</span>
        </Link>
        <Link to='/Contact'>
          <span>Contact</span>
          </Link>    </nav>
  );
};

export default Nav;
