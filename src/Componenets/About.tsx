import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
const About = () => {
  const { darkMode } = useContext(UserContext)!;

  return (
    <>
      <Navbar />
      <div
        className={`about-container ${darkMode ? "light-about" : "dark-about"}`}
      >
        <div className="about-hero">
          <h1>
            About <span>NewsApp</span>
          </h1>
          <p>Your favorite news, all in one place.</p>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="icon">🌍</div>
            <h3>Latest Updates</h3>
            <p>
              We deliver authentic and real-time news from reliable sources
              across the globe.
            </p>
          </div>

          <div className="about-card">
            <div className="icon">🔒</div>
            <h3>Secure Access</h3>
            <p>
              Your data is protected with our advanced authentication and
              security protocols.
            </p>
          </div>

          <div className="about-card">
            <div className="icon">🌗</div>
            <h3>Dark Mode</h3>
            <p>
              Whether it's day or night, enjoy a seamless reading experience
              tailored for your eyes.
            </p>
          </div>
        </div>

        <hr className="divider" />

        <div className="developer-section">
          <h2>About the Developer</h2>
          <p>
            This project is built using <strong>React</strong>,{" "}
            <strong>TypeScript</strong>, and{" "}
            <strong>Modern Web Technologies</strong>. My goal is to provide
            users with a clean, fast, and interactive platform for staying
            updated with world events.
          </p>
          <div className="tech-stack">
            <h2>Technologies Used</h2>
            <div className="tech-badges">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
              <span>Axios</span>
            </div>
          </div>

          <hr className="divider" />

          <div className="developer-section">
            <h2>About the Developer</h2>
            <p>
              This project is built using modern web technologies. My goal is to
              provide users with a clean, fast, and interactive platform for
              staying updated with world events.
            </p>
            <div className="social-links">
              <a href="https://github.com/qudratullah-stack" target="_blank">
                {" "}
                <button className="social-btn">GitHub</button>
              </a>
              <button className="social-btn">LinkedIn</button>
            </div>
          </div>
          <h2>Why NewsApp?</h2>
          <p>
            Most news platforms are cluttered and slow. NewsApp solves this by
            providing fast, clean, and distraction-free access to authentic
            news.
          </p>
          <ul className="features-list">
            <li>✔ JWT-based authentication</li>
            <li>✔ Protected routes</li>
            <li>✔ Responsive design</li>
            <li>✔ API-based news fetching</li>
          </ul>
          <p>
            Hi, I'm <strong>Qudrat Ullah</strong>, a full-stack developer
            focused on building scalable and user-friendly web applications.
          </p>
          <h3>Want to see the code?</h3>
          <p>Check out the GitHub repository or connect with me.</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
