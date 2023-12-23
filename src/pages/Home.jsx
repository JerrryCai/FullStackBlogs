import React, { useState } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import imagePlaceholder from '../assets/images/Image-Placeholder.png';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
/**
 * The home page component
 * @return {React.component}
 */
export default function Home() {
  const featuredStoryArray = [
    {
      title: 'Featured Story-1',
      description:
        // eslint-disable-next-line max-len
        "This week's spotlight is on virtual reality. Join us as we explore VR's potential to change how we interact with the digital world.",
    },
    {
      title: 'Featured Story-2',
      description:
        "This week's spotlight is on virtual reality. Join us as we explore VR's potential to change how we interact with the digital world.",
    },
    {
      title: 'Featured Story-3',
      description:
        "This week's spotlight is on virtual reality. Join us as we explore VR's potential to change how we interact with the digital world.",
    },
  ];

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [storyClass, setStoryClass] = useState(styles.fadeIn);

  const changeStory = (index) => {
    // Start with fading out
    setStoryClass(styles.fadeOut);

    // After the transition duration, change the story and fade it in
    setTimeout(() => {
      setCurrentStoryIndex(index);
      setStoryClass(styles.fadeIn);
    }, 500); // Match the transition duration in CSS
  };

  const goToPreviousStory = () => {
    const newIndex =
      currentStoryIndex === 0
        ? featuredStoryArray.length - 1
        : currentStoryIndex - 1;
    changeStory(newIndex);
  };

  // Function to go to the next story
  const goToNextStory = () => {
    const newIndex =
      currentStoryIndex === featuredStoryArray.length - 1
        ? 0
        : currentStoryIndex + 1;
    changeStory(newIndex);
  };

  // Get the current story based on the currentStoryIndex
  const currentStory = featuredStoryArray[currentStoryIndex];

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Exploring the Intersection of Technology and Creativity
          </h1>
          <p className={styles.description}>
            Dive into our latest articles where we decode the latest tech
            trends, offer coding tutorials, and share insights into innovative
            design.
          </p>
        </div>

        <div className={styles.buttonGroup}>
          <Link to="/blogs">
            <button className={`${styles.button} ${styles.buttonColor}`}>
              Explore
            </button>
          </Link>
          <Link>
            <button className={`${styles.button} ${styles.buttonUnColor}`}>
              Subscribe
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.rightContent}>
        <img
          src={imagePlaceholder}
          alt="image on home page"
          className={styles.img}
        />
        <div className={styles.storyContainer}>
          <div className={storyClass}>
            <h1 className={styles.storyTitle}>{currentStory.title}</h1>
            <p className={styles.storyDescription}>
              {currentStory.description}
            </p>
          </div>
          <div className={styles.changeStoryButtonContainer}>
            <button type="button">
              <CiCircleChevLeft size={50} onClick={goToPreviousStory} />
            </button>
            <button type="button">
              <CiCircleChevRight size={50} onClick={goToNextStory} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
