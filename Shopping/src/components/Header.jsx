import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const bagState = useSelector((store) => store.Bag);
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="../images/logo.svg"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <Link to="/">Shop</Link>
        <a href="/about">About</a>
        <Link to="/addnewproduct"> Add New Product </Link>
      </nav>

      <div className="action_bar">
        <div className="action_container">
          <BsFillPersonFill />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link to="/bag" className="action_container">
          <FaBagShopping />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bagState.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
