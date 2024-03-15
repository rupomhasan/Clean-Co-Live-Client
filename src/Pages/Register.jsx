import { Link } from "react-router-dom";
import Social from "../Components/Shared/Social";
import Lottie from "lottie-react";
import loginAnimation from "../assets/Login.json";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = useAuth();

  const handleNewUser = async (e) => {
    try {
      e.preventDefault();
      await createUser(email, password).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" bg-base-200">
      <div className=" min-h-screen max-w-screen-xl mx-auto">
        <div className="text-center pt-20">
          <h1 className="text-5xl font-bold">Register now!</h1>
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
            <form onSubmit={handleNewUser} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  onBlur={(e) => setName(e.target.value)}
                />
              </div>
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
              </div>

              <input
                type="submit"
                className="btn btn-primary mt-3 text-white text-xl w-full"
                value="Register Here "
              />
            </form>
            <div className="mt-4">
              <p>
                Already have an account ?{" "}
                <Link to="/login" className="hover:link font-bold ">
                  Please Login
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

export default Register;
