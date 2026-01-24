import newsIcon from '../assets/newsIcon.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <div className="homePageNavbar">
        <div className="navbariconparent">
        <img src={newsIcon} alt="newsIcon" />
        <span>VibeNews</span>
        </div>
        <div className="navbarAdminLink">
          <Link to="/about">About</Link>
          <Link to="/help">Ask Question</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
        </div>
       <div className="navbarLinkParent">
        <Link to="/AllNewsCategoryPage/general">general</Link>
        <Link to="/AllNewsCategoryPage/entertainment">entertainment</Link>
        <Link to="/AllNewsCategoryPage/business">business</Link>
        <Link to="/AllNewsCategoryPage/tech">tech</Link>
        <Link to="/AllNewsCategoryPage/science">science</Link>
        <Link to="/AllNewsCategoryPage/politics">politics</Link>
        <Link to="/AllNewsCategoryPage/sports">sports</Link>
        <Link to="/AllNewsCategoryPage/travel">travel</Link>
        <Link to="/AllNewsCategoryPage/health">health</Link>
        <Link to="/AllNewsCategoryPage/common">common</Link>
        <Link to="/AllNewsCategoryPage/food">food</Link>
       </div>
      </div>
    </>
  )
}
