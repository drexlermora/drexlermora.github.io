import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 40,
        density: { enable: true, value_area: 800 },
      },
      color: { value: ["#3498db", "#2980b9", "#1abc9c", "#16a085"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.6,
        random: true,
      },
      size: {
        value: 15,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 5,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      // Change from line_linked to links for newer versions
      links: {
        enable: true,      // Enable connection lines
        distance: 150,     // Max distance to draw lines between particles
        color: "#ffffff",  // Line color
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: ["grab", "bubble"],  // Grab mode for connected effect + bubble
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 20,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
