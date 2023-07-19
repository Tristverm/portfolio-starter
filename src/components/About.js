import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import { RxStarFilled } from "react-icons/rx";
function About() {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section
      className="section "
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* buttons*/}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:flex flex-col gap-x-8 justify-between items-center hidden h-2/6"
          >
            <button className="btn btn-lg">Contact Me</button>
            <a
              href="#"
              className="text-gradient btn-link border-2 px-6 py-4 rounded-full hover:shadow-2xl hover:shadow-white"
            >
              My Portfolio
            </a>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <h2 className="text-[55px] text-accent leading-[0.8] font-semibold lg:text-[110px] mb-2 text-center">
              About Manuel
            </h2>
            <div className="text-center h3">
              <span className="text-white text-base lg:h3 ">
                I am a Front-End Developer with:
              </span>
              {""}{" "}
              <TypeAnimation
                sequence={[
                  "3 + Years Experience",
                  2000,
                  "18 + Completed projects",
                  2000,
                  "a Five-Star Rating",
                  2000,
                  "Five + Front-End Certifications",
                  2000,
                ]}
                speed={55}
                className="text-gradient underline text-base lg:h3 shadow-white shadow-xl"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            {/* <h3>I'm a Front-End Developer with over 3 Years Experience</h3> */}
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              nam aperiam praesentium sequi ea ratione unde temporibus ex
              deleniti quidem sint harum, ullam recusandae aspernatur fugiat
              nulla cumque quibusdam! Error praesentium autem corporis illo at!
              Molestiae illum soluta laboriosam animi vitae delectus
              perferendis. Exercitationem, tempora! Voluptatum consequuntur vel
              minima iusto et adipisci suscipit, architecto quaerat obcaecati
              eius ut ullam! Ratione, quia doloribus mollitia, beatae id est
              quis incidunt maxime minus sequi praesentium. Dolorem eligendi
              soluta eaque repellendus quis, laudantium accusantium blanditiis
              reiciendis tenetur minima sed vitae nihil pariatur libero amet,
              impedit dolorum. Illo eos optio modi magni provident, tempore
              quibusdam!
            </p>
            {/* stats */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex-row  gap-x-6 lg:gap-x-10 mb-12 justify-center items-center mx-auto hidden lg:flex"
            >
              <div className="active p-4 border-4 hover:scale-105 duration-200 mt-4 h-[140px] w-[140px] shadow-2xl hover:shadow-inner shadow-black">
                <div className="text-[40px] font-tertiary text-white mb-2 text-center">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={3}
                      duration={5}
                    />
                  ) : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px] text-center">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div className="active p-4 border-4 hover:scale-105 duration-200 mt-4 h-[140px] w-[140px] shadow-2xl hover:shadow-inner shadow-black">
                <div className="text-[40px] font-tertiary text-white mb-2 text-center">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={18}
                      duration={10}
                    />
                  ) : null}{" "}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px] text-center">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div className="active p-4 border-4 hover:scale-105 duration-200 mt-4 h-[140px] w-[140px] shadow-2xl hover:shadow-inner shadow-black">
                <div className="text-[40px] font-tertiary text-white mb-2 text-center">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={4.8}
                      duration={8}
                    />
                  ) : null}

                  <RxStarFilled className="inline" />
                </div>
                <div className="font-primary text-sm tracking-[2px] text-center">
                  Customer <br />
                  Rating
                </div>
              </div>
              <div className="active h-[140px] w-[140px] p-4 border-4 hover:scale-105 duration-200 mt-4 shadow-2xl hover:shadow-inner shadow-black">
                <div className="text-[40px] font-tertiary text-white mb-2 text-center">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={5}
                      duration={8}
                    />
                  ) : null}{" "}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px] text-center ">
                  Front-End <br />
                  Certs
                </div>
              </div>
            </motion.div>
            <div className="flex flex-row justify-between items-center lg:hidden ">
              <button className="btn btn-lg hover:shadow-2xl hover:shadow-white">
                Contact Me
              </button>
              <a
                href="#"
                className="text-gradient btn-link border-2 px-6 py-4 rounded-full hover:shadow-2xl hover:shadow-white"
              >
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
