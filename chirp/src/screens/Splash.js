import '../css/Splash.css';
import logo from '../assets/logo.svg';
import animation from '../assets/splash-animation.json';
import Lottie from 'react-lottie';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
        navigate('/inicio');
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
        initial={{left:0}}
        animate={{left:0}}
        exit={{left:'-500px'}}
        transition={{duration: 0.5, ease: 'easeOut'}}
        className='splash-container'>           
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

