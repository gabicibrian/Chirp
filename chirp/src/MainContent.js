import React, {useState} from 'react';
import { useLocation, Outlet } from "react-router-dom";
//import { AnimatePresence, motion } from "motion/react";

import NavBar from './components/NavBar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export const Context = React.createContext()

const MainContent = () => {
  const location = useLocation();
  //const username = localStorage.getItem("user");

  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    openSidebar=== true ? setOpenSidebar(false) : setOpenSidebar(true);
  }

  const [searchResults, setSearchResults] = useState('')
  /*const StableOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);
  
    return outlet;
  };*/
 
  const [selectedPanel, setSelectedPanel] = useState('para-ti-selected');

  return(
    
    <div className='main-content'>
      <Context.Provider value={[ selectedPanel, setSelectedPanel, searchResults, setSearchResults ]}>
      {location.pathname !== '/perfil' &&
        <Header page={location.pathname} openSidebar={toggleSidebar}/>
      }
      
      <Sidebar isOpen={openSidebar} closeSidebar={toggleSidebar}/>
      

      
            <Outlet />
            
      
      </Context.Provider>
      {location.pathname === '/chats' &&
        <md-fab aria-label="Publicar">
          <md-icon slot="icon">add_comment</md-icon>
        </md-fab>
      }
      {location.pathname !== '/chats' &&
        <md-fab aria-label="Publicar">
          <md-icon slot="icon">add</md-icon>
        </md-fab>
      }
      
      <NavBar />
    </div>
    

  )
  
}

export default MainContent