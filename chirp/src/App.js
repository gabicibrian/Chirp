import { useEffect, useState } from 'react';
import './css/App.css';
import Loading from './screens/Loading';
import Dashboard from './screens/Dashboard';
import NavBar from './components/NavBar';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
        setTimeout(() => setLoading(false), 5000)
  }, [])

  if(loading){
    return(
    <div className="App">
      < Loading/>
    </div>
    )
  } else{
    return(
      <div className="App">
        < NavBar/>
        < Dashboard/>
        
      </div>
    )
  }
}

export default App;
