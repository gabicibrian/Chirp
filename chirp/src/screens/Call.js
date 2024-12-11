import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../css/ChatDM.css'
import pfpGatito from '../assets/pfp-gatito.png';

const Call = () =>{
  const navigate = useNavigate();
  const {id} = useParams();

  const [callClass, setCallClass] = useState(false)
  const closeCall = () => {
    setCallClass(true);
    setTimeout(() => {
      navigate(-1)
    }, 150);
  }
  
    return (
      <div
      className={!callClass ? 'call-container' : 'call-container exit-call'}>
        <div className="call-header">
          <md-icon-button onClick={closeCall}>
            <md-icon>arrow_back</md-icon>
          </md-icon-button>
          <h1 className="headline">{id}</h1>
        </div>
        <img className='call-profile' src={pfpGatito} alt='foto de perfil de un gato vestido de bruja'></img>
        <h2 className='headline timer'>00:01</h2>
        <md-filled-tonal-button class='label audio-btn'>
          Conectar audio de PC
          <md-icon slot="icon">devices</md-icon>
        </md-filled-tonal-button>

        <div className='call-buttons'>
        <md-filled-icon-button toggle class='mic-btn'>
            <md-icon>
            mic_off
            </md-icon>
            <md-icon slot="selected">
            mic
            </md-icon>
        </md-filled-icon-button>
        <md-filled-icon-button class='hang-btn' onClick={closeCall}>
            <md-icon>
            call_end
            </md-icon>
        </md-filled-icon-button>
        </div>
      </div>
    )
}

export default Call
