import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import './css/App.css';
import Dashboard from './screens/Dashboard';
import Splash from './screens/Splash';
import MainContent from "./MainContent";

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
    ],
  },
]);

function App() {
  return(
      <RouterProvider router={router}/>
  )
  
}

export default App;
