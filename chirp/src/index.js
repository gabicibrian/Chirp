import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import './css/index.css';

import App from './App';
import Dashboard from './screens/Dashboard';
import Splash from './screens/Splash';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Dashboard />,
      }
    ]
  },
  {
    path: '/.',
    element: <Splash />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

