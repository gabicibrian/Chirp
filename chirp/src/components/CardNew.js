import '../css/CardNew.css';

const CardNew = ({size, imgPath}) => {
//Tipos de props o propiedades: size-string, imgPath-string/img, poster/caption-string
//                              profileView-bool, user1/comment1/user2/comment2-string


    return(
        <div className='card-newSnapshot'>
            <div className='photo-container'>
                <img src={imgPath} alt='Snapshot' className={`'newSnapshot-photo' ${size}`}></img>
            </div>
            <div className='newSnapshot-caption'>
                <textarea 
                    className='body caption-textarea ellipsis-new' 
                    placeholder='Escribir caption...'>
                </textarea>
            </div>
            <div className='addMusic-container'>
                <p className='body'>
                <md-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" 
                    width="24px" fill="#e8eaed">
                    <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 
                    0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z"/></svg>
                </md-icon>
                Agregar música</p>
                <md-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" 
                    width="24px" fill="#e8eaed">
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                </md-icon>
            </div>
            <div className="chipCarrousel-container">
                <md-chip-set class="chip-carrousel">
                    <md-filter-chip class='chip' label="Sunflower - Post Malone & Swae Lee" elevated></md-filter-chip>
                    <md-filter-chip class='chip' label="Houdini - Dualipa" elevated></md-filter-chip>
                </md-chip-set>
            </div>
        </div>
    )
}

export default CardNew;