import React from 'react'
import Imgrock from './Images/img_4.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

function About() {
    return (
        <div id="about" className="about-container-main">
            <h1 className="about-cont-heading">About Me</h1>
            <div className="about-sec-section-2">
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial={{ opacity: 0, x: -150 }}
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.2 }}
                    className="about-sec-item-1"
                >
                    <img className="about-sec-img" src={Imgrock} alt=""></img>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.2 }}
                    className="about-sec-item-2"
                >
                    <p>
                        I'm Aman Sharma, a dedicated Full-Stack Developer with a passion for creating efficient, scalable, and user-friendly applications. With a strong foundation in web development, I specialize in working with modern technologies such as React.js, Node.js, and the MERN stack to bring ideas to life.
                        <br />
                        <br />
                        I thrive on solving challenging problems, learning new tools, and collaborating with diverse teams to deliver exceptional projects. My experience spans across developing responsive front-end interfaces, building robust back-end APIs, and optimizing application performance for better user experiences.
                        <br />
                        <br />
                        When I’m not coding, I’m often exploring new ways to improve my skills or working on personal projects that reflect my creativity and technical acumen. I'm always eager to take on new challenges and contribute to meaningful projects.
                        <br />
                        Feel free to explore my work, and let’s connect if you’d like to collaborate on something exciting!
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About
