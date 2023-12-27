import React from 'react';
import styles from './AuthFormInput.module.css';
import PropTypes from 'prop-types';
/**
 * The component for sign up and log in page input controller.
 * @return {React.Component}
 */
export default function AuthFormInput({ type, onChange, labelText, name }) {
  return (
    <div>
      <label htmlFor={type}>
        <input
          type={type}
          id={name || type}
          name={name || type}
          placeholder={labelText || type}
          aria-label={labelText || type}
          onChange={onChange}
          className={styles.input}
          required
        />
      </label>
    </div>
  );
}

AuthFormInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  name: PropTypes.string,
};
