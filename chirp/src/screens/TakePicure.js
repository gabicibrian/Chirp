import '../css/TakePicture.css';
import '../css/index.css';
import ssValorant2 from '../assets/snapshot-valorant-2.png';
import GalleryOption from '../components/GalleryOption.js';
import CameraTrigger from '../components/CameraTrigger.js';

const TakePicture = () => {
    const galleryButton = [
        {imgPath: `${ssValorant2}`}
    ]
    
    
    return(
        <div className="camera-container">
            <img alt='foto tomada'src={ssValorant2} className='foto-tomada'></img>
            <div className='camera-interactions'>
                <div className="sup-button">
                    <md-filled-tonal-icon-button>
                        <md-icon>arrow_back</md-icon>
                    </md-filled-tonal-icon-button>
                </div>
                <div className="camera-buttons">
                    {galleryButton.map((state) => (
                        <GalleryOption
                            imgPath={state.imgPath}>
                        </GalleryOption>
                    ))}
                    
                    <CameraTrigger></CameraTrigger>

                    <md-filled-tonal-icon-button>
                        <md-icon>flip_camera_android</md-icon>
                    </md-filled-tonal-icon-button>
                </div>
                
                
            </div>
        </div>
    )
}

export default TakePicture