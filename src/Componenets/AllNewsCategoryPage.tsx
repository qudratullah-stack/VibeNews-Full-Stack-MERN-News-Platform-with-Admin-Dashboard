import { UserContext } from "../Context/UserContext"
import { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import defaultImage from '../assets/Homepageheaderbg.png'
import Navbar from "./Navbar";
import Loading from "./Loading";
function AllNewsCategoryPage() {
    const getToken = localStorage.getItem('usertoken')
const [page, setPage]= useState(1)
    const {loading, allNewsCategory,categoriesNewsData, darkMode} = useContext(UserContext)!;
      const {Category} = useParams<{Category:string}>();
    useEffect(()=>{
        if(Category){
        categoriesNewsData(Category)}
    },[Category])
    const handleMore = ()=>{
      const addPage = page +1
      setPage(addPage)
      categoriesNewsData(Category!, addPage)
    }

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
                {getToken ?( <Link to={news.url } target="blank"><button>Read More</button></Link>):(<Link to={"/login"}><button>Read More</button></Link>)}
        </div>
    ))}
    </div>
    <button onClick={handleMore} disabled={loading} className="load-more-btn">{loading?"Loading ...":"Load More"}</button>
    </div>
    </>
  )
}

export default AllNewsCategoryPage
