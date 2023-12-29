import React from 'react';
import Home from './pages/Home';
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
      { path: '/', element: <Home /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/blogs/:id', element: <Blog /> },
      { path: '/about-us', element: <AboutUs /> },
    ],
  },
  { path: '/sign-up', element: <SignUp /> },
  { path: '/login', element: <Login /> },
]);

/**
 * App component that displays the main content.
 * @return {JSX.Element}
 */
export default function App() {
  return <RouterProvider router={router} />;
}
