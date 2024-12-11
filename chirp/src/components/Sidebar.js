import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import '../css/Sidebar.css'

const Sidebar = ({isOpen, closeSidebar}) =>{
    const username = localStorage.getItem("user");
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();

    const logOut = () =>{
        setOpenDialog(true);
    }

    const closeDialog = () =>{
        setOpenDialog(false);
    }

    const confirmLogOut = () =>{
        localStorage.removeItem("user");
        localStorage.removeItem("password");
        navigate('/acceso')
    }

    const linkNavigate = (path) => {
        closeSidebar();
        navigate(path);
    }

    const sidebarButtons = [
        {label: 'Perfil', icon: 'account_circle', path: '/perfil'},
        {label: 'Editar Perfil', icon: 'edit'},
        {label: 'Mi Snapshot', icon: 'image'},
        {label: 'Tema', icon: 'contrast'},
        {label: 'Configuraciones', icon: 'settings', path: '/configuraciones'},
    ]

    return (
        <div className={ isOpen ? 'sidebar-container' : 'sidebar-container-closed'}> 
            
            <div
            className='overlay'
            onClick={closeSidebar}></div>
            <div
            className='sidebar'>
                
                <div className='sidebar-topinfo'>
                    <img src={Logo} alt='Logo de Chirp'></img>
                    <p className='label-sm'>@{username}</p>
                    <div className='sidebar-follows'>
                        <p className='label'>Seguidoras</p>
                        <p className='label'>Seguidas</p>
                        <p className='label-sm'>74</p>
                        
                        <p className='label-sm'>45</p>
                    </div>
                </div>

                <div className='sidebar-buttons'>
                    {sidebarButtons.map((button) =>
                    <div className='sidebar-link' onClick={() => linkNavigate(button.path)}>
                        <md-ripple></md-ripple>
                        <md-icon>{button.icon}</md-icon>
                        <p className='title'>{button.label}</p>
                    </div>
                    )}
                </div>
                <div className='sidebar-link' id='cerrar-sesion' onClick={logOut}>
                <md-ripple></md-ripple>
                    <p className='title'>Cerrar Sesión</p>
                </div>
            </div>
            <md-dialog {...(openDialog ? {open:true} : {})} class='dialog'>
                <div slot="headline" className='title'>Cerrar Sesión</div>
                <form slot="content" id="form-id" method="dialog" class="body">
                    ¿Estás seguro que quieres cerrar sesión?
                </form>
                <div slot="actions">
                    <md-text-button form="form-id" value="cancel" class="label" onClick={closeDialog}>Cancelar</md-text-button>
                    <md-text-button form="form-id" value="delete" class="label" onClick={confirmLogOut}>Cerrar sesión</md-text-button>
                </div>
            </md-dialog>
        </div>
    )
}

export default Sidebar;