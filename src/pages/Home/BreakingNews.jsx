import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div>
            <div className="flex bg-gray-200 p-2">
                <div>
                    <button className="bg-pink-600 px-4 py-2 text-white">Latest</button>
                </div>
                <Marquee pauseOnHover={true} speed={80}>
                    <Link to="/" className="mr-4">
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                    <Link to="/" className="mr-4">
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                    <Link to="/" className="mr-4">
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;