import React from "react";
import styles from "./hero.module.css";

const HeroSection = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <h1>
              Discover a world of{" "}
              <span style={{ color: "#38bdf8" }}>imagination</span> through our
              stories, Let the journey begin!
            </h1>
            <h2>Where Stories Come Alive, Start Diving! </h2>
            <div className={styles.buttons}>
              <button>
                <span style={{ color: "#fff" }}>Get Started ➔</span>
              </button>
              <button>
                {" "}
                <i
                  className="fa-brands fa-react"
                  style={{
                    marginRight: "10px",
                    fontSize: "30px",
                  }}
                ></i>
                <span>About</span>
              </button>
            </div>
          </div>
          <div className={styles.rightside}>
            <video autoPlay muted loop id="myVideo">
              <source src="/22.mp4" type="video/MP4"></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
