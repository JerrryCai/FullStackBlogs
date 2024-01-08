import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import styles from './Navbar.module.css';
import { FaAngleDown } from 'react-icons/fa6';
import { IoMdMenu } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '/logo-no-background.png';
import { FaRegUserCircle } from 'react-icons/fa';
/**
 * Navbar Components that shows the navigation
 * @return { JSXElement }
 */
export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  // user container
  const [username, setUsername] = useState('');
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded);
        // 假设用户名存储在 JWT 的 'username' 字段中
        setUsername(decoded.firstName);
      } catch (error) {
        // 处理无法解码的 token 或其他错误
        console.error('Error decoding token:', error);
      }
    }
  }, []);
  /**
   * Toggles the mobile navigation menu
   */
  function toggleMobileNav() {
    setShowMobileNav(!showMobileNav);
  }
  /**
   * Toggles logout container
   */
  function toggleLogout() {
    setShowLogout(!showLogout);
  }
  /**
   * handle logout function
   */
  function handleLogout() {
    localStorage.removeItem('token');
    setUsername('');
    setShowLogout(false);
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
      <NavLink
        to="/create-blog"
        className={({ isActive }) => (isActive ? 'text-accent-200' : '')}
      >
        <li className={styles.navItems}>Create Post</li>
      </NavLink>

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

  const renderedUsernameButton = username && (
    <button
      className={`${styles.button}
                  ${styles.buttonUncolored}
                  ${styles.username}`}
      onClick={toggleLogout}
    >
      <FaRegUserCircle size={25} />
      <p>{username}</p>
    </button>
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
          {/* sign up and login container */}
          {username === '' ? (
            <div className={styles.buttonContainer}>{renderedButtons}</div>
          ) : (
            <div className={styles.usernameContainer}>
              {renderedUsernameButton}
              {showLogout && (
                <button
                  className={`${styles.button}
                          ${styles.buttonUncolored}
                          ${styles.logout}`}
                  onClick={handleLogout}
                >
                  Log out
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Mobile Navbar */}
      {showMobileNav && (
        <div className={styles.mobileNavContainer}>
          <ul className={styles.navList}>{renderedNavItems}</ul>
          {username === '' && (
            <div className={styles.mobileButtonContainer}>
              {renderedButtons}
            </div>
          )}
          <div className={styles.usernameContainer}>
            {renderedUsernameButton}
            {showLogout && (
              <button
                className={`${styles.button}
                          ${styles.buttonUncolored}
                          ${styles.logout}`}
                onClick={handleLogout}
              >
                Log out
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
