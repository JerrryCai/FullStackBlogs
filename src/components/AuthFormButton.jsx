import React from 'react';
import styles from './AuthFormButton.module.css';
import PropTypes from 'prop-types';
/**
 * AuthFormButton 组件用于创建一个提交表单的按钮。
 * 它接收 `children` 属性来定义按钮内部的内容。
 * @param {Object} props 属性传递给组件。
 * @param {React.ReactNode} props.children 组件内嵌的内容，通常是按钮的文本或标签。
 * @return {React.ReactElement} 返回一个 React 元素，表示一个带样式的提交按钮。
 */
export default function AuthFormButton({ children }) {
  return (
    <>
      <button type="submit" className={styles.button}>
        {children}
      </button>
    </>
  );
}

AuthFormButton.propTypes = {
  children: PropTypes.node.isRequired,
};
