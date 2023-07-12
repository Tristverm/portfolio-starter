import React from "react";

//importing relevant images

import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-pink-300 py-8">
      <div className="container mx-auto">
        <div>
          {/* Logo */}
          <a href="#">
            <img src={Logo} alt="img"></img>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
