import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoCalendarOutline } from "react-icons/io5";
import moment from 'moment';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    const [newsTemplates, setNewsTemplates] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then((res) => res.json())
            .then(data => setCategories(data))

    }, [])

    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => setNewsTemplates(data));
    }, [])



    return (
        <div>
            {/* All Categories area */}
            <div>
                <h2 className="text-lg font-semibold my-3">All Categories</h2>
                {
                    categories.map(category => <NavLink
                        className="block border-2 text-xl font-semibold p-3"
                        to={`/category/${category.id}`}
                        key={category.id}>
                        {category.name}
                    </NavLink>)
                }
            </div>

            {/* News section */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-center mb-4">News</h2>
                {
                    newsTemplates.slice(0, 5).map(newsTemplate => <div
                        className="gap-4 mb-4"
                        key={newsTemplate.id}>

                        <div className=" bg-base-100 shadow-xl">
                            <figure><img className="px-2 rounded-md" src={newsTemplate.image_url} alt="Shoes" /></figure>
                            <div className="p-3">
                                <h2 className="font-semibold">{newsTemplate.title}</h2>

                                <div className="flex gap-4">
                                    <h3>Sports</h3>
                                    <div className="flex items-center gap-2">
                                        <IoCalendarOutline />
                                        <p>{moment().format(" MMM D, YYYY")}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;