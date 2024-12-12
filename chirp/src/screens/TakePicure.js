import '../css/TakePicture.css';
import {useState} from 'react';
import ssValorant2 from '../assets/snapshot-valorant-2.png';
import GalleryOption from '../components/GalleryOption.js';
import { Link } from 'react-router-dom';

const TakePicture = () => {
    const galleryButton = [
        {imgPath: `${ssValorant2}`}
    ]

    const [photoTaken, setPhotoTaken] = useState(false)
    const takePhoto = () =>{
        setPhotoTaken(!photoTaken);
    }
    console.log(photoTaken)
    
    return(
        <div className="camera-container">
            <img alt='foto tomada'src={ssValorant2} className='foto-tomada'></img>
            <div className='camera-interactions'>
                <div className="sup-button">
                    {!photoTaken &&
                    <md-filled-tonal-icon-button class='sup-back-button'>
                    <md-icon>arrow_back</md-icon>
                </md-filled-tonal-icon-button>
                    
                    }
                    {photoTaken &&
                    <md-filled-tonal-icon-button class='sup-dl-button'>
                        <md-icon>download</md-icon>
                    </md-filled-tonal-icon-button>
                    
                    }
                    
                </div>

                {!photoTaken &&
                    <div className="camera-buttons">
                    {galleryButton.map((state) => (
                        <GalleryOption
                            imgPath={state.imgPath}>
                        </GalleryOption>
                    ))}
                    
                    <div className="trigger-container" onClick={takePhoto}>
                        <div className="button-box">
                            <button className="shoot"></button>
                        </div>
                    </div>

                    <md-filled-tonal-icon-button>
                        <md-icon>flip_camera_android</md-icon>
                    </md-filled-tonal-icon-button>
                </div>
                }
                {photoTaken &&
                    <div className="camera-buttons">
                    <md-filled-button class="label btn-volver" onClick={takePhoto}>
                        Volver a tomar
                    </md-filled-button>
                    <Link to={'/subir-contenido'}>
                    <md-filled-tonal-icon-button>
                        <md-icon>arrow_forward</md-icon>
                    </md-filled-tonal-icon-button>
                    </Link>
                </div>
                }
                
                
            </div>
        </div>
    )
}

export default TakePicture