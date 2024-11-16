import { useEffect, useState } from 'react';
import './css/App.css';
import Splash from './screens/Splash';
import Dashboard from './screens/Dashboard';
import NavBar from './components/NavBar';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';

function App() {
  //Estados y time out para pasar del splash a home
  const [splash, setSplash] = useState(true)
  useEffect(() => {
        setTimeout(() => setSplash(false), 5000)
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
    <div className="App">
        <Splash />
    </div>
    )
  } else{
    return(
      <div className="App">
        <div className='main-content'>
          {pageRendered()}
        </div>
        < NavBar setPage={setCurrentPage}/>
        
      </div>
    )
  }

    /*return(
      <Header/>
    )*/
}

export default App;
