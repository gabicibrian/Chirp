import React from 'react';
import { Link } from "react-router-dom";

import '../css/Header.css';

import pfpGatito from '../assets/pfp-gatito.png';

const Header = ({setSelectedPanel}) => {
    return (
      <div className='header-container'>
        <div className='header-topinfo'>
          <h1 className='headline'>Chirp</h1>

          <Link>
            <img src={pfpGatito} alt='Foto de perfil del usuario'></img>
          </Link>

        </div>
        <md-tabs>

          <md-secondary-tab active
          aria-label="Tab de contendio recomendado para ti"
          id="para-ti-tab" aria-controls="para-ti-panel"
          >
            <p className='label'>Para Ti</p>
          </md-secondary-tab>

          <md-secondary-tab
          aria-label="Tab de contendio de mis amigos"
          id="mis-amigos-tab" aria-controls="mis-amigos-panel">
            <p className='label'>Mis Amigos</p>
          </md-secondary-tab>

        </md-tabs>
      </div>
    )
}

export default Header;