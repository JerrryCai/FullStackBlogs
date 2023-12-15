import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { IoMdMenu } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
/**
 * Navbar Components that shows the navigation
 * @return { JSXElement }
 */
export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  /**
   * Toggles the mobile navigation menu
   */
  function toggleMobileNav() {
    setShowMobileNav(!showMobileNav);
  }

  const renderedNavItems = (
    <>
      <li className="hover:text-accent-200 cursor-pointer">
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? 'text-accent-200' : '')}
        >
          Blogs
        </NavLink>
      </li>
      <li className="hover:text-accent-200">Create Post</li>
      <li className="hover:text-accent-200">About Us</li>
      <li className="hover:text-accent-200 flex items-center gap-2">
        Categories <FaAngleDown />
      </li>
    </>
  );

  return (
    <div className="bg-primary-100 px-4 sm:px-16 py-4 sm:py-6">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">LOGO</Link>
        </div>
        {/* 汉堡菜单按钮，只在小屏幕显示 */}
        <button className="sm:hidden" type="button" onClick={toggleMobileNav}>
          <IoMdMenu size={35} className="text-accent-200" />
        </button>
        {/* 导航项 - 对于小屏幕是隐藏的，但可以通过点击汉堡菜单显示 */}
        <div className="hidden sm:flex items-center gap-8">
          <ul
            className="
          flex flex-col sm:flex-row items-center gap-8 text-text-main font-bold"
          >
            {renderedNavItems}
          </ul>
          <div className="text-text-main flex gap-4">
            <button
              className="border border-accent-200 hover:bg-accent-100
            text-text-main font-bold py-2 px-4 rounded"
            >
              <Link to="/sign-up">Sign Up</Link>
            </button>
            <button
              className="
            bg-accent-200 hover:bg-accent-100
            text-white font-bold py-2 px-4 rounded"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      {showMobileNav && (
        <div className="flex flex-col items-center sm:hidden">
          <ul
            className="
          flex flex-col items-center gap-4 text-text-main font-bold"
          >
            {renderedNavItems}
          </ul>
          <div className="text-text-main flex items-center gap-4 mt-4">
            <button
              className="border border-accent-200 hover:bg-accent-100
            text-text-main font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>
            <button
              className="bg-accent-200 hover:bg-accent-100
            text-white font-bold py-2 px-4 rounded"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
