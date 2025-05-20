import React from "react";
import ParticlesBackground from "./others/ParticlesBackground";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section
      id="home"
      className="home-section text-center"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <ParticlesBackground />
      <div className="overlay">
        <img
          src="/assets/skills/2x2.jpg"
          className="round-image"
          alt="Portrait"
        />
        <div className="mirror">
          <h4 className="text-uppercase text-white text-3xl md:text-5xl font-bold">
            <Typewriter
              words={["Drexler Mora 👨‍💻 | Software Engineer ⚙️ | JLPT N3✅"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Home;
