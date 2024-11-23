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
      <div className='splash-container'>           
        <Lottie
            options={defaultOptions}
            height={450}
            width={391}
        />
        <img src={logo} alt='Logo de Chirp' className='splash-logo'></img>
      </div>
    )
}

export default Splash;

