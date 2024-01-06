import React, { useContext } from 'react';
import imagePlaceholder from '../../assets/images/Image-Placeholder.png';
import { FaAngleRight } from 'react-icons/fa';
import { LuDot } from 'react-icons/lu';
import { IoIosLink, IoLogoLinkedin } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io5';
import { BsTwitterX } from 'react-icons/bs';
import styles from './BlogHeader.module.css';
import { BlogContext } from '../../pages/Blog';
/**
 * Blog header of every posts
 * @return {React.Component}
 */
export default function BlogHeader() {
  const blog = useContext(BlogContext);
  console.log(blog);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.blogContainer}>
          <div className={styles.categoryContainer}>
            <p>Blog</p>
            <div>
              <FaAngleRight />
            </div>
            <p className={styles.category}>CATEGORY</p>
          </div>
          <div>
            <h1 className={styles.blogTitle}>{blog.title}</h1>
            <p>
              By <span className={styles.fullName}>FULL NAME</span>
            </p>
            <div className={styles.blogInformationContainer}>
              <p>{blog.date}</p>
              <p>
                <LuDot size={20} />
              </p>
              <p>5 min read</p>
            </div>
          </div>
          <div className={styles.shareContainer}>
            <p className={styles.shareText}>Share this post</p>
            <div className={styles.iconContainer}>
              <button className={styles.icon}>
                <IoIosLink />
              </button>
              <button className={styles.icon}>
                <IoLogoLinkedin />
              </button>
              <button className={styles.icon}>
                <BsTwitterX />
              </button>
              <button className={styles.icon}>
                <IoLogoFacebook />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={imagePlaceholder}
            alt="post image"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
