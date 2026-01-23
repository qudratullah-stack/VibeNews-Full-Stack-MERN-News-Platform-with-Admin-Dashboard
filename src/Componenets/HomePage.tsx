import { useEffect , useState} from "react"
import { homeImagearray } from "./Array"
import Navbar from "./Navbar"
import { UserContext } from "../Context/UserContext"
import { useContext } from "react"
import  Loading from "./Loading"
// import { Link } from "react-router-dom"
  function HomePage() {
  const {loading,  allNews, allNewsData} = useContext(UserContext)!;
  useEffect(()=>{
    allNewsData()
  },[])
  const [imgLength, setImgLength] = useState(1)
 useEffect(()=>{
  const interval = setInterval(() => {
    setImgLength(prev => (prev+1)%homeImagearray.length)

  }, 4000);
  return ()=> clearInterval(interval)
},[])
let   colors = ["#00015e", 'white', '#0099ff','black']
  return (
    <>
      <Navbar />

     <div className="homepageparrent">
      <div className="textImageArrayparent">
      <div className="arraytextbox" style={{color:colors[imgLength%colors.length]}}>{homeImagearray[imgLength].text}</div>
     <div className="iamgeArrayBox">
      <img key={imgLength} src={homeImagearray[imgLength].image} alt="" />
     </div>
     </div>
    {loading && <Loading/>}
     <div className="allnewsparent">
     {
       allNews.filter((news:any)=> news.categories.includes("general")).slice(0,4).map((news:any)=>(
         <div className="singlecard" key={news._id}>
          <img src={news.image_url} alt="newsImage" />
          <h3>{news.title}</h3>
          <p>{news.description}</p>
          <h3>{news.published_at}</h3>
          <a href={news.url} target="blank"><button>Read More</button></a>
        </div>
      ))
    }
     </div>
    </div>
    </>
  )
}


export default HomePage
