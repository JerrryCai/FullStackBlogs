import React, { useState } from 'react';
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
  const [opacity, setOpacity] = useState('opacity-100');

  const changeStory = (index) => {
    // Start with fading out
    setOpacity('opacity-0');

    // After the transition duration, change the story and fade it in
    setTimeout(() => {
      setCurrentStoryIndex(index);
      setOpacity('opacity-100');
    }, 500); // This should match the transition duration
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
    <div className="md:flex">
      <div
        className="
        flex h-auto flex-col items-start  justify-center
        py-12 pl-16 pr-20 md:h-nav-screen md:w-1/2 md:py-0"
      >
        <div className="mb-6">
          <h1
            className="
            mb-6 text-3xl font-bold text-primary-100 md:text-[2.5rem]"
          >
            Exploring the Intersection of Technology and Creativity
          </h1>
          <p className="text-lg text-text-100">
            Dive into our latest articles where we decode the latest tech
            trends, offer coding tutorials, and share insights into innovative
            design.
          </p>
        </div>

        <div className="flex gap-4">
          <Link to="/blogs">
            <button
              className="
              rounded-[0.625rem] border border-primary-100 bg-primary-100
              px-6 py-3 text-white"
            >
              Explore
            </button>
          </Link>
          <Link>
            <button
              className="
              rounded-[0.625rem] border border-primary-100 px-6 py-3
              text-primary-100
          "
            >
              Subscribe
            </button>
          </Link>
        </div>
      </div>
      <div className="h-nav-screen md:w-1/2">
        <img
          src={imagePlaceholder}
          alt="image on home page"
          className="h-2/3 w-[100%] object-cover object-center"
        />
        <div
          className="flex h-1/3 flex-col
          justify-between bg-bg-300 p-8"
        >
          <div className={`transition-opacity duration-500 ${opacity}`}>
            <h1 className="mb-4 text-2xl font-bold text-primary-100">
              {currentStory.title}
            </h1>
            <p className="text-base text-text-200">
              {currentStory.description}
            </p>
          </div>
          <div className="mt-12 flex justify-end gap-4">
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
