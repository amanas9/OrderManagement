import React from "react";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <Link className="navbar-brand" to="/" style={{color: 'white'}}>
          Home
        </Link>
        <Link className="btn btn-outline-primary my-2 my-sm-2" to="/order">Add Order</Link>
 
      </nav>
    </div>
  );
};

export default Navbar;
