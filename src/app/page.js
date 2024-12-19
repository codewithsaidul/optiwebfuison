
import Banner from "@/component/HomePage/HomeBanner";
import HomeAbout from "@/component/HomePage/HomeAbout";
import HomeService from "@/component/HomePage/HomeService";
import HomePortfolio from "@/component/HomePage/HomePortfolio";
import LoadingWrapper from "@/component/Loader/Wrapper";
import TeamMembers from "@/component/SharedComponent/Team";
import HomeBlog from "@/component/HomePage/HomeBlog";




// import TransitionEffect from "@/component/Loader/Transition";


export const metadata = {
  title: "Home || OptiWebFusion - Digital Marketing & Web Solutions",
  description:
    "OptiWebFusion is a web development company that provides web design, web development, and web hosting services.",
};

export default function Home() {


  return (
    <LoadingWrapper>

        {/* Main Section */}
        <main className="w-full px-4 py-4 md:px-12 lg:px-24">
          <Banner />
          <HomeAbout />
          <HomeService />
          <HomePortfolio />
          <TeamMembers />
          <HomeBlog />
        </main>
      
    </LoadingWrapper>
  );
}
