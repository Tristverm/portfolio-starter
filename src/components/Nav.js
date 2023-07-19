import React from "react";
//some of the icons that I will be utilizing for this project
import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsChatSquareText,
} from "react-icons/bs";
//links
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* navigtaion inner container */}
        <div className="w-full bg-black/20 h-[96px] rounded-full max-w-[460px] backdrop-blur-2xl mx-auto px-5  flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            duration={400}
            spy={true}
            offset={-200}
            className="cursor-pointer h-[60px] w-[60px] flex flex-row justify-center items-center"
            title="home"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            duration={400}
            spy={true}
            className="cursor-pointer h-[60px] w-[60px] flex flex-row justify-center items-center"
            title="about"
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            duration={400}
            spy={true}
            className="cursor-pointer h-[60px] w-[60px] flex flex-row justify-center items-center"
            title="services"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            duration={400}
            spy={true}
            className="cursor-pointer h-[60px] w-[60px] flex flex-row justify-center items-center"
            title="work"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            duration={400}
            spy={true}
            className="cursor-pointer h-[60px] w-[60px] flex flex-row justify-center items-center"
            title="contact"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
