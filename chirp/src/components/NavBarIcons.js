import '../css/NavBarIcons.css';

const NavBarIcon = ({/*state,*/ label, icon}) => {
    return(
        <div className='navbar-icongroup'>
            <div className='navbar-icon'>
                <img src={icon} alt={`Ícono de ${label}`}></img>
            </div>
            <p className='ios-label'>{label}</p>
        </div>  
)
}

export default NavBarIcon;