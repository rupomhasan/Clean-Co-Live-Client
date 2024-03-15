import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex gap-3">
      <FaFacebookF className="hover:link text-4xl p-2 bg-blue-600 rounded-full text-white" />
      <FaInstagram className="hover:link text-4xl  text-orange-500" />
      <FaTwitter className="hover:link text-4xl p-2 bg-sky-500 rounded-full text-white" />
      <FcGoogle className="hover:link text-4xl " />
      <FaGithub className="hover:link text-4xl " />
    </div>
  );
};

export default Social;
