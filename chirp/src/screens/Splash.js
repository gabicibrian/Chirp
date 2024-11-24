import '../css/Splash.css';
import logo from '../assets/logo.svg';
import animation from '../assets/splash-animation.json';
import Lottie from 'react-lottie';
import { useNavigate } from "react-router-dom";
import { useEffect,} from "react";
import { motion } from "motion/react";

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate('/acceso');
      }, 5000);
    }, [navigate])

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
   
    return(
      <motion.div 
      exit= {{opacity: 0}}
      animate= {{opacity: 1}}
      transition={{ duration: 0.5, ease: "easeInOut" }} className='splash-container'>           
        <Lottie
            options={defaultOptions}
            height={450}
            width={391}
        />
        <img src={logo} alt='Logo de Chirp' className='splash-logo'></img>
      </motion.div>
    )
}

export default Splash;

