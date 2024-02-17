import { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

const MiddlePart = () => {

    const [newsMains, setNewsMains] = useState([]);

    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => setNewsMains(data))
    }, [])

    return (
        <div>
            <h2>Bangla News Home: {newsMains.length}</h2>
            <div>
                {
                    newsMains.slice(0, 4).map((item) =>
                        <div
                            className="mb-5 "
                            key={item.id}>
                            <div >
                                {/* top part */}
                                <div className="bg-gray-200 flex justify-between items-center p-3">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-10 ">
                                            <img className="rounded-full" alt="Tailwind CSS Navbar component" src={item.author.img} />
                                        </div>
                                        <div>
                                            <h2 className="font-semibold">{item.author.name}</h2>
                                            <p>{item.author.published_date}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <FaRegBookmark />
                                        <IoShareSocialOutline />
                                    </div>
                                </div>

                                {/* middle part */}
                                <div className="card bg-base-100 ">
                                    <div className="card-body">
                                        <h2 className="card-title">{item.title}</h2>
                                        <figure><img src={item.image_url} alt="Shoes" /></figure>
                                        <p>{item.details.slice(0, 200)} ...</p>
                                        <button className="text-left text-orange-600 font-semibold">Read More</button>
                                        <p className="border-b-2"></p>
                                    </div>
                                </div>

                                {/* bottom part */}
                                <div>
                                    <div className="bg-gray-200 flex justify-between items-center p-3">
                                        <div className="flex gap-4 items-center">
                                            <div className="">
                                                <div className="rating">
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="font-semibold">{item.rating.number}</h2>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <FaEye />
                                            <p>{item.total_view}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
            </div>

        </div>
    );
};

export default MiddlePart;