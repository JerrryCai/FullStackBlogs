import React from 'react';

/**
 * The header of blog page
 * @return {React.Component}
 */
export default function BlogHeader() {
  return (
    <div className="md:mb-20">
      <p className="mb-4 text-accent-100 md:text-base">Blog</p>
      <h1
        className="
        mb-6 text-3xl text-primary-100
        md:w-1/2 md:text-[3.5rem] md:leading-[120%]"
      >
        Describe what your blog is about
      </h1>
      <p className="text-text-200 md:text-lg md:leading-[150%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
