import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul>
        <li>
          <Link to="/">Root page</Link>
        </li>
        <li>
          <Link to="/about">About page</Link>
        </li>
        <li>
          <Link to="/home">Home page</Link>
        </li>
      </ul>
  );
};

export default Navbar;
