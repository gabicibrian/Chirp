import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import './css/App.css';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Splash from './screens/Splash';
import MainContent from "./MainContent";
import ModalSnapshot from './components/ModalSnapshot';
import Registro from "./screens/Registro";
import RestorePassword from "./screens/RestorePassword";
import Password1 from "./screens/Password1";
import Password2 from "./screens/Password2";
import Password3 from "./screens/Password3";
import Access from "./screens/Access";
import Settings from "./screens/Settings";
import Chats from "./screens/Chats";
import Notifications from "./screens/Notifications";
import Search from "./screens/Search";
import ChatDM from "./screens/ChatDM";
import Call from "./screens/Call";
import Profile from "./screens/Profile";
import TakePicture from "./screens/TakePicure";
import CreateContent from "./screens/CreateContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent/>,
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
        path: '/inicio/:id',
        element: <ModalSnapshot />,
      }
        ]
      },
      {
        path: "/busqueda",
        element: <Search/>,
      },
      {
        path: '/chats',
        element: <Chats/>,
        children: [
          {
            path: '/chats/:id',
            element: <ModalSnapshot />,
          }
            ]
      },
      {
        path: "/notificaciones",
        element: <Notifications />,
        children: [
          {
            path: '/notificaciones/:id',
            element: <ModalSnapshot />,
          }
            ]
      },
      {
        path: '/configuraciones',
        element: <Settings/>
      },
      {
        path: '/mi-perfil/',
        element: <Profile/>,
        children: [
          
          {
            path: '/mi-perfil/:id',
            element: <ModalSnapshot />,
          }
            ]
      },
      {
        path: '/:id',
        element: <Profile/>,
        children: [
          
          {
            path: '/:id/:id',
            element: <ModalSnapshot />,
          }
            ]
      }
    ],
  },
  {
    path: '/acceso',
    element: <Access/>
  },
  {
    path: '/inicio-sesion',
    element: <Login/>
  },
  {
    path: '/registro',
    element: <Registro/>
  },
  {
    path: '/restaurar-contrasena',
    element: <RestorePassword/>,
    children: [
      {
        path: '/restaurar-contrasena',
        element: <Password1/>
      },
      {
        path: '/restaurar-contrasena/codigo',
        element: <Password2/>
      },
      {
        path: '/restaurar-contrasena/cambio',
        element: <Password3/>
      }
    ]
  },
  {
    path: '/camara',
    element: <TakePicture/>
  },
  {
    path: '/subir-contenido',
    element: <CreateContent/>
  },
  {
    path: '/mensaje-directo/:id',
    element: <ChatDM />
  },
  {
    path: 'llamada/:id',
    element: <Call />
  }
  
]);

function App() {
  return(
      <RouterProvider router={router}/>
  )
  
}

export default App;
