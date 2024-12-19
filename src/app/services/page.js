import LoadingWrapper from "@/component/Loader/Wrapper";
import Services from "@/component/ServicesPage/Services";
import TeamMembers from "@/component/SharedComponent/Team";
import Link from "next/link";

export const metadata = {
  title: "Services || OptiWebFusion - Web Design & Marketing Solutions",
  description:
    "OptiWebFusion is a web development company that provides web design, web development, and web hosting services.",
};

const page = () => {
  return (
    <LoadingWrapper>
      <main className="w-full px-4 py-4 md:px-12 lg:px-24 relative">
        <div className="mt-40 mb-44">
          <div className="absolute hidden sm:block sm:-top-40 sm:-inset-x-40 sm:-right-28 md:-top-32 md:-inset-x-40 md:-right-28 w-96 h-96 border-[60px] bg-transparent  border-primary dark:border-secondary rounded-full" />


          {/* Dot Animation Start */}
          <div className="absolute top-80 sm:top-72 right-10 md:top-72 md:right-20 grid grid-cols-4 gap-2 animate-upDown">
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
            <div className="w-1 h-1 bg-primary dark:bg-secondary rounded-full" />
          </div>
          {/* Dot Animation End */}

          {/* Box Animation Start */}
          <div className="absolute top-32 sm:top-64 sm:left-40 md:left-60 w-0 h-0 border-l-[20px] bg-transparent border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-primary dark:border-b-secondary animate-rotateUp" />
          {/* Box Animation End */}

          <div className="text-center">
            <h1 className="text-5xl font-bold text-text dark:text-white uppercase font-raleway mb-5">
              Our Services
            </h1>
            <p className="text-lg text-text dark:text-slate-300 capitalize flex justify-center text-center items-center gap-2">
              <Link
                href="/"
                className="text-text dark:text-white hover:text-text/80 dark:hover:text-white/80 transition-all duration-300"
              >
                Home
              </Link>
              <span className="text-primary dark:text-secondary">
                || Services
              </span>
            </p>
          </div>
        </div>


        {/* ============= Services Container ============= */}
        <Services />
        {/* ============= Services Container ============= */}
        
        <TeamMembers />
      </main>
    </LoadingWrapper>
  );
};

export default page;
