import newsIcon from '../assets/newsIcon.png'
import { Link , useNavigate} from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { useContext, useState} from 'react'
export default function Navbar() {
 const navigate = useNavigate()
  const { darkMode, setDarkMode} = useContext(UserContext)
  const handlemode = ()=>{
   
    setDarkMode(prev => !prev)
  }
  const [toggle, setToggle] = useState(false)
  const handleLinkToggle = ()=>{
           setToggle(prev => !prev)
  }
  return (
    <>
      <div className={`homePageNavbar ${darkMode?'ligntNavbar':''}`}>
        <div className="navbariconparent">
        <img src={newsIcon} alt="newsIcon" />
        <span>VibeNews</span>
        </div>
        <button id='togglebtn' onClick={handleLinkToggle}>&#9776;</button>
        <div className={`navbarAdminLink  ${toggle ?"navbarToggle":''}`}>
          <Link to="/about">About</Link>
          <Link to="/help">Ask Question</Link>
          <Link to="/">Home</Link>
          <button onClick={handlemode}>{darkMode?'☾':'☼'}  </button>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
        </div>
       <div className="navbarLinkParent">
        <Link to="/AllNewsCategoryPage/general">General</Link>
        <Link to="/AllNewsCategoryPage/entertainment">Entertainment</Link>
        <Link to="/AllNewsCategoryPage/business">Business</Link>
        <Link to="/AllNewsCategoryPage/tech">Tech</Link>
        <Link to="/AllNewsCategoryPage/science">Science</Link>
        <Link to="/AllNewsCategoryPage/politics">Politics</Link>
        <Link to="/AllNewsCategoryPage/sports">Sports</Link>
        <Link to="/AllNewsCategoryPage/travel">Travel</Link>
        <Link to="/AllNewsCategoryPage/health">Health</Link>
        <Link to="/AllNewsCategoryPage/common">Common</Link>
        <Link to="/AllNewsCategoryPage/food">Food</Link>
       </div>
       <div className="selectorparent">

<select name="categorySelector" id="categorySelector" onChange={(e) => navigate(`/AllNewsCategoryPage/${e.target.value}`)}>
  <option value="" disabled selected>TopNews</option>
  <option value="general">General</option>
  <option value="business">Business</option>
  <option value="tech">Tech</option>
  <option value="science">Science</option>
  <option value="entertainment">Entertainment</option>
  <option value="politics">Politics</option>
</select>

<select name="categorySelector2" id="categorySelector2" onChange={(e) => navigate(`/AllNewsCategoryPage/${e.target.value}`)}>
  <option value="" disabled selected>OtherNews</option>
  <option value="sports">Sports</option>
  <option value="travel">Travel</option>
  <option value="health">Health</option>
  <option value="common">Common</option>
  <option value="food">Food</option>
</select>
       </div>
      </div>
    </>
  )
}
