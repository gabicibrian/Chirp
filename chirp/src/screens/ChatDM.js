import React, {useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../css/ChatDM.css'
import pfpGatito from '../assets/pfp-gatito.png';
//import { userList } from '../components/SnapshotConfig';

const ChatDM = () =>{
  const navigate = useNavigate();
  const {id} = useParams();

  const mensajes = [
    "¿Estás lista para una partida épica?",
    "¿Qué tal? ¿Cómo va tu ranking?",
    "¿Te unes al squad esta noche?",
    "Estaba pensando en jugar un rato, ¿quieres unirte?",
    "¿Qué juegos tienes en mente para hoy? Estoy buscando algo nuevo."
  ];

  const date = new Date();
  const showTime = date.getHours() + ':' + date.getMinutes() 
  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState([])
  const sendMessage = (e) => {
    e.preventDefault();

    if (newMessage.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
    ]);

    setNewMessage("");
  };
    return (
      <div className='dm-container'>
        <div className="dm-header">
          <md-icon-button onClick={() => navigate(-1)}>
            <md-icon>arrow_back</md-icon>
          </md-icon-button>
          <h1 className="headline">{id}</h1>
          <Link key={id}
            to={`/llamada/${id}`}>
            <md-icon-button>
              <md-icon>call</md-icon>
            </md-icon-button>
          </Link>
      </div>
        <div className='dms'>
            <div className='dm-in'>
                <div className='dm'>
                    <p className='body'>Holaaa</p>
                    <p className='label-sm'>18:52</p>
                </div>
            </div>
            <div className='dm-in with-pfp'>
            <img src={pfpGatito} alt='foto de perfil'></img>
                <div className='dm'>
                    <p className='body'>{mensajes[Math.floor(Math.random() * mensajes.length)]}</p>
                    <p className='label-sm'>18:53</p>
                </div>
            </div>
            {messages.map((item, index) => (
                <div className='dm-out'>
                <div className='dm'>
                    <p className='body'>{item}</p>
                    <p className='label-sm'>{showTime}</p>
                </div>
            </div>
              ))}
        </div>
        <form onSubmit={sendMessage} className="send-dm">
          <md-outlined-text-field class='input-default'
            placeholder="Envíar mensaje..."
            value={newMessage} reset
            onInput={(e) => setNewMessage(e.target.value)}
            >
            </md-outlined-text-field>

          <md-filled-icon-button type="submit">
            <md-icon>send</md-icon>
          </md-filled-icon-button>
        </form>
      </div>
    )
}

export default ChatDM
