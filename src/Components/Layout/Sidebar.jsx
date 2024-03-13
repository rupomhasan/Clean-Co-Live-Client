import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn btn-success  text-white " : "btn  btn-ghost"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "btn btn-success text-white " : "btn  btn-ghost"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "btn btn-success text-white btn-"
              : "btn  btn-ghost"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "btn btn-success text-white btn-sm"
              : "btn  btn-ghost"
          }
        >
          Login
        </NavLink>
      </>
    );
};

export default Sidebar;