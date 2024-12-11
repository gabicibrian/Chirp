import '../css/GalleryOption.css';

const GalleryOption = ({imgPath}) => {
    return (
        <button className='button'>
            <div className='galleryButton-container'>
                <img alt='agregar desde galería' src={imgPath} className='picture'></img>
            </div>
        </button>
    )
}

export default GalleryOption