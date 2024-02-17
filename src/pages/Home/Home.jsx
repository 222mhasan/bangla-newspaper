
import { useLoaderData } from "react-router-dom";
// import MiddlePart from "../MiddlePart/MiddlePart";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar"
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData();
    // console.log(news);

    return (
        <div>
            {/* Header part */}
            <Header></Header>

            {/* marquee slider */}
            <BreakingNews></BreakingNews>

            {/* Navigation part */}
            <Navbar></Navbar>

            {/* main content start*/}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* Left side area */}
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>

                {/* news container area */}
                {/* <div className="md:col-span-2 border-2"><MiddlePart></MiddlePart></div> */}
                <div className="md:col-span-2 border-2">
                    {
                        news.slice(0,5).map(aNews => <NewsCard 
                        key={aNews.id} 
                        news={aNews} 
                        className="mb-10">

                        </NewsCard>)
                    }
                </div>

                {/* right side area */}
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            {/* main content end */}

        </div>
    );
};

export default Home;