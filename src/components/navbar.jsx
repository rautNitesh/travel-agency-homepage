import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-first">
        <ul>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Travel Guide</a>
          </li>
        </ul>
      </div>
      <div className="nav-second">
        <ul>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
