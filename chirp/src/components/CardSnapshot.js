import '../css/CardSnapshot.css';
import heart from '../assets/heart.svg';

const CardSnapshot = ({size, imgPath ,poster, caption, profileView, user1, comment1, user2, comment2}) => {
    if (profileView) {
        return(
            <div className={`card-snapshot ${size}`}>
                <div className='snapshot-caption'>
                    <p className='label'>snapshot de </p>
                    <p className='body'>{poster}</p>
                </div>
                
                <img src={imgPath} alt='Snapshot' className='snapshot-photo'></img>
                
                <div className='snapshot-caption'>
                    <p className='label'>{poster}:</p>
                    <p className='body ellipsis'>{caption}</p>
                    <md-icon-button>
                        <md-icon>home</md-icon>
                    </md-icon-button>
                </div>

                <div className='snapshot-comments'>
                    <p className='label'>Comentarios</p>
                </div>

                <div className='snapshot-txt'>
                    <p className='label'>{user1}:</p>
                    <p className='body ellipsis'>{comment1}</p>
                </div>

                <div className='snapshot-txt'>
                    <p className='label'>{user2}:</p>
                    <p className='body ellipsis'>{comment2}</p>
                </div>
            </div>
        )
    } else{
        return(
            <div className={`card-snapshot ${size}`}>
                <img src={imgPath} alt='Snapshot' className='snapshot-photo'></img>

                <div className='snapshot-caption'>
                    <p className='label'>{poster}:</p>
                    <p className='body ellipsis'>{caption}</p>
                    <md-icon-button selected>
                        <md-icon>favorite_border</md-icon>
                        <md-icon slot="selected">favorite</md-icon>
                    </md-icon-button>
                </div>
            </div>
        )
    }
}

export default CardSnapshot;