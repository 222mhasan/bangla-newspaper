import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto border-2 border-teal-600 font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;