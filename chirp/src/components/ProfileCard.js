import '../css/ProfileCard.css';
import { NavLink } from "react-router-dom";

const ProfileCard = ({imgPath}) => {

    const name = localStorage.getItem("name");
    const username = localStorage.getItem("user")

    const back = [
        {icon: 'arrow_back', path: '/inicio', key: 'dashboard'},
        {icon: 'settings', path: '/configuraciones', key:'settings'}
    ]

    return (
        <div className='container-profileCard'>
            <div className='options'>
                {back.map((button) =>
                    <NavLink
                        key={button.key}
                        to={button.path}>   
                     <md-icon-button>
                         <md-icon>{button.icon}</md-icon>
                     </md-icon-button>
                    </NavLink>
                )}
               
            </div>
            <div className='userProfile'>
                <div className='userStatus'>
                    <img alt='foto de perfil' src={imgPath}></img>
                    <div className='status-container'>
                        <div className='status'></div>
                    </div>
                    
                </div>
                <div className='profile-follows'>
                    <p className='label'>Seguidoras</p>
                    <p className='label'>Seguidas</p>
                    <p className='label-sm'>74</p>
                    <p className='label-sm'>45</p>
                </div>
            </div>
            <div className='userInfo-container'>
                <div>
                    <h1 className='headline'>{name}</h1>
                </div>
                <div>
                    <p className='label-sm'>@{username}</p>
                </div>
                <div className='body userBio'>
                    <p>🌸🎀</p>
                    <p>Love yourself ♥</p>
                </div>
                <div className='edit-profile'>
                    <md-elevated-button class="surface">
                    Editar perfil
                        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                    </md-elevated-button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard