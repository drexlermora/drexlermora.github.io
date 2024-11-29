import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const about_me = `I am a software engineer with 8 years of experience,
including nearly 6 years in Japan and 2 years in the Philippines. My
career has been driven by a passion for developing innovative solutions
and a commitment to delivering high-quality software. Having worked in
diverse environments, I have honed my skills in various programming
languages and technologies. My experience in Japan has enriched my
understanding of agile methodologies and cross-cultural collaboration,
while my time in the Philippines has further developed my ability to
adapt to fast-paced work settings. I am also proficient in Japanese at
an intermediate level, which enhances my communication with teams and
clients in bilingual environments. I am eager to leverage my skills and
experience to contribute to exciting projects and continue my
professional growth.`;

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
