import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

//data store

let services = [
  {
    name: "React JS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam animi atque, laborum error blanditiis aperiam culpa vero iste ratione! Soluta!",
    link: "Learn More...",
  },
  {
    name: "Next JS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam animi atque, laborum error blanditiis aperiam culpa vero iste ratione! Soluta!",
    link: "Learn More...",
  },
  {
    name: "Tailwind CSS Styling",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam animi atque, laborum error blanditiis aperiam culpa vero iste ratione! Soluta!",
    link: "Learn More...",
  },
  {
    name: "Framer-Motion Animation",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam animi atque, laborum error blanditiis aperiam culpa vero iste ratione! Soluta!",
    link: "Learn More...",
  },
];
function Services() {
  return (
    <section
      className="section"
      id="services"
    >
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat">
            <h2 className="h2 text-accent mb-6 ">What I Offer</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Front-End Developer with over 3 Years Experience
            </h3>
            <button className="btn btn-sm">My Craft</button>
          </div>
          {/* services */}
          <div>services</div>
        </div>
      </div>
    </section>
  );
}

export default Services;
