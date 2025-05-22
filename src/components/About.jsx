import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const paragraphs = [
  `I am a software engineer with 8 years of experience, including nearly 6 years in Japan and 2 years in the Philippines.`,
  `Throughout my career, I have been driven by a passion for developing innovative solutions and a commitment to delivering high-quality software. As a team leader, I have gained invaluable experience in guiding and mentoring teams, fostering collaboration, and ensuring successful project outcomes. My leadership approach emphasizes clear communication, mutual respect, and continuous improvement.`,
  `In Japan, I had the opportunity to work with globally recognized manufacturing and technology enterprises, where I contributed to projects involving automotive systems, industrial automation, and IoT solutions. These roles required a high level of discretion, as many of the projects were proprietary in nature. My experience in such environments strengthened my skills in cross-functional teamwork, agile development, and system integration.`,
  `I have honed my expertise in a wide range of programming languages and technologies, enabling me to contribute both as an individual contributor and as a strategic team player. I am highly adaptable and can quickly learn and integrate new technologies to meet the evolving needs of any project. My time in the Philippines has further enhanced my ability to thrive in fast-paced, dynamic work settings.`,
  `Additionally, I am proficient in Japanese at an intermediate level and have passed the Japanese Language Proficiency Test (JLPT) N3, which strengthens my ability to communicate effectively in bilingual team environments and with Japanese clients. I am eager to continue leveraging my leadership skills, technical expertise, and adaptability to drive exciting projects and foster professional growth in both myself and my team.`,
];

const About = () => {
  const ref = useRef(null);
  // Detect if section is at least 20% visible
  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <section
      id="about"
      className="about-section text-center py-12 bg-black text-white"
      ref={ref}
    >
      <div className="container max-w-4xl mx-auto px-6 py-8 bg-gray-900 rounded-lg shadow-lg">
        <motion.h2
          className="mb-4 flex items-center justify-center gap-3 text-3xl font-semibold tracking-wide uppercase"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-white"
            style={{ fontSize: "3.5rem", marginLeft: "0.5rem" }}
            aria-label="About Me"
            title="About Me"
          />
        </motion.h2>

        <div className="flex justify-center mb-8">
          <div className="w-20 h-1 bg-white rounded"></div>
        </div>

        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-md text-gray-300 leading-relaxed mb-6 text-left border-l-4 border-white pl-4 cursor-default"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.25, duration: 0.6 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
