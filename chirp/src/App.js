import { useEffect, useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import './css/App.css';
import Splash from './screens/Splash';
import Dashboard from './screens/Dashboard';
import NavBar from './components/NavBar';



function App() {
  //Estados y time out para pasar del splash a home
  const [splash, setSplash] = useState(true)
  useEffect(() => {
        setTimeout(() => setSplash(false), 5300)
  }, [])

  //Estados para determinar la sección donde se encuentra el user
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const pageRendered = () => {
    switch (currentPage) {
      case 'Dashboard':
        return (<Dashboard />);
      case 'Busqueda':
        return (<h1 className='headline'>Página de Búsqueda</h1>);
      case 'Amigos':
        return (<h1 className='headline'>Página de Amigos</h1>);
      case 'Notificaciones':
        return (<h1 className='headline'>Página de Notificaciones</h1>);
      default:
        return (<h1 className='headline'>Página no encontrada</h1>);
    }
  }
  
  if(splash){
    return(
      <AnimatePresence>
        {splash && (
          <motion.div
            key={'splash'}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: 1}}
            className="App">
              
              <Splash />    
          </motion.div>)}
      </AnimatePresence>
    )
  } else{
    return(
      <div className="App">
        <div className='main-content'>
          {pageRendered()}
        </div>
        
        < NavBar setPage={setCurrentPage} selectedPage={currentPage}/>
        
      </div>
    )
  }
  
  //Para testear paginas
   /* return(
      <Splash/>
    )*/
}

export default App;
