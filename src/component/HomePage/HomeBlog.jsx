import { blogPosts } from "@/data/Data.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeBlog = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-center max-[767px]:gap-5">
        <div>
          <h2 className="text-4xl font-bold text-primary dark:text-secondary font-raleway">
            Our Blogs
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-montserrat">
            Some of Our{" "}
            <span className="text-primary dark:text-secondary">
              Recent Articles
            </span>
          </p>
        </div>

        <div>
          <button className="text-base font-semibold font-montserrat py-2 px-6 bg-primary dark:bg-secondary text-white dark:text-text rounded-full">
            <Link href="/blog">See All Articles</Link>
          </button>
        </div>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className={`bg-white dark:bg-gray-900 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_0px_8px_0px_rgba(220,220,180,0.1)] group border-2 border-transparent duration-700 hover:border-primary dark:hover:border-secondary hover:duration-700 pb-2 rounded-lg overflow-hidden`}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={300}
                priority
                quality={100}
                className="w-full object-cover h-60 group-hover:scale-90 duration-700 group-hover:duration-700 rounded-lg"
              />
              <div className="p-4 flex flex-col justify-between mt-5">
                <h2 className="text-lg text-text dark:text-white duration-500 hover:text-primary dark:hover:text-secondary hover:duration-500 font-semibold">
                  {blog.title}
                </h2>

                <p className="text-sm text-text dark:text-slate-400 font-medium my-3">{blog.description.slice(0, 100) + "......."}
                  <Link href={`/blog/${blog.slug}`} className="text-primary hover:text-primary dark:text-secondary ml-2 text-lg font-bold font-raleway">
                      Read More
                  </Link>
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
      </div>
    </div>
  );
};

export default HomeBlog;
