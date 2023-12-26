import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.jsx';
import Blogs from './pages/Blogs.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Blog from './pages/Blog.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/blogs/:id', element: <Blog /> },
      { path: '/about-us', element: <AboutUs /> },
    ],
  },
  { path: '/sign-up', element: <SignUp /> },
  { path: '/login', element: <Login /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
