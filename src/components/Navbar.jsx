import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { user } = useGlobalContext();
  const { isPending, logout } = useLogout();
  return (
    <header className="bg-base-200">
      <div className="navbar main-container">
        <div className="navbar-start">
          <Link className="btn btn-netural" to="/">
            Logo
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          
          {!isPending && (
            <button onClick={logout} className="btn btn-secondary btn-outline">
              Logout
            </button>
          )}{" "}
           {isPending && (
            <button onClick={logout} className="btn btn-disabled btn-outline"disabled>
              Loading...
            </button>
          )}{" "}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
