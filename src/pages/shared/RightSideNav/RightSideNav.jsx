import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bg from '../../../assets/bg.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-3">

                {/* Login with area */}
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">Login With</h2>
                    <button className="btn btn-outline w-full"><FaGoogle />Google</button>
                    <button className="btn btn-outline w-full"><FaGithub />Github</button>
                </div>

                {/* Find Us On area */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-3">Find Us On</h2>
                    <a href="" className="p-4 flex items-center gap-3 border-2 border-teal-400 rounded-t-lg hover:bg-teal-600 hover:text-white">
                        <FaFacebook /><span>Facebook</span>
                    </a>
                    <a href="" className="p-4 flex items-center gap-3 border-x-2  border-teal-400 hover:bg-teal-600 hover:text-white">
                        <FaInstagram />Instagram
                    </a>
                    <a href="" className="p-4 flex items-center gap-3 border-2 border-teal-400 rounded-b-lg hover:bg-teal-600 hover:text-white">
                        <FaXTwitter />Twitter
                    </a>
                </div>

                {/* Q-Zone Area */}
                <div className="mt-6">
                    <div className="bg-base-200">
                        <h2 className="text-2xl font-semibold p-4">Q-Zone</h2>
                        <div>
                            <img src={qZone1} alt="" />
                        </div>
                        <div>
                            <img src={qZone2} alt="" />
                        </div>
                        <div>
                            <img src={qZone3} alt="" />
                        </div>
                    </div>
                </div>

                {/* Add Area */}
                <div>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url()' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className=" text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl font-bold">Create an Amazing Newspaper</h1>
                                <p className="mb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                                <button className="btn btn-error text-white">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;