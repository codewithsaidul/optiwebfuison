import Link from "next/link";
import { FaDollarSign } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";

const HomeTimeLine = () => {
  return (
    // <!-- component -->
    <div className="relative">
      <div className="border-l-2 border-primary dark:border-secondary">
        {/* <!-- Card 1 --> */}
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center py-4   text-text dark:text-slate-500 rounded mb-0 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Dot Follwing the Left Vertical Line --> */}
          <div className="w-10 h-10 flex items-center justify-center bg-primary dark:bg-secondary text-white dark:text-text absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
            <FaDollarSign size={20} />
          </div>

          
          {/* <!-- Content that showing in the box --> */}
          <div>
            <h2 className="text-2xl font-bold font-raleway text-primary dark:text-secondary">
              Our Mission
            </h2>
            <p className="text-base font-medium text-text dark:text-slate-500">
              Our mission is to empower brands by crafting innovative and
              impactful creative solutions.
            </p>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center py-4  text-text dark:text-slate-500 rounded mb-0 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Dot Follwing the Left Vertical Line --> */}
          <div className="w-10 h-10 flex items-center justify-center bg-primary dark:bg-secondary text-white dark:text-text absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
            <FaRegStar size={20} />
          </div>



          {/* <!-- Content that showing in the box --> */}
          <div>
            <h2 className="text-2xl font-bold font-raleway text-primary dark:text-secondary">
              Our Vision
            </h2>
            <p className="text-base font-medium text-text dark:text-slate-500">
              Our mission is to empower brands by crafting innovative and
              impactful creative solutions.
            </p>
          </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center py-4  text-text dark:text-slate-500 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Dot Follwing the Left Vertical Line --> */}
          <div className="w-10 h-10 flex items-center justify-center bg-primary dark:bg-secondary text-white dark:text-text absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
            <AiOutlineSafety size={20} />
          </div>

          {/* <!-- Line that connecting the box with the vertical line --> */}
          {/* <div class="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div> */}

          {/* <!-- Content that showing in the box --> */}
          <div>
            <h2 className="text-2xl font-bold font-raleway text-primary dark:text-secondary">
              What Sets Us Apart
            </h2>
            <p className="text-base font-medium text-text dark:text-slate-500">
              Our mission is to empower brands by crafting innovative and
              impactful creative solutions.
            </p>
          </div>
        </div>
      </div>

      <Link
        href="/about"
        className="py-3 px-7 text-lg font-raleway font-semibold text-white dark:text-text bg-primary dark:bg-secondary duration-500 hover:bg-primary/80 dark:hover:bg-secondary/80 hover:duration-500 rounded-full"
      >
        More About Us
      </Link>
    </div>
  );
};

export default HomeTimeLine;
