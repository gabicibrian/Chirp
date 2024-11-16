import '../css/NavBar.css';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/ripple/ripple.js';


const NavBar = ({setPage}) => {

    return (
      <nav className='navbar-container'>
        <md-icon-button onClick= {() => setPage('Dashboard')}>
          <md-icon>home</md-icon>
        </md-icon-button>

        <md-icon-button onClick= {() => setPage('Busqueda')}>
          <md-icon>search</md-icon>
        </md-icon-button>

        <md-icon-button onClick= {() => setPage('Amigos')}>
          <md-icon>groups</md-icon>
        </md-icon-button>

        <md-icon-button onClick= {() => setPage('Notificaciones')}>
          <md-icon>notifications</md-icon>
        </md-icon-button>       
      </nav>
    )
}

export default NavBar;