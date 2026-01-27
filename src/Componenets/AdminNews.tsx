import Navbar from "./Navbar"
import axios from "axios"
import { useState , useEffect } from "react"
import { UserContext } from "../Context/UserContext"
import { useContext } from "react"
function AdminNews() {
     const { setAlert,  loading,  darkMode, alert, successMessage,setLoading, setSuccessMessage } = useContext(UserContext)!;
    const [title , setTitle] = useState('')
    const [description , setdescription] = useState('')
    const [image_url , setimage_url] = useState('')
    const [url , setUrl] = useState('')
    const [categories , setcategory] = useState('')
    const [admingetNews, setAdminGetNews] =  useState<any> ([])
 const createnews = async ()=>{
     setLoading(true)
    try{
        await axios.post('http://localhost:9000/admin/CreateNews',{
            uuid: `admin-${Date.now()}`,
            title,
            description,
            url,
            image_url,
            categories: categories.split(',').map(c => c.trim())
        })
        setAlert(true)
      setSuccessMessage('Admin Your data is successfully saved')
    }catch(err){
        setAlert(true)
        setSuccessMessage('Some thing wrong')
    }finally{
        setLoading(false)
    }
 }
 const handlepost = ()=>{
    createnews()
 }
//  get only admin save data
const readnews = async()=>{
    setLoading(true)
    try{
   const res = await axios.get('http://localhost:9000/admin/readnews')
   const newresponse = res.data.readadminNews
   setAdminGetNews(newresponse)
          setAlert(true)
      setSuccessMessage('Admin data get successfully')
    }catch(err){
        setAlert(true)
        setSuccessMessage('Some thing wrong') 
    }finally{
        setLoading(false)
    }
}
useEffect(()=>{
    readnews()
},[])
  return (
    <>
    <Navbar/>
     {alert && <div className="alertmessage">{successMessage}</div>}
       <div className={darkMode?'bgnone':'homepageparrent padding'}>
    <div className={`adminnews-parent ${darkMode?'':'dark-admin-parent'}`}>
       <label htmlFor="title">Title</label>
    <input type="text"  id="title"  onChange={e => setTitle(e.target.value)}/>  
     <label htmlFor="description">description</label>
    <input type="text"  id="description"  onChange={e => setdescription(e.target.value)}/>
     <label htmlFor="image-Url">image-Url</label>
    <input type="text"  id="image-Url" onChange={e => setimage_url(e.target.value)} />
     <label htmlFor="Url">Url</label>
    <input type="text"  id="Url"  onChange={e => setUrl(e.target.value)}/>
     <label htmlFor="category">category</label>
    <input type="text"  id="category"  onChange={e => setcategory(e.target.value)}/>
   <button className="admin-submit-btn" onClick={handlepost}>{loading? "Saving...":"Post News"}</button>
   
    </div>
    </div>
    {admingetNews.map((e: any) =>(
        <div className={`readcard ${darkMode? 'dark-card':''}`} key={e._id}>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <h3>{e.image_url}</h3>
            <h3>{e.url}</h3>
            <h3>{e.categories}</h3>
            <h3>{e.published_at}</h3>
        </div>
    ))}
    </>
  )
}

export default AdminNews
