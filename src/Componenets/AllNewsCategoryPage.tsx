import { UserContext } from "../Context/UserContext"
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import defaultImage from '../assets/Homepageheaderbg.png'
import Navbar from "./Navbar";
import Loading from "./Loading";
function AllNewsCategoryPage() {

    const {loading, allNewsCategory,categoriesNewsData, darkMode} = useContext(UserContext)!;
      const {Category} = useParams<{Category:string}>();
    useEffect(()=>{
        if(Category){
        categoriesNewsData(Category)}
    },[Category])
  return (
    <>
    <Navbar/>
     <div className={darkMode?'bgnone':'homepageparrent'}>
        {loading &&<Loading/>}
     <div className="allnewsparent">
    {allNewsCategory.map((news:any)=>(
           <div className={`singlecard ${darkMode?'lightCard':''}`} key={news._id}>
        <img
  src={news.image_url && news.image_url.trim() !== "" ? news.image_url : defaultImage}
  alt="newsImage"
  onError={(e) => {
    e.currentTarget.src = defaultImage;
  }}
/>
          <h3>{news.title}</h3>
          <p>{news.description}</p>
          <h3>{news.published_at}</h3>
          <a href={news.url} target="blank"><button>Read More</button></a>
        </div>
    ))}
    </div>
    </div>
    </>
  )
}

export default AllNewsCategoryPage
