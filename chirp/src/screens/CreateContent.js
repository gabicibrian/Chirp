import '../css/index.css';
import '../css/CreateContent.css';
import CardNew from '../components/CardNew.js';
import ssValorant2 from '../assets/snapshot-valorant-2.png';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CreateContent = () => {
    const navigate = useNavigate()
    const [caption, setCaption] = useState('');
    
    const newCaption = (e) => {
        e.preventDefault();
        localStorage.setItem('caption', caption);
        //setOpenDialog(true);
    };

    const [openDialog, setOpenDialog] = useState(false);
    const closeDialog = () =>{
        setOpenDialog(false);
    }

    const discard  = () => {
        setOpenDialog(true);
    }
    
    const subirSnapshot = [
        {size:'vertical-new', imgPath:`${ssValorant2}`}
    ]

    return (
        <div className='content-container'>
            <div className="header-content">
                <md-filled-tonal-icon-button onClick={() => navigate(-1)}>
                    <md-icon>arrow_back</md-icon>
                </md-filled-tonal-icon-button>
                <h1 className="headline">Nueva Snapshot</h1>
            </div>
            <form onSubmit={newCaption}>
                {subirSnapshot.map((snapshot) => (
                    <CardNew
                        size={snapshot.size}
                        imgPath={snapshot.imgPath}
                        value={caption}
                        onInput={(e)=>setCaption(e.target.value)}
                    ></CardNew>
                ))}
                <div className='create-buttons'>
                    <md-filled-button class="label btn-container" onClick={() => navigate('/perfil')}>
                        Publicar
                    </md-filled-button>
                </div>
            </form>
            
            
            <div className='create-buttons'>
                <md-text-button class="label btn-container" onClick={discard}>
                    Descartar
                </md-text-button>
            </div>

            <md-dialog {...(openDialog ? {open:true} : {})} class='dialog'>
                <div slot="headline" className='title'>Descartar publicación</div>
                <form slot="content" id="form-discard" method="dialog" class="body">
                ¿Estás seguro que quieres descartar esta publicación?
                </form>
                <div slot="actions">
                    <md-text-button form="form-discard" value="cancel" class="label" onClick={closeDialog}>Cancelar</md-text-button>
                    <md-text-button form="form-discard" value="delete" class="label" onClick={() => navigate('/inicio')}>Eliminar</md-text-button>
                </div>
            </md-dialog>
        </div>
    )
}

export default CreateContent