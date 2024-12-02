import React, {useContext} from 'react';
import { Context } from '../MainContent';
import { useNavigate } from "react-router-dom";

import '../css/Header.css';

import pfpGatito from '../assets/pfp-gatito.png';

const Header = ({page, openSidebar}) => {
  const [selectedPanel, setSelectedPanel] = useContext(Context);
  const navigate = useNavigate();

  const checkChildren = (page) => {
    if (page.includes('/inicio')) {
      return '/inicio'
    } else {return page}
  }

  const getHeaderTitle = (page) => {
    switch (checkChildren(page)) {
      case '/inicio' :
        return 'Chirp';
      case '/inicio/undefined' :
        return 'Chirp';
      case '/configuraciones' :
        return 'Configuraciones';
      case '/busqueda':
        return 'Búsqueda'
      case '/chats':
        return 'Chats'
      case '/notificaciones':
        return 'Notificaciones'
    
      default:
        return 'pagina';
    }
  }

  const headerTitle = getHeaderTitle(page);

    if (headerTitle === 'Chirp') {
      return (
        <div className='header-container'>
          <div className='header-topinfo'>
            <h1 className='headline'>{headerTitle}</h1>
  
            <button className='header-pfp' onClick={openSidebar} type='button'>
              <md-ripple></md-ripple>
              <img src={pfpGatito} alt='Foto de perfil del usuario'></img>
            </button>
  
          </div>
          <md-tabs>
  
            <md-secondary-tab isTab
            id="para-ti-tab"
            {...selectedPanel === 'para-ti-selected' ? {active: true} : {}} 
            onClick={() => {setSelectedPanel('para-ti-selected')}}
            >
              <p className='label'>Para Ti</p>
            </md-secondary-tab>
  
            <md-secondary-tab isTab
            id="mis-amigos-tab"
            {...selectedPanel === 'mis-amigos-selected' ? {active: true} : {}}
            onClick={() => {setSelectedPanel('mis-amigos-selected')}}
            >
              <p className='label'>Mis Amigos</p>
            </md-secondary-tab>
  
          </md-tabs>
        </div>
      )
    } else if( headerTitle === 'Configuraciones'){
      return(
        <div className='header-container var1'>
                <div className='header-topinfo'>
                    <md-icon-button onClick={() => navigate(-1)}>
                      <md-icon>arrow_back</md-icon>
                    </md-icon-button>
                    <h1 className='headline'>{headerTitle}</h1>
                </div>
            </div>
      )
    } else{
      return(
        <div className='header-container var2'>
                <div className='header-topinfo'>
                    <h1 className='headline'>{headerTitle}</h1>
                    <button className='header-pfp' onClick={openSidebar} type='button'>
                      <md-ripple></md-ripple>
                      <img src={pfpGatito} alt='Foto de perfil del usuario'></img>
                    </button>
                </div>
            </div>
      )
    }
    
}

export default Header;