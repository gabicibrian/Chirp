import '../css/NavBar.css';
import '@material/web/iconbutton/icon-button.js';
import { NavLink } from "react-router-dom";


const NavBar = () => {
  
  const navButtons = [
    {icon: 'home', path: '/inicio', key: 'dashboard'},
    {icon: 'search', path: '/busqueda', key: 'busqueda'},
    {icon: 'groups', path: '/chats', key: 'chats'},
    {icon: 'notifications', path: '/notificaciones', key: 'notificaciones'}
  ]
    return (
      <nav className='navbar-container'>

        {navButtons.map((button) => 
        <NavLink
          key={button.key}
          to={button.path}>
            <md-icon-button>
            <md-icon>{button.icon}</md-icon>
          </md-icon-button>
        </NavLink>
        )}

      </nav>
    )
}

export default NavBar;