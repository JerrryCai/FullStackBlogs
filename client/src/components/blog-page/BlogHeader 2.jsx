import React from 'react';
import imagePlaceholder from '../../assets/images/Image-Placeholder.png';
import { FaAngleRight } from 'react-icons/fa';
import { LuDot } from 'react-icons/lu';
import { IoIosLink, IoLogoLinkedin } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io5';
import { BsTwitterX } from 'react-icons/bs';
/**
 * Blog header of every posts
 * @return {React.Component}
 */
export default function BlogHeader() {
  return (
    <div className="md:mx-16 md:my-28">
      <div className="gap-20 md:flex">
        <div className="flex w-1/2 flex-col">
          <div className="flex items-center gap-2 text-accent-100 md:mb-10">
            <p>Blog</p>
            <div>
              <FaAngleRight />
            </div>
            <p className="text-primary-100">CATEGORY</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold md:mb-12">
              Blog title Header will go here
            </h1>
            <p>
              By <span className="text-sm font-semibold">FULL NAME</span>
            </p>
            <div className="flex items-center gap-2">
              <p>11 Jan 2022</p>
              <p>
                <LuDot size={20} />
              </p>
              <p>5 min read</p>
            </div>
          </div>
          <div className="mt-auto mb-8">
            <p className="text-lg font-semibold mb-4">Share this post</p>
            <div className="flex items-center gap-2">
              <button className="rounded-full bg-text-main p-1">
                <IoIosLink />
              </button>
              <button className="rounded-full bg-text-main p-1">
                <IoLogoLinkedin />
              </button>
              <button className="rounded-full bg-text-main p-1">
                <BsTwitterX />
              </button>
              <button className="rounded-full bg-text-main p-1">
                <IoLogoFacebook />
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={imagePlaceholder}
            alt="post image"
            className="h-[395px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
