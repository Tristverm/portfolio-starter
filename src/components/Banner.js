import React from "react";

// importing images
import Image from "../assets/avt.png";
// importing social media icons

import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
// Importing animation type
import { TypeAnimation } from "react-type-animation";
// importing from framer-motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex flex-row items-center  "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center  lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-semibold font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] leading-[0.8] font-semibold lg:text-[110px] mb-2"
            >
              Emmanuel <span> Kyalo</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] mt-4"
            >
              <span className="text-white mr-4"> I am a Front End Dev: </span>
              <TypeAnimation
                sequence={[
                  "React JS",
                  2000,
                  "Next JS",
                  2000,
                  "React Router",
                  2000,
                  "Redux",
                  2000,
                  "Tailwind CSS",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="div"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ut
              eveniet repudiandae totam, quis ratione maiores officia dicta
              sapiente doloribus!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact Me</button>
              <a
                href="#"
                className="text-gradient btn-link border-2 p-4 rounded-full hover:shadow-2xl hover:shadow-white"
              >
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="hidden xl:flex flex-col justify-between items-center h-[300px] border-2  p-2 w-min rounded-full fixed top-[40%] right-[2%] bg-gradient-to-b text-white  from-[#42A6E3] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#42A6E3]"
            >
              <a href="ht">
                <FaYoutube className="h-[30px] w-[30px]" />
              </a>
              <a href="ht">
                <FaGithub className="h-[30px] w-[30px]" />
              </a>
              <a href="ht">
                <FaDribbble className="h-[30px] w-[30px]" />
              </a>
              <a href="ht">
                <FaTwitter className="h-[30px] w-[30px]" />
              </a>
              <a href="ht">
                <FaWhatsapp className="h-[30px] w-[30px]" />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView="show"
            className="animate-pulse hidden lg:block flex-1 max-w-[320px] lg:max-w-[482px] "
          >
            <img
              src={Image}
              alt=""
              className="rounded-full"
            ></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
