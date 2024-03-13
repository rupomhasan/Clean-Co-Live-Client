import Sidebar from "./Sidebar";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full">
      <div className="flex-none md:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <IoMenu />
        </label>
      </div>
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden md:block">
        <div className="menu menu-horizontal space-x-4">
          {/* Navbar menu content here */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
