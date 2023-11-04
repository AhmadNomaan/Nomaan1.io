import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Contact from './pages/contact';
import Home from './pages/home';
import About from './pages/about';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home title="home"/>,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='w-full h-screen'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);