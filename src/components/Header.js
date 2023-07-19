import React from "react";

//importing relevant images

import Logo from "../assets/Emmanuel.png";

const Header = () => {
  return (
    <header
      className="py-8"
      id="header"
    >
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center ">
          {/* Logo */}

          <a
            href="#header"
            className=""
            title="Emmanuel Dev"
          >
            <div className=" flex flex-col justify-center items-center text-gradient h3 h-[130px] w-[130px] border-2 shadow-white hover:shadow-inner hover:shadow-white shadow-2xl rounded-full ">
              <div>Manuel</div>
              <div>Dev</div>
            </div>
          </a>
          <button className="btn btn-lg">Lets Work</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
