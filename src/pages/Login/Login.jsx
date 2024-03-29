import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        // getting information from form field
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get("password");
        console.log(form.get('email'));
        console.log(form.get('password'));

        // user login
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                alert("user login successful")

                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                alert(error)
            })

    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center font-semibold my-4">Login Here</h2>

            {/* login form from daisyUI start */}
            <div>
                <form onSubmit={handleLogin} className="md:w-3/4 mx-auto lg:w-1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                {/* Re-direct to register Page if user not registered*/}
                <p className="text-center my-4">Don't have an account? <Link className="underline font-semibold text-blue-600" to='/register'>Register Here</Link></p>
            </div>
            {/*  login form end */}

        </div>
    );
};

export default Login;