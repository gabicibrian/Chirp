import '../css/PictureConfig.css';

const PictureConfig = ({icon, takePic, icon2}) => {

    if(takePic){
        return(
            <div className='camera-container'>
                <div className='button-sup'>
                    <md-filled-tonal-icon-button>
                        <md-icon>{icon}</md-icon>
                    </md-filled-tonal-icon-button>
                </div>
                <div className='cameraActions'>
                    <button className="trigger-container">
                        <button className="shoot"></button>
                    </button>
                   
                    <md-filled-tonal-icon-button>
                        <md-icon>{icon2}</md-icon>
                    </md-filled-tonal-icon-button>
                </div>
            </div>
        )
        
    } else{
        return(
            <div className='camera-container'>
                <div className='button-sup'>
                    <md-filled-tonal-icon-button>
                        <md-icon>{icon}</md-icon>
                    </md-filled-tonal-icon-button>
                </div>
                <div className='cameraActions'>
                    <md-filled-tonal-button>Volver a tomar</md-filled-tonal-button>
                    <md-filled-tonal-icon-button>
                        <md-icon>{icon2}</md-icon>
                    </md-filled-tonal-icon-button>
                </div>
            </div>
        )
    }
}


 
export default PictureConfig