import React from "react";
import ParticlesBackground from "./others/ParticlesBackground"; 

const Home = () => {
  return (
    <section
      id="home"
      className="home-section text-center"
      style={{ position: "relative", height: "100vh", overflow: "hidden", backgroundColor: "#000" }}
    >
      <ParticlesBackground />
      <div className="overlay">
        <img
          src="/assets/skills/2x2.jpg"
          className="round-image"
          alt="Portrait"
        />
        <div className="mirror">
          <h1 className="text-uppercase">Hi, I'm Drexler</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
