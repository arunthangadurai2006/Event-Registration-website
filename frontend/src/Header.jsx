import "./Header.css";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <FaCalendarAlt className="logo-icon" />
        <h2>AkBook</h2>
      </div>

      <nav className="nav">
        <h6 className="customer-login">Customer Login</h6>
       <Link to="/login">
  <button className="provider-btn">Provider Login</button>
</Link>
      </nav>
    </header>
  );
}

export default Header;