import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Sidebar = () => {
  const { user, handleLogOut } = useAuth();
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
        to="/services"
        className={({ isActive }) =>
          isActive ? "btn btn-success text-white " : "btn  btn-ghost"
        }
      >
        services
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "btn btn-success text-white btn-" : "btn  btn-ghost"
        }
      >
        Contact
      </NavLink>
      {user ? (
        <button onClick={handleLogOut} className="btn btn-ghost">
          Logout
        </button>
      ) : (
        <NavLink to="/login" className="btn btn-ghost">
          Login
        </NavLink>
      )}
    </>
  );
};

export default Sidebar;
