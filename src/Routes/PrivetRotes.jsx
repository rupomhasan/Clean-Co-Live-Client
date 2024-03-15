import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRotes = ({ children }) => {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <div className="mx-auto">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivetRotes;
