import '../css/NavBar.css';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/ripple/ripple.js';
import { Link } from "react-router-dom";


const NavBar = ({setPage, selectedPage}) => {
  const navButtons = [
    {
      icon: 'home',
      path: '/dashboard'
    },
    {
      icon: 'search',
      path: 'buscar'
    },
    {
      icon: 'groups',
      path: 'amigos'
    },
    {
      icon: 'notifications',
      path: 'notificaciones'
    }
  ]
    return (
      <nav className='navbar-container'>
        {navButtons.map((button) => 
        <Link to={button.path}>
          <md-icon-button
          {...(isActi ? { selected: true} : {})}>
          <md-icon>{button.icon}</md-icon>
        </md-icon-button>
        </Link>
          
        )}
        

        <md-icon-button 
          onClick= {() => setPage('Busqueda')}
          toggle
          {...(selectedPage === 'Busqueda' ? { selected: true} : {})}>
          <md-icon>search</md-icon>
        </md-icon-button>

        <md-icon-button
          onClick= {() => setPage('Amigos')}
          toggle
          {...(selectedPage === 'Amigos' ? { selected: true} : {})}>
          <md-icon>groups</md-icon>
        </md-icon-button>

        <md-icon-button
          onClick= {() => setPage('Notificaciones')}
          toggle
          {...(selectedPage === 'Notificaciones' ? { selected: true} : {})}>
          <md-icon>notifications</md-icon>
        </md-icon-button>       
      </nav>
    )
}

export default NavBar;