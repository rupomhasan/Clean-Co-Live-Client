import Lottie from "lottie-react";
import loginAnimation from "../assets/Login.json";
import { Link, useNavigate } from "react-router-dom";
import Social from "../Components/Shared/Social";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../Hooks/useAxios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const axios = useAxios();
  const { login } = useAuth();
  const navigation = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const toastId = toast.loading("Logging in...");
    login(email, password)
      .then((userCredential) => {
        const userMail = userCredential.user.email;
        console.log(userMail);
        axios
          .post("/auth/access-token", userMail)
          .then((res) => console.log(res.data));
        toast.success("Logged in...", { id: toastId });
        navigation("/");
      })
      .catch((error) => {
        toast.error(error.message, { id: toastId });
      });
  };

  return (
    <div className=" bg-base-200">
      <div className=" min-h-screen max-w-screen-xl mx-auto">
        <div className="text-center pt-20">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="max-w-xl flex mx-auto">
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
        <div className=" md:flex max-w-screen-lg mx-auto justify-evenly my-10">
          <div className="w-fit">
            <Lottie animationData={loginAnimation} />
          </div>
          <div className="card w-fit p-10  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onBlur={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  onBlur={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <input
                type="submit"
                className="btn btn-primary mt-3 text-white text-xl w-full"
                value="Login Here "
              />
            </form>
            <div className="mt-4">
              <p>
                New to this site ?{" "}
                <Link to="/register" className="hover:link font-bold">
                  Please Register
                </Link>
              </p>
              <div className="flex items-center gap-3 my-4">
                <div className="w-full bg-gray-400 h-[2px]"></div>
                <div> Or</div>
                <div className="w-full h-[2px] bg-gray-400"></div>
              </div>
              <div className="flex justify-center">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
