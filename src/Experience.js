import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

function Experience() {
  return (
    <div className="experience-container">
      <h1 className="exp-cont-heading">Experience</h1>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial={{ opacity: 0, x: 50 }}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="exp-cont-sec-1"
      >
        <div className="exp-sec-item-1">
          <h1>Roxiler Systems</h1>
          <h1>Sep. 2021 - Present</h1>
        </div>
        <div className="exp-sec-item-2">
          <p>
            Worked as a Front-end Developer to build responsive and interactive
            web applications using React.js, ensuring seamless user experiences.
            Collaborated with cross-functional teams to design, implement, and
            optimize features, leading to a 20% improvement in user retention.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
