
import React, { useCallback, useEffect } from "react";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import * as tsParticles from "tsparticles";

const ParticleBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log("Particles container loaded", container);
  }, []);

  useEffect(() => {
    tsParticles.load("tsparticles", {
      fullScreen: false,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#3498db",
        },
        links: {
          color: "#3498db",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }).then((container) => {
      particlesLoaded(container);
    });
  }, [particlesLoaded]);

  return (
    <div id="tsparticles" className="fixed inset-0 -z-10"></div>
  );
};

export default ParticleBackground;
