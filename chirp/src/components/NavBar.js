import React, { Component } from 'react';
import '../css/NavBar.css';
import NavBarIcon from './NavBarIcons';
import Heart from '../assets/heart.svg';

export class NavBar extends Component {
  render() {
    return (
      <nav className='navbar-container'>
        < NavBarIcon label='Heart' icon={Heart}/>
      </nav>
    )
  }
}

export default NavBar