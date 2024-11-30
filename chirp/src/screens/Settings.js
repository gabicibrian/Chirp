import '../css/index.css';
import '../css/Settings.css';
import CardSettings from '../components/CardSettings';
import NavBar from '../components/NavBar';

const Settings = () =>{

    const settingItem = [
        { icon: "account_circle",
          labelItem: "Cuenta",
        },
        { icon: "language",
          labelItem: "Idioma",
        },
        { icon: "lock",
          labelItem: "Privacidad",
        },
        { icon: "headphones",
          labelItem: "Preferencias de Audio",
        },
        { icon: "settings_accessibility",
          labelItem: "Accesibilidad",
        },
        { icon: "schedule",
          labelItem: "Tiempo en Pantalla",
        },
        { icon: "help",
          labelItem: "Ayuda y Soporte Técnico",
        },
        { icon: "description",
          labelItem: "Condiciones y Políticas",
        },
    ]
    
    return (
        <div className="container-settings">
            <div className='container-header'>
                <div className='header-settings'>
                    <md-icon>arrow_back</md-icon>
                    <h1 className='headline'>Configuración</h1>
                </div>
            </div>

            <div className='container-settingItems'>
                {settingItem.map((item) =>(
                    <CardSettings
                        icon={item.icon}
                        labelItem={item.labelItem}
                    >
                    </CardSettings>
                ))}
            </div>
            <NavBar></NavBar>
        </div>

        
    );
}



export default Settings