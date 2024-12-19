import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import HomeAbout1 from "../../../public/img/homeAbout1.jpg";
import HomeAbout2 from "../../../public/img/homeAbout2.jpg";
import HomeTimeLine from "./HomeTimeLine";

const HomeAbout = () => {
  return (
    <div className="mt-24">
      {/* =========== Home About Heading ========= */}
      <div className="flex flex-col  md:flex-row md:justify-between md:items-center gap-10">
        <div>
          <h3 className="text-xl  font-raleway font-bold mb-3 text-primary dark:text-secondary">
            About Us
          </h3>

          <h2 className="text-2xl text-gray-700 dark:text-slate-200 font-bold font-raleway">
            Your Partner in{" "}
            <span className="text-primary border-b-2 border-primary dark:text-secondary border-text-secondary">
              Web, SEO
            </span>{" "}
            and Social Growth
          </h2>
        </div>

        <div>
          <p className="text-lg font-normal font-montserrat text-text dark:text-slate-400">
            a professional digital agency that generates growth through expert
            site development, social media, video, and SEO solutions
            personalized to your brand.
          </p>
        </div>
      </div>

      {/* ============ Home About Content ============= */}

      <div className="mt-6 flex flex-col min-[1140px]:flex-row gap-10">
        {/* Home About Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full min-[1140px]:w-2/3 min-h-max">
          <div>
            <div className="py-4 px-6 bg-primary dark:bg-secondary duration-500 hover:bg-primary/80 dark:hover:bg-secondary/80 hover:duration-500 rounded-lg mb-6">
              <h3 className="text-2xl font-raleway font-bold text-white dark:text-text mb-10">
                24/7 Support
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-base font-medium font-montserrat text-white dark:text-text capitalize">
                  we provide 24/7 service to our customers
                </p>

                <Link
                  href="/about"
                  className="p-2 bg-black rounded-full hover:-translate-y-1 hover:duration-300 duration-300"
                >
                  <GoArrowUpRight color="#fff" size={24} />
                </Link>
              </div>
            </div>

            <figure>
              <Image
                src={HomeAbout1}
                alt="About Us"
                className="w-full h-auto object-cover"
                width={400}
                height={300}
                quality={80}
                sizes="(max-width: 600px) 150px, (max-width: 1024px) 300px, 400px"
              />
            </figure>
          </div>

          <figure className="ml-4 mt-10">
            <Image
              src={HomeAbout2}
              alt="About Us"
              className="w-full h-auto object-cover"
              width={400}
              height={300}
              quality={80}
              sizes="(max-width: 600px) 150px, (max-width: 1024px) 300px, 400px"
            />
          </figure>
        </div>

        {/* Home About Timeline */}
        <div
          className="w-full px-4 min-[450px]:px-0
         min-[450px]:w-3/4 min-[1140px]:w-1/3 min-[450px]:mx-auto"
        >
          <HomeTimeLine />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
