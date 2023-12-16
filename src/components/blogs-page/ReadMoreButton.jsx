import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
/**
 * Read more button components for the post cards
 * @return {React.Component}
 */
export default function ReadMoreButton() {
  return (
    <button
      className="flex items-center gap-2 text-base text-primary-200"
      type="button"
    >
      Read more
      <FaAngleRight size={24} />
    </button>
  );
}
