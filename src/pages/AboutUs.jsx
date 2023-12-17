import React from 'react';
import Author from '../components/about-us-page/Author';
/**
 * The about us page
 * @return {React.Component}
 */
export default function AboutUs() {
  return (
    <div className="md:mx-16 md:my-28">
      <div className="md:mb-20">
        <h1
          className="
          font-bold text-primary-100 md:mb-6 md:text-[48px] md:leading-[120%]"
        >
          Our Team
        </h1>
        <p className="text-lg text-text-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-nowrap gap-12 overflow-x-auto">
        <Author />
        <Author />
      </div>
    </div>
  );
}
