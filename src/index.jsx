import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import NotFound from './pages/not-found';
import { Palette } from './data';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // {
  //   path: "/refyne-india", 
  //   element: <Refyne />
  // },
  {
    path: "*", 
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className={`w-full h-screen bg-[${Palette.primary}]`}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);