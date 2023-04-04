import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { user } = useContext(AuthContext);
  const usenavigate=useNavigate()
  const handleClick=()=>{
    usenavigate("/login")
  }
  const handlelogout = ()=>{
    localStorage.clear();
    window.location.reload();
    usenavigate("/");
  }
  const handleClick2=()=>{
    usenavigate("/register");
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Hotel Booking</span>
        </Link>
        {/* {!localStorage.getItem('user')?<div className="navItems">
            <button onClick={handleClick2} className="navButton">Register</button>
            <button onClick={handleClick} className="navButton">Login</button>
          </div>
        :<button onClick={handlelogout} className='navButton'> Logout</button>} */}
        {user ?  <div className="navItems">
        <span>{user.username}</span>

          <button onClick={handlelogout} className='navButton'> Logout</button> 
         </div>:
          <div className="navItems">
            <button onClick={handleClick2} className="navButton">Register</button>
            <button onClick={handleClick} className="navButton">Login</button>
          </div>
        }
      
      </div>
    </div>
  );
};

export default Navbar;
