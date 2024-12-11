import { use } from 'react';
import '../css/CardUser.css';
import { Link } from 'react-router-dom';

const CardUser = ({type, person, online, pfpImg, user,  description, time, badgeNumber, notiType}) => {
    //parametros
    //type: chat, resultados o noti
    //person: 1, 2 (dicta cuantas fotos de perfil van a salir 1 o 2+)
    //online: true, false (visibilidad del badge online)
    //user: string (usernames o nombre de grupo)
    //description: string
    //time: tiempo como string eg. '22:30'
    //badge: true, false (si se va a mostrar el badge o no)
    //badgeNumber: numero que va a salir en el badge de notis
    //notiType: like, comment, follow

    /* Ejemplo:
        <CardUser
                type='noti' person={2} pfpImg={[pfpGatito, pfp, pfp]}
                user='vacalola, vacalola, vacalola, vacalola, vacalola' time='15:20'
                description='Le gustó tu snapshot'
                notiType='follow'
        />
    */
   let id = user;
    let notiIcon;
    switch (notiType) {
        case 'like':
            notiIcon = 'favorite';
            break;
        case 'comment':
            notiIcon = 'chat_bubble';
            break;
        case 'follow':
            notiIcon = 'person_add';
            break;
        default:
            break;
    }
    
    if (type === 'chat') {
        return (  
            <Link key={id}
            to={`/mensaje-directo/${id}`}
            className='card-user'>
                <md-ripple></md-ripple>
                <div className='user-profile'>
                    {person === 1 &&
                        <img src={pfpImg[0]} alt='Foto de perfil'></img>
                    }
                    {person === 2 &&
                    <div className='group-profiles'>
                        {pfpImg.slice(0, 4).map((item) =>  
                            <img src={item} alt='Foto de perfil' />
                        )}
                    </div>
                    }
                    {online &&
                        <span className='online-badge '></span>
                    }
                    
                </div>
                <div className='user-text'>
                    <div className='user-title'>
                        <p className='label'>{user}</p>
                        {badgeNumber &&
                            <div className='noti-badge label-sm'>{badgeNumber}</div>
                        }
                    </div>
                    <p className='card-description body'>{description}</p>
                    <p className='label-sm card-time'>{time}</p>
                </div>
            </Link>     
        );  
    } else if(type === 'resultados'){
        return(
            <div className='card-user'>
                <md-ripple></md-ripple>
                <div className='user-profile'>
                    <img src={pfpImg[0]} alt='Foto de perfil'></img>
                </div>
                <div className='user-text'>
                    <p className='label'>{user}</p>
                    <p className='card-description label-sm'>{description}</p>
                </div>
            </div>  
        )
    } else if(type === 'noti'){
        return(
        <div className='card-user card-notification'>
                <md-ripple></md-ripple>
                <div className='user-profile'>
                    {person === 1 &&
                        <img src={pfpImg[0]} alt='Foto de perfil'></img>
                    }
                    {person === 2 &&
                    <div className='group-profiles'>
                        {pfpImg.slice(0, 4).map((item) =>  
                            <img src={item} alt='Foto de perfil' />
                        )}
                    </div>
                    }
                </div>
                <div className='user-text'>
                    <div className='user-title'>
                        <p className='label'>{user}</p>
                        <md-icon>{notiIcon}</md-icon>
                    </div>
                    <p className='card-description body'>{description}</p>
                    <p className='label-sm card-time'>{time}</p>
                </div>
            </div>  )
    }
    
}

export default CardUser