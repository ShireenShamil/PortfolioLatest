import React from "react";
import { assets, blogPosts } from '@/assets/assets';
import Image from "next/image";

const Blog = ({isDarkMode}) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10" id="blog">
      <h2 className="text-4xl font-bold text-center font-Ovo mb-6">My Blogs</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition-transform hover:scale-[1.02] bg-white dark:bg-darkTheme dark:hover:bg-darkHover max-w-[280px] h-[440px] flex flex-col justify-between"
          >
            {/* Blog Image */}
            <div className="relative w-full h-[220px]">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Blog Info */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>

              {/* Read on Medium Button */}
              <a
                href={post.mediumLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-black text-white px-4 py-2 rounded hover:bg-gray-400 transition dark:bg-white dark:text-black dark:hover:bg-gray-300"
              >
                Read on Medium
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
