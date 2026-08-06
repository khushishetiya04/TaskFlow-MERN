import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <FaTasks />
        <span>TaskFlow</span>
      </div>

      <div className="nav-right">
        <p className="welcome">
          Welcome, <strong>{user?.name}</strong>
        </p>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;