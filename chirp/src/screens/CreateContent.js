import '../css/index.css';
import '../css/CreateContent.css';
import CardNew from '../components/CardNew.js';
import ssValorant2 from '../assets/snapshot-valorant-2.png';
import { useState } from "react";

const CreateContent = () => {
    const [caption, setCaption] = useState('');
    const newCaption = (e) => {
        e.preventDefault();
        localStorage.setItem('caption', setCaption);
        //setOpenDialog(true);
    };
    
    const subirSnapshot = [
        {size:'vertical', imgPath:`${ssValorant2}`}
    ]

    return (
        <div className='content-container'>
            <div className="header-content">
                <md-filled-tonal-icon-button>
                    <md-icon>arrow_back</md-icon>
                </md-filled-tonal-icon-button>
                <h1 className="headline">Nueva Snapshot</h1>
            </div>
            <form onSubmit={newCaption}>
                {subirSnapshot.map((snapshot) => (
                    <CardNew
                        size={snapshot.size}
                        imgPath={snapshot.imgPath}
                        onInput={(e)=>setCaption(e.target.value)}
                    ></CardNew>
                ))}
                <div className='create-buttons'>
                    <md-filled-button class="label btn-container">
                        Publicar
                    </md-filled-button>
                </div>
            </form>
            
            
            <div className='create-buttons'>
                <md-text-button class="label btn-container">
                    Descartar
                </md-text-button>
            </div>
        </div>
    )
}

export default CreateContent