import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import '../css/Sidebar.css'

const Sidebar = ({isOpen, closeSidebar}) =>{
    const username = localStorage.getItem("user");
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();

    const dialog = document.getElementsByTagName('md-dialog');
    /*dialog.addEventListener('close', () => {
        const cancelClicked = dialog.returnValue === 'cancel';
        const okClicked = dialog.returnValue === 'ok';
      });*/

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
    /*const [closedClass, setClosedClass] = useState(false);
    const closeSidebarAnim = () => {
        setClosedClass(true);
        setTimeout(() => {
          closeSidebar();
        }, 300);
      }*/

    const sidebarButtons = [
        {label: 'Perfil', icon: 'account_circle', path: ''},
        {label: 'Editar Perfil', icon: 'edit', path: ''},
        {label: 'Mi Snapshot', icon: 'image', path: ''},
        {label: 'Tema', icon: 'contrast', path: ''},
        {label: 'Configuraciones', icon: 'settings', path: ''},
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
                        <div className='sidebar-link'>
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