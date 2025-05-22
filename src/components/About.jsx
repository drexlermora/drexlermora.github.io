import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"; // profile icon

const paragraphs = [
  `I am a software engineer with 8 years of experience, including nearly 6 years in Japan and 2 years in the Philippines.`,
  `Throughout my career, I have been driven by a passion for developing innovative solutions and a commitment to delivering high-quality software. As a team leader, I have gained invaluable experience in guiding and mentoring teams, fostering collaboration, and ensuring successful project outcomes. My leadership approach emphasizes clear communication, mutual respect, and continuous improvement.`,
  `In Japan, I had the opportunity to work with globally recognized manufacturing and technology enterprises, where I contributed to projects involving automotive systems, industrial automation, and IoT solutions. These roles required a high level of discretion, as many of the projects were proprietary in nature. My experience in such environments strengthened my skills in cross-functional teamwork, agile development, and system integration.`,
  `I have honed my expertise in a wide range of programming languages and technologies, enabling me to contribute both as an individual contributor and as a strategic team player. I am highly adaptable and can quickly learn and integrate new technologies to meet the evolving needs of any project. My time in the Philippines has further enhanced my ability to thrive in fast-paced, dynamic work settings.`,
  `Additionally, I am proficient in Japanese at an intermediate level and have passed the Japanese Language Proficiency Test (JLPT) N3, which strengthens my ability to communicate effectively in bilingual team environments and with Japanese clients. I am eager to continue leveraging my leadership skills, technical expertise, and adaptability to drive exciting projects and foster professional growth in both myself and my team.`,
];

const About = () => {
  return (
    <section id="about" className="about-section text-center py-12">
      <div className="container max-w-4xl mx-auto px-4">
      <h2 className="mb-8 flex items-center justify-center gap-3">
        About Me
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-gray-700"
          style={{ fontSize: "3.5rem", marginLeft: "0.5rem" }}
          aria-label="About Me"
          title="About Me"
        />
      </h2>

        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-md text-gray-700 leading-relaxed mb-4 text-left"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
