import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    fullScreen: { enable: false },
    background: {
      color: "#000000", // pure black background to highlight white particles
    },
    particles: {
      number: {
        value: 100,
        density: { enable: true, value_area: 1200 },
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 1.5,
          opacity_min: 0.3,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: { enable: true, minimumValue: 1 },
        anim: {
          enable: true,
          speed: 1,
          size_min: 1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 0.3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      links: {
        enable: true,
        distance: 140,
        color: "#ffffff",
        opacity: 0.15,
        width: 0.6,
        blink: false,
        consent: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: false,
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 150,
          links: {
            opacity: 0.4,
          },
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
