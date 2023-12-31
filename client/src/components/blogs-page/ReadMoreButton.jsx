import React from 'react';
import styles from './ReadMoreButton.module.css';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
/**
 * Read more button components for the post cards
 * @return {React.Component}
 */
export default function ReadMoreButton() {
  return (
    <Link to="/blogs/:id">
      <button className={styles.button} type="button">
        Read more
        <FaAngleRight size={24} />
      </button>
    </Link>
  );
}
