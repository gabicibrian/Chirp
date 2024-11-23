import React, {useContext} from 'react';
import { Context } from '../MainContent';
import { Link } from "react-router-dom";

import '../css/Header.css';

import pfpGatito from '../assets/pfp-gatito.png';

const Header = ({page}) => {
  const [selectedPanel, setSelectedPanel] = useContext(Context);

  

  const getHeaderTitle = (page) => {
    switch (page) {
      case '/inicio' :
        return 'Chirp';
    
      default:
        return 'pagina';
    }
  }

  const headerTitle = getHeaderTitle(page);
    return (
      <div className='header-container'>
        <div className='header-topinfo'>
          <h1 className='headline'>{headerTitle}</h1>

          <Link to='/sidebartest'>
            <md-ripple></md-ripple>
            <img src={pfpGatito} alt='Foto de perfil del usuario'></img>
          </Link>

        </div>
        <md-tabs>

          <md-secondary-tab isTab
          id="para-ti-tab"
          //active={activeTabIndex === 0}
          //{...activeTabIndex === 0 ? {active: true} : {}}
          {...selectedPanel === 'para-ti-selected' ? {active: true} : {}} 
          onClick={() => {setSelectedPanel('para-ti-selected')}}
          >
            <p className='label'>Para Ti</p>
          </md-secondary-tab>

          <md-secondary-tab isTab
          id="mis-amigos-tab" 
          //active={activeTabIndex === 1}
          //{...activeTabIndex === 1 ? {active: true} : {}}
          {...selectedPanel === 'mis-amigos-selected' ? {active: true} : {}}
          onClick={() => {setSelectedPanel('mis-amigos-selected')}}
          >
            <p className='label'>Mis Amigos</p>
          </md-secondary-tab>

        </md-tabs>
      </div>
    )
}

export default Header;