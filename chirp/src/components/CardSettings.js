import '../css/index.css';
import '../css/CardSettings.css';

const CardSettings = ({icon, labelItem}) => {
    return (
           
                <div className='card-settings'>
                    <md-icon>{icon}</md-icon>
                    <p className="label label-settingItem">{labelItem}</p>
                    <md-icon>chevron_right</md-icon>
                    <md-ripple>
                    </md-ripple>
                </div>
                
                
            
    );
}

export default CardSettings