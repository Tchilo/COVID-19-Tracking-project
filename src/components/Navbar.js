import React from 'react';
import mic from '../images/mic-svgrepo-com.svg';

function Navbar() {
  return (
    <nav>
      <div className="top-left">
        <img src={mic} alt="" />
      </div>
      <h2>COVID-19 DATA</h2>
    </nav>
  );
}

export default Navbar;
