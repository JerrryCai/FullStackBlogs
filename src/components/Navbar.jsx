import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaAngleDown } from 'react-icons/fa6';
import { IoMdMenu } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '/logo-no-background.png';
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
      <li className="cursor-pointer hover:text-accent-200">
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? 'text-accent-200' : '')}
        >
          Blogs
        </NavLink>
      </li>
      <li className="hover:text-accent-200">Create Post</li>
      <li className="hover:text-accent-200">
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? 'text-accent-200' : '')}
        >
          About Us
        </NavLink>
      </li>
      <li className="flex items-center gap-2 hover:text-accent-200">
        Categories <FaAngleDown />
      </li>
    </>
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div>
          <Link to="/">
            <img src={logoImg} alt="logo" className={styles.logo} />
          </Link>
        </div>
        {/* 汉堡菜单按钮，只在小屏幕显示 */}
        <button
          className={styles.mobileNavContainer}
          type="button"
          onClick={toggleMobileNav}
        >
          <IoMdMenu size={35} className={styles.mobileNavIcon} />
        </button>
        {/* 导航项 - 对于小屏幕是隐藏的，但可以通过点击汉堡菜单显示 */}
        <div className={styles.navListContainer}>
          <ul className={styles.navList}>{renderedNavItems}</ul>
          <div className={styles.buttonContainer}>
            <button className={`${styles.button} ${styles.buttonColored}`}>
              <Link to="/sign-up">Sign Up</Link>
            </button>
            <button className={`${styles.button} ${styles.buttonUncolored}`}>
              Log In
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      {showMobileNav && (
        <div className="flex flex-col items-center sm:hidden">
          <ul
            className="
          flex flex-col items-center gap-4 font-bold text-text-main"
          >
            {renderedNavItems}
          </ul>
          <div className="mt-4 flex items-center gap-4 text-text-main">
            <button
              className="rounded border border-accent-200
            px-4 py-2 font-bold text-text-main hover:bg-accent-100"
            >
              Sign Up
            </button>
            <button
              className="rounded bg-accent-200
            px-4 py-2 font-bold text-white hover:bg-accent-100"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
