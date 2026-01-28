import  { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { Link } from 'react-router-dom';
const Footer = () => {
  const { darkMode } = useContext(UserContext)!;

  return (
    <footer className={`main-footer ${darkMode ? 'light-footer' : ' dark-footer '}`}>
      <div className="footer-content">
      
        <div className="footer-section brand">
          <h2 className="vibe-logo">VibeNews</h2>
          <p>The world's most trusted news source, delivering high-quality journalism straight to your screen.</p>
        </div>

    
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link  to="/about">About Us</Link></li>
            <li><Link to="/help">Contact</Link></li>
            <li><Link  to="/AllNewsCategoryPage/general">Categories</Link></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://github.com/qudratullah-stack" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:qudratullahmasoom6688@gmail.com">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <span>VibeNews</span> | Built with ❤️ by Qudratullah</p>
      </div>
    </footer>
  );
};

export default Footer;