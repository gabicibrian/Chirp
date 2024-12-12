import React from 'react'
import CardUser from '../components/CardUser'
import '../css/Chats.css';
import pfpGatito from '../assets/pfp-gatito.png';
import pfpAmogus from '../assets/snapshot-amongus.png'
import pfpStumble from '../assets/snapshot-stumbleguys.png';
import { Outlet } from 'react-router-dom';

const Notifications = () => {

    const notiList = [
        {
            person: 1,
            pfpImg: [pfpGatito],
            user: 'mabel97',
            time: '16:30',
            description: 'Comentó en tu snapshot',
            notiType:'comment'
        },
        {
            person: 1,
            pfpImg: [pfpGatito],
            user: 'mabel97',
            time: '16:29',
            description: 'Comenzó a seguirte',
            notiType:'follow'
        },
        {
            person: 1,
            pfpImg: [pfpGatito],
            user: 'mabel97',
            time: '16:28',
            description: 'Le gustó tu snapshot',
            notiType:'like'
        },
        {
            person: 2,
            pfpImg: [pfpGatito, pfpAmogus, pfpStumble],
            user: 'la.mas.coquette, mabel97, dariii, france.valle, ana.marissa23',
            time: '13:28',
            description: 'Les gustó tu snapshot',
            notiType:'like'
        },
        {
            person: 2,
            pfpImg: [pfpGatito,pfpStumble, pfpAmogus ],
            user: 'la.mas.coquette, mabel97, dariii, france.valle, ana.marissa23',
            time: 'Ayer',
            description: 'Les gustó tu snapshot',
            notiType:'like'
        },
        {
            person: 2,
            pfpImg: [pfpGatito, pfpAmogus],
            user: 'la.mas.coquette y dariii',
            time: 'Hace una semana',
            description: 'Les gustó tu snapshot',
            notiType:'like'
        },
    ]

    return (
      <div className='noti-container'>
        {notiList.map((card) => 
        <CardUser
            type='noti' person={card.person} pfpImg={card.pfpImg}
            user={card.user} time={card.time}
            description={card.description}
            notiType={card.notiType}
        />
        )}
        <Outlet />
        
    </div>
    )
  
}

export default Notifications