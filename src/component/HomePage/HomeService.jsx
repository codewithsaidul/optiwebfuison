import { services } from "@/data/Data.js";
import Link from "next/link";

const HomeService = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col md:flex-row justify-between md:items-center max-[767px]:gap-5">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-primary dark:text-secondary font-raleway mb-3">
            Our Services
          </h2>
          <p className="text-base font-normal font-montserrat text-text dark:text-slate-400">
            We offer professional web development, search engine optimization,
            social media, and video solutions to help you stand out online.
          </p>
        </div>

        <div>
          <button className="text-base font-semibold font-montserrat py-2 px-6 bg-primary dark:bg-secondary text-white dark:text-text rounded-full">
            <Link href="/services">View All Services</Link>
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
        {services.slice(0, 3).map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.3)] dark:shadow-[0px_4px_8px_0px_rgba(220,220,180,0.3)] dark:bg-gray-900 rounded-xl p-5 border-2 border-transparent hover:border-primary duration-700 hover:duration-700 hover:bg-slate-50 dark:hover:bg-gray-800"
          >
            <div className="flex flex-col items-center justify-center gap-5">
              <span className="p-3 bg-primary dark:bg-secondary rounded-full text-white">
                {icon}
              </span>

              <h3 className="text-2xl font-bold font-raleway text-primary dark:text-secondary">
                {title}
              </h3>

              <p className="text-base font-normal text-center font-montserrat text-text dark:text-slate-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeService;
