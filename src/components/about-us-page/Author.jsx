import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import imagePlaceholder from '../../assets/images/Image-Placeholder.png';
/**
 * The author component in about us page
 * @return {React.Component}
 */
export default function Author() {
  return (
    <div className="w-[25rem] min-w-[25rem]">
      <img
        src={imagePlaceholder}
        alt="avatar"
        className="h-20 w-20 rounded-full object-cover"
      />
      <div className="my-6">
        <div className="mb-4">
          <p className="text-xl font-semibold text-text-100">FULL NAME</p>
          <p className="text-lg font-normal">JOB TITLE</p>
        </div>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className="flex items-center gap-[0.875rem]">
        <button>
          <FaLinkedin size={24} />
        </button>
        <button>
          <MdEmail size={28} />
        </button>
      </div>
    </div>
  );
}
