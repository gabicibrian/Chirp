import React, {useState} from 'react'
import '../css/Chats.css'
import CardUser from '../components/CardUser'
import pfpGatito from '../assets/pfp-gatito.png';
import pfpAmogus from '../assets/snapshot-amongus.png'
import pfpStumble from '../assets/snapshot-stumbleguys.png';

const Chats = () =>{
  const [segment, setSegment] = useState('none')

    const animData = () =>{
      if (segment === 'amigos') {
        return 'left'
      } else if(segment === 'comunidades'){
        return 'right'
      }
    }

  const animState = animData();
  
    return (
      <div className='chats-container'>
        <div className='segmented-btn'>
            <button onClick={() => setSegment('amigos')}
            className = {segment === 'none' || segment === 'amigos' ? 'selected-segment label' : 'label'}>
            <md-ripple></md-ripple>
                Amigos
            </button>
            <button onClick={() => setSegment('comunidades')}
              className = {segment === 'comunidades' ? 'selected-segment label' : 'label'}>
            <md-ripple></md-ripple>
                Comunidades
            </button>
        </div>
        <div
        className={`chats-segmented ${animState}`}>
          <div className='chats-cards'>
            <CardUser
            type='chat' person={1} pfpImg={[pfpStumble]}
            user='madison'
            description='Tú: holis'
            time='11:11' />
    
            <CardUser
            type='chat' person={1} pfpImg={[pfpGatito]}
            user='anggie'
            description='Tú: holaaa'
            time='10:59' />
            
          </div>
          <div className='chats-cards'>
            <CardUser
              type='chat' person={2} pfpImg={[pfpStumble, pfpGatito, pfpGatito]}
              user='muchas vacalolas'
              description='hey, les queria preguntar si alguna vez han jugado este juego?'
              time='12:35' badgeNumber={13}/>
            <CardUser
              type='chat' person={1} pfpImg={[pfpStumble]}
              user='stumble guys'
              description='lola: partidita?'
              time='12:35'/>
            <CardUser
              type='chat' person={1} pfpImg={[pfpAmogus]}
              user='amogus'
              description='anggie: vieron el update?'
              time='12:35' badgeNumber={1}/>
          </div>
        </div>
      </div>
    )
}

export default Chats
