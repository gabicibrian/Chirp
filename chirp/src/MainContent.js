import React, {useState} from 'react';
import { useOutlet, useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import NavBar from './components/NavBar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export const Context = React.createContext()

const MainContent = () => {
  const location = useLocation();
  const username = localStorage.getItem("user");

  /*const StableOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);
  
    return outlet;
  };*/
 
  const [selectedPanel, setSelectedPanel] = useState('para-ti-selected');
 
  
   //console.log('main content: ' , selectedPanel)

  return(
    
    <div className='main-content'>
      <Context.Provider value={[ selectedPanel, setSelectedPanel ]}>
      <Header page={location.pathname}/>
      

          
            <Outlet />
          
      </Context.Provider>
      <NavBar />
    </div>
    

  )
  
}

export default MainContent