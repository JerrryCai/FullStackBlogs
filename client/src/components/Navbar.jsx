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
      <li className={styles.navItems}>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? 'text-accent-200' : '')}
        >
          Blogs
        </NavLink>
      </li>
      <li className={styles.navItems}>Create Post</li>
      <li className={styles.navItems}>
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? 'text-accent-200' : '')}
        >
          About Us
        </NavLink>
      </li>
      <li className={styles.navItems}>
        Categories <FaAngleDown />
      </li>
    </>
  );

  const renderedButtons = (
    <>
      <Link to="/sign-up">
        <button className={`${styles.button} ${styles.buttonColored}`}>
          Sign Up
        </button>
      </Link>
      <Link to="/login">
        <button className={`${styles.button} ${styles.buttonUncolored}`}>
          Log In
        </button>
      </Link>
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
          <div className={styles.buttonContainer}>{renderedButtons}</div>
        </div>
      </div>
      {/* Mobile Navbar */}
      {showMobileNav && (
        <div className={styles.mobileNavContainer}>
          <ul className={styles.navList}>{renderedNavItems}</ul>
          <div className={styles.mobileButtonContainer}>{renderedButtons}</div>
        </div>
      )}
    </div>
  );
}
