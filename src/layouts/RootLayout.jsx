import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Navbar';
/**
 * The Layout Component
 * @return {JSXElement}
 */
export default function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
