import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
/**
 * The Layout Component
 * @return {JSXElement}
 */
export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
