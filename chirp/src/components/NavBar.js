import React, { Component } from 'react';
import '../css/NavBar.css';
//import Icon from './IconDefault';
//import Heart from '../assets/heart.svg';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/ripple/ripple.js';


export class NavBar extends Component {
  render() {
    return (
      <nav className='navbar-container'>
        <md-icon-button href="#">
          <md-icon>home</md-icon>
        </md-icon-button>

        <md-icon-button href="#">
          <md-icon>search</md-icon>
        </md-icon-button>

        <md-icon-button href="#">
          <md-icon>groups</md-icon>
        </md-icon-button>

        <md-icon-button href="#">
          <md-icon>notifications</md-icon>
        </md-icon-button>       
      </nav>
    )
  }
}

export default NavBar