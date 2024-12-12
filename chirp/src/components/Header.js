import React, { useContext, useState, useEffect} from "react";
import { Context } from "../MainContent";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/Header.css";
import pfpGatito from "../assets/pfp-gatito.png";

const Header = ({ page, openSidebar }) => {
  const [selectedPanel, setSelectedPanel, searchResults, setSearchResults] = useContext(Context);
  const navigate = useNavigate();
  const [searchbar, setSearchbar] = useState('none');
  const [searchbarChat, setSearchbarChat] = useState('none');

  const closeSearchBar = () => {
    setSearchbar('close');
    setSearchResults('')
  }


  const animData = (state) =>{
    if (state === 'open') {
      return 'opensb'
    } else if(state === 'close'){
      return 'closedsb'
    } else {
      return 'no-animsb'
    }
  }
  const location = useLocation();

  useEffect(() => {
    setSearchbarChat('none');
    setSearchbar('none');
  }, [location]);

  const animStateChat = animData(searchbarChat);
  const animStateSearch = animData(searchbar);
  
  const checkChildren = (page) => {
    if (page.includes("/inicio")) {
      return "/inicio";
    } else if(page.includes("/chats")) {
      return "/chats";
    } else if(page.includes("/notificaciones")) {
      return "/notificaciones";
    } else return page;
  };

  const getHeaderTitle = (page) => {
    switch (checkChildren(page)) {
      case "/inicio":
        return "Chirp";
      case "/configuraciones":
        return "Configuraciones";
      case "/busqueda":
        return "Búsqueda";
      case "/chats":
        return "Chats";
      case "/notificaciones":
        return "Notificaciones";

      default:
        return "pagina";
    }
  };

  const headerTitle = getHeaderTitle(page);

  if (headerTitle === "Chirp") {
    return (
      <div className="header-container">
        <div className="header-topinfo">
          <h1 className="headline">{headerTitle}</h1>

          <button className="header-pfp" onClick={openSidebar} type="button">
            <md-ripple></md-ripple>
            <img src={pfpGatito} alt="Foto de perfil del usuario"></img>
          </button>
        </div>
        <md-tabs>
          <md-secondary-tab
            isTab
            id="para-ti-tab"
            {...(selectedPanel === "para-ti-selected" ? { active: true } : {})}
            onClick={() => {
              setSelectedPanel("para-ti-selected");
            }}
          >
            <p className="label">Para Ti</p>
          </md-secondary-tab>

          <md-secondary-tab
            isTab
            id="mis-amigos-tab"
            {...(selectedPanel === "mis-amigos-selected"
              ? { active: true }
              : {})}
            onClick={() => {
              setSelectedPanel("mis-amigos-selected");
            }}
          >
            <p className="label">Mis Amigos</p>
          </md-secondary-tab>
        </md-tabs>
      </div>
    );
  } else if (headerTitle === "Configuraciones") {
    return (
      <div className="header-container var1">
        <div className="header-topinfo">
          <md-icon-button onClick={() => navigate(-1)}>
            <md-icon>arrow_back</md-icon>
          </md-icon-button>
          <h1 className="headline">{headerTitle}</h1>
        </div>
      </div>
    );
  } else if (headerTitle === "Chats") {
    return (
      <div
        className={`header-container var3 ${animStateChat}`}
      >
        <div className="header-topinfo">
          <h1 className="headline open-visoff">{headerTitle}</h1>
          <div className="searchbar chat">
            <form>
              <md-filled-text-field placeholder="Busca tus chats...">
                <md-icon-button
                  slot="leading-icon"
                  type="button"
                  onClick={() => setSearchbarChat('close')}
                >
                  <md-icon>arrow_back</md-icon>
                </md-icon-button>
                <md-icon-button slot="trailing-icon" type="button">
                  <md-icon>search</md-icon>
                </md-icon-button>
              </md-filled-text-field>
            </form>
          </div>
          <md-icon-button
            class="searchbar-open open-visoff"
            onClick={() => setSearchbarChat('open')}
          >
            <md-icon>search</md-icon>
          </md-icon-button>
          <button className="header-pfp open-visoff" onClick={openSidebar} type="button">
            <md-ripple></md-ripple>
            <img src={pfpGatito} alt="Foto de perfil del usuario"></img>
          </button>
        </div>
      </div>
    );
  } else if (headerTitle === "Búsqueda") {
    return (
      <div
        className={`header-container var3 ${animStateSearch}`}
      >
        <div className="header-topinfo">
          <h1 className="label open-visoff">{headerTitle}</h1>
          <div className="searchbar">
            <md-filled-text-field placeholder="Buscar..."
            onInput={e => setSearchResults(e.target.value)}>
              <md-icon-button
                slot="leading-icon"
                type="button"
                onClick={() => closeSearchBar()}
              >
                <md-icon>arrow_back</md-icon>
              </md-icon-button>
                <md-icon slot="trailing-icon">search</md-icon>
            </md-filled-text-field>
          </div>
          <md-icon-button
            class="searchbar-open open-visoff"
            onClick={() => setSearchbar('open')}
          >
            <md-icon>search</md-icon>
          </md-icon-button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header-container var2">
        <div className="header-topinfo">
          <h1 className="headline">{headerTitle}</h1>
          <button className="header-pfp" onClick={openSidebar} type="button">
            <md-ripple></md-ripple>
            <img src={pfpGatito} alt="Foto de perfil del usuario"></img>
          </button>
        </div>
      </div>
    );
  }
};

export default Header;
