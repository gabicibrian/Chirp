import React, {useState} from 'react';
import { useOutlet, useLocation, useOutletContext} from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import NavBar from './components/NavBar';
import Header from './components/Header';

const MainContent = () => {
  const location = useLocation();

  const StableOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);
  
    return outlet;
  };

  //const [selectedPanel, setSelectedPanel] = useState('para-ti-panel');

  return(
    <div className='main-content'>
      <Header/>
      <AnimatePresence mode='popLayout'>
          <motion.div
            key={location.pathname}>
          <StableOutlet/>

          </motion.div>
      </AnimatePresence>
      <NavBar />
    </div>
  )
  
}

export default MainContent