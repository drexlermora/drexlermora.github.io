import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const about_me = `I am a senior software engineer with 8 years of experience, including nearly 6 years in Japan and 2 years in the Philippines. Throughout my career, I have been driven by a passion for developing innovative solutions and a commitment to delivering high-quality software. As a team leader, I have gained invaluable experience in guiding and mentoring teams, fostering collaboration, and ensuring successful project outcomes. My leadership approach emphasizes clear communication, mutual respect, and continuous improvement.
onments, I have honed my skills in various programming languages and technologies, allowing me to contribute both as an individual contributor and a strategic team player. My experience in Japan has enriched my understanding of agile methodologies and cross-cultural collaboration, while my time in the Philippines has enhanced my ability to thrive in fast-paced, dynamic work settings. Additionally, I am proficient in Japanese at an intermediate level, which strengthens my communication with teams and clients in bilingual environments.
I am eager to continue leveraging my leadership skills, technical expertise, and experience to drive exciting projects and foster professional growth in both myself and my team.`;

const About = () => {
  return (
    <section id="about" className="about-section text-center">
      <div className="container">
        <h2>About Me</h2>

        <Typewriter
          words={[about_me]}
          loop={1}
          cursor
          typeSpeed={10}
          cursorStyle='_'
        />
      </div>
    </section>
  );
};

export default About;
