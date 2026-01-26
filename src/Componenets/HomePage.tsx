import { useEffect , useState} from "react"
import { homeImagearray } from "./Array"
import Navbar from "./Navbar"
import { UserContext } from "../Context/UserContext"
import { useContext } from "react"
import defaultImage from '../assets/Homepageheaderbg.png'
import  Loading from "./Loading"
import { Link } from "react-router-dom"
import Footer from "./Footer"
  function HomePage() {
  const {loading,  allNews, allNewsData, darkMode, alert, successMessage } = useContext(UserContext)!;
  const getToken = localStorage.getItem('usertoken')
  useEffect(()=>{
    allNewsData()
  },[])
  const [imgLength, setImgLength] = useState(1)
 useEffect(()=>{
  const interval = setInterval(() => {
    setImgLength(prev => (prev+1)%homeImagearray.length)

  }, 10000);
  return ()=> clearInterval(interval)
},[])
let   colors = ["#00015e", 'white', '#0099ff','black']
  return (
    <>
      <Navbar />
       {alert && <div className="alertmessage">{successMessage}</div>}
     <div className={darkMode?'bgnone':'homepageparrent'}>
      <div className="textImageArrayparent">
      <div className="arraytextbox" style={{color:colors[imgLength%colors.length]}} key={imgLength}>{homeImagearray[imgLength].text}</div>
     <div className="iamgeArrayBox">
      <img key={imgLength} src={homeImagearray[imgLength].image} alt="" />
      {/* <img key={imgLength} src={allNews.map((e)=>{
      return  e.image_url
      })[imgLength]} alt="" /> */}
     </div>
     </div>
    {loading && <Loading/>}
     <div className="allnewsparent">
     {
       allNews.filter((news:any)=> news.categories.includes("general")).slice(0,4).map((news:any)=>(
         <div className={`singlecard ${darkMode?'lightCard':''}`} key={news._id}>
          <img src={news.image_url} alt="newsImage" />
          <h3>{news.title}</h3>
          <p>{news.description}</p>
           <p>Reading Time {news.description.length / 200}</p>
          <h3>{news.published_at}</h3>
         {getToken ?( <Link to={news.url } target="blank"><button>Read More</button></Link>):(<Link to={"/login"}><button>Read More</button></Link>)}
        </div>
      ))
    }
     </div>
<div className={`featured-section ${darkMode ? 'dark-featured' : ''}`}>
  <h2 className="section-title">Featured</h2>
  
  <div className="featured-grid">
    <div className="main-story">
      {allNews.filter((n: any) => n.categories.includes("entertainment")).slice(0, 1).map((news: any) => (
        <div key={news._id} className="main-card">
          <div className="image-wrapper">
            <img src={news.image_url} alt="Main News" />
          </div>
          <div className="content">
            <span className="label">EXPLAINER</span>
            <h3>{news.title || "US military moves assets to Middle East"}</h3>
            <p>{news.description.substring(0, 150)}...</p>
             <p>Reading Time {news.description.length / 200}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="side-list">
      {allNews.filter((n: any) => n.categories.includes("entertainment")).slice(0, 4).map((news: any) => (
        <div key={news._id} className="side-card">
          <div className="side-content">
            <span className="side-label">EXPLAINER</span>
            <h4>{news.description.substring(0, 60)}...</h4>
          </div>
   <img
  src={news.image_url && news.image_url.trim() !== "" ? news.image_url : defaultImage}
  alt="newsImage"
  onError={(e) => {
    e.currentTarget.src = defaultImage;
  }}
/>
        </div>
      ))}
    </div>
  </div>
</div>
<div className={`featured-section ${darkMode ? 'dark-featured' : ''}`}>
  <h2 className="section-title">Wellness</h2>
  
  <div className="featured-grid">
    <div className="main-story">
      {allNews.filter((n: any) => n.categories.includes("health")).slice(0, 1).map((news: any) => (
        <div key={news._id} className="main-card">
          <div className="image-wrapper">
            <img src={news.image_url} alt="Main News" />
          </div>
          <div className="content">
            <span className="label">EXPLAINER</span>
            <h3>{news.title || "US military moves assets to Middle East"}</h3>
            <p>{news.description.substring(0, 150)}...</p>
             <p>Reading Time {news.description.length / 200}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="side-list">
      {allNews.filter((n: any) => n.categories.includes("health")).slice(0, 4).map((news: any) => (
        <div key={news._id} className="side-card">
          <div className="side-content">
            <span className="side-label">EXPLAINER</span>
            <h4>{news.description.substring(0, 60)}...</h4>
          </div>
   <img
  src={news.image_url && news.image_url.trim() !== "" ? news.image_url : defaultImage}
  alt="newsImage"
  onError={(e) => {
    e.currentTarget.src = defaultImage;
  }}
/>
        </div>
      ))}
    </div>
  </div>
</div>
{/* ====================== */}
<div className={`featured-section ${darkMode ? 'dark-featured' : ''}`}>
  <h2 className="section-title">Innovation</h2>
  
  <div className="featured-grid">
    <div className="main-story">
      {allNews.filter((n: any) => n.categories.includes("science")).slice(0, 1).map((news: any) => (
        <div key={news._id} className="main-card">
          <div className="image-wrapper">
            <img src={news.image_url} alt="Main News" />
          </div>
          <div className="content">
            <span className="label">EXPLAINER</span>
            <h3>{news.title || "US military moves assets to Middle East"}</h3>
            <p>{news.description.substring(0, 150)}...</p>
            <p>Reading Time {news.description.length / 200}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="side-list">
      {allNews.filter((n: any) => n.categories.includes("science")).slice(0, 4).map((news: any) => (
        <div key={news._id} className="side-card">
          <div className="side-content">
            <span className="side-label">EXPLAINER</span>
            <h4>{news.description.substring(0, 60)}...</h4>
          </div>
   <img
  src={news.image_url && news.image_url.trim() !== "" ? news.image_url : defaultImage}
  alt="newsImage"
  onError={(e) => {
    e.currentTarget.src = defaultImage;
  }}
/>
        </div>
      ))}
    </div>
  </div>
</div>
<div className="home-layout">
  <div className="main-news-content">
  </div>
  <aside className={`trending-sidebar ${darkMode ? 'dark-sidebar' : ''}`}>
    <h2 className="trending-title">Trending <span>Now</span></h2>
    <div className="trending-list">
      {allNews.slice(0, 5).map((news: any, index: number) => (
        <div key={news._id} className="trending-item">
          <div className="trending-number">0{index + 1}</div>
          <div className="trending-info">
            <span className="side-label">{news.categories[0]}</span>
            <h4>{news.description.substring(0, 50)}...</h4>
            <p className="read-time">3 min read</p>
          </div>
        </div>
      ))}
    </div>
  </aside>
</div>
    </div>
    <Footer/>
    </>
  )
}


export default HomePage
