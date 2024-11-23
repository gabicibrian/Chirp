import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import '../css/Sidebar.css'
import { motion } from "motion/react";

const Sidebar = () =>{

    const sidebarButtons = [
        {label: 'Perfil', icon: 'account_circle', path: '/inicio'},
        {label: 'Editar Perfil', icon: 'edit', path: ''},
        {label: 'Mi Snapshot', icon: 'image', path: ''},
        {label: 'Tema', icon: 'contrast', path: ''},
        {label: 'Configuraciones', icon: 'settings', path: ''},
    ]

    return (
        <div className='sidebar-overlay'>
            
            <div
            className='sidebar-container'>
                
                <div className='sidebar-topinfo'>
                    <img src={Logo} alt='Logo de Chirp'></img>
                    <p className='label-sm'>@anggie</p>
                    <div className='sidebar-follows'>
                        <p className='label'>Seguidoras</p>
                        <p className='label'>Seguidas</p>
                        <p className='label-sm'>74</p>
                        
                        <p className='label-sm'>45</p>
                    </div>
                </div>

                <div className='sidebar-buttons'>
                    {sidebarButtons.map((button) =>
                        <Link to={button.path}>
                        <md-ripple></md-ripple>
                        <md-icon>{button.icon}</md-icon>
                        <p className='title'>{button.label}</p>
                    </Link>
                    )}
                </div>
                <Link id='cerrar-sesion'>
                <md-ripple></md-ripple>
                    <p className='title'>Cerrar Sesión</p>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;