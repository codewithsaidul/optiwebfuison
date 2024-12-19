// components/BlogGrid.js
"use client"
import { blogPosts } from "@/data/Data.js";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = blogPosts.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentBlogs.length)
  // Calculate total number of pages
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:row-span-6 gap-10">
        {currentBlogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`bg-white dark:bg-gray-900 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_0px_8px_0px_rgba(220,220,180,0.1)] pb-6 rounded-lg overflow-hidden`}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={300}
              priority
              quality={100}
              className="w-full object-cover h-48"
            />
            <div className="p-4 flex flex-col justify-between mt-4">
              <h2 className="text-xl text-text dark:text-white duration-500 hover:text-primary dark:hover:text-secondary hover:duration-500 font-semibold">
                {blog.title}
              </h2>

              <p className="text-base text-text dark:text-slate-400 font-medium font-montserrat my-2">
                {blog.description.slice(0, 55) + "........"}
              </p>

              <div className="mt-6 flex items-center justify-self-end">
                <Image
                  src={blog?.authorImage}
                  alt={blog?.author}
                  width={32}
                  height={32}
                  priority
                  quality={100}
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2 text-base text-text dark:text-slate-400">
                  {blog?.author} | {blog?.post_date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 m-1 rounded-md hover:bg-primary dark:hover:bg-secondary disabled:bg-gray-600 disabled:text-gray-200 disabled:opacity-30 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_4px_8px_0px_rgba(220,220,180,0.3)] dark:bg-gray-900 text-slate-400 hover:text-white dark:hover:text-text flex gap-0"
        >
          <IoIosArrowBack size={18} /> <IoIosArrowBack size={18} /> <IoIosArrowBack size={18} />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 m-1 ${
              index + 1 === currentPage
                ? "bg-primary text-white dark:bg-secondary dark:text-text"
                : "bg-gray-200"
            } rounded-md hover:bg-primary/90 hover:text-white dark:hover:bg-secondary/90 dark:hover:text-text duration-700 hover:duration-700`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 m-1 rounded-md hover:bg-primary dark:hover:bg-secondary disabled:bg-gray-600 disabled:text-gray-200 disabled:opacity-30 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_4px_8px_0px_rgba(220,220,180,0.3)] dark:bg-gray-900 text-slate-400 hover:text-white dark:hover:text-text flex gap-0"
        >
          <IoIosArrowForward size={18} /><IoIosArrowForward size={18} /><IoIosArrowForward size={18} />
        </button>
      </div>
    </div>
  );
};

export default Blog;
