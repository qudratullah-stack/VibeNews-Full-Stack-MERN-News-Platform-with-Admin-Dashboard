import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
const ContactUs = () => {
  const { darkMode } = useContext(UserContext)!;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);

    try {
      await axios.post("http://localhost:9000/registration/contact", {
        name,
        email,
        message,
      });

      setSuccess("Message sent successfully! 🚀");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={`contact-page ${darkMode ? " light-contact " : "dark-contact"}`}>
        <div className="contact-hero">
          <h1>Get in <span>Touch</span></h1>
          <p>Have a question or a news tip? Let's build something amazing together.</p>
        </div>

        <form className="contact-form-box" onSubmit={handleSubmit}>
          {success && <div className="alert success-alert">{success} <span onClick={()=>{
            setSuccess('')
          }}>X</span></div>}
          {error && <div className="alert error-alert">{error}  <span onClick={()=>{
            setError('')
          }}>X</span></div>}

          <div className="input-group">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <textarea
              placeholder="How can we help you?"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="contact-social">
          <a href="https://github.com/qudratullah-stack" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:qudratullahmasoom6688@gmail.com">Email Me</a>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;