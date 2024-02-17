import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {

    const { title, author, name, img, item, published_date, image_url, details, rating, total_view, _id } = news;

    return (
        <div>
            {/* top part */}
            <div className="bg-gray-200 flex justify-between items-center p-3">
                <div className="flex gap-4 items-center">
                    <div className="w-10 ">
                        <img className="rounded-full" alt="Tailwind CSS Navbar component" src={author.img} />
                    </div>
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <FaRegBookmark />
                    <IoShareSocialOutline />
                </div>
            </div>

            {/* middle part */}
            <div className="card bg-base-100 ">
                <div className="px-4 mb-2">
                    <h2 className="card-title">{title}</h2>
                    <figure><img src={image_url} alt="Shoes" /></figure>

                    {/* <p>{details.slice(0, 200)} ...</p> */}
                    {
                        details.length > 200 ? <p className="mt-3">{details.slice(0, 200)}....  <br />
                            <Link
                                to={`/news/${_id}`}
                                className="text-left text-orange-600 font-semibold">
                                <button>Read More</button>
                            </Link>
                        </p>
                            : <p>{details}</p>
                    }
                    {/* <button className="text-left text-orange-600 font-semibold">Read More</button> */}
                    <p className="border-b-2"></p>
                </div>
            </div>

            {/* bottom part */}
            <div>
                <div className="bg-gray-100 flex justify-between items-center p-3 mb-10">
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
                            <h2 className="font-semibold">{rating.number}</h2>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaEye />
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;