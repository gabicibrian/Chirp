import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import './css/App.css';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Splash from './screens/Splash';
import MainContent from "./MainContent";
import Sidebar from './components/Sidebar';
import ModalSnapshot from './components/ModalSnapshot';
import Registro from "./screens/Registro";
import Contraseña1 from "./screens/Contraseña1";
import Contraseña2 from "./screens/Contraseña2";
import Contraseña3 from "./screens/Contraseña3";
import Contraseña4 from "./screens/Contraseña4";
import Access from "./screens/Access";
import Settings from "./screens/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
    errorElement: (
      <div style={{ textAlign: "center" }}>
        <h1 className="headline">404 Not Found</h1>
        <Link to="/" className="label">
          Inicio
        </Link>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Splash />,
      },
      {
        path: "/inicio",
        element: <Dashboard />,
        children: [
          {
            path: '/inicio/:snapshotId',
            element: <ModalSnapshot />,
          }
        ]
      },
      {
        path: "/busqueda",
        element: <h1 className="headline placeholder">Página de Búsqueda</h1>,
      },
      {
        path: "/amigos",
        element: <h1 className="headline placeholder">Página de Amigos</h1>,
      },
      {
        path: "/notificaciones",
        element: <h1 className="headline placeholder">Página de Notificaciones</h1>,
      },
      {
        path: '/sidebartest',
        element: <Sidebar/>
      }
    ],
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/registro',
    element: <Registro/>
  },
  {
    path: '/contraseña1',
    element: <Contraseña1/>
  },
  {
    path: '/contraseña2',
    element: <Contraseña2/>
  },
  {
    path: '/contraseña3',
    element: <Contraseña3/>
  },
  {
    path: '/contraseña4',
    element: <Contraseña4/>
  },
  {
    path: '/access',
    element: <Access/>
  },
  {
    path: '/settings',
    element: <Settings/>
  }
]);

function App() {
  return(
      <RouterProvider router={router}/>
  )
  
}

export default App;
