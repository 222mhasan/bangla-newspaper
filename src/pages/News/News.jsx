import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import NewsDetails from "../Home/NewsDetails";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
// import NewsDetails from "../Home/NewsDetails";

const News = () => {

    const [newsDetails, setNewsDetails] = useState(null);


    const news = useLoaderData();
    console.log(news);

    const { id } = useParams();
    console.log(id);



    useEffect(() => {
        const findNews = news?.find(newsDetails => newsDetails._id == id)
        console.log(findNews);
        setNewsDetails(findNews);
    }, [id, news])

    const { title, content, imageUrl, date, author, details, image_url, thumbnail_url, published_date } = newsDetails || {};



    // const findNews = news.find(newsDetails => newsDetails._id == id);
    // console.log(findNews);


    return (
        <div>
            <Header></Header>
            <h2 className="text-2xl font-semibold">Dragon News</h2>

            <div className="grid grid-cols-4 gap-3">
                {/* left side */}
                <div className="col-span-3 m-3 ">
                    <div className="border-2 p-4 rounded-lg">
                        <img className="w-full" src={image_url} alt="" />
                        <h2 className="text-xl font-bold py-4">{title}</h2>
                        <p>{details}</p>


                        <button className="btn bg-rose-700 hover:text-black my-5 text-white text-lg font-poppins"><IoMdArrowRoundBack className="text-2xl " /><a href='/'> ALl news in this category</a></button>
                    </div>

                    {/* <div >
                        <h2 className="text-2xl my-5 font-semibold">Editors Insight</h2>
                        <div className="flex gap-3">

                            <div className="card card-compact  bg-base-100 shadow-xl">
                                <figure><img src={thumbnail_url} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{title}</h2>
                                    <div className="flex items-center gap-5">
                                        <FaRegCalendarAlt />
                                        <p>{author}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={thumbnail_url} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{title}</h2>
                                    <div className="flex items-center gap-5">
                                        <FaRegCalendarAlt />
                                        <p>{author.published_date}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={thumbnail_url} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{title}</h2>
                                    <div className="flex items-center gap-5">
                                        <FaRegCalendarAlt />
                                        <p>{author.published_date}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> */}

                </div>

                {/* right side */}
                <div className="border-2">
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default News;