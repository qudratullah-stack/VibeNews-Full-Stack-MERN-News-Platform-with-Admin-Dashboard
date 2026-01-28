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
    const [editId , setEditId] = useState(null)
    const [updatebtn , setUpdateBtn] = useState(false)
 const createnews = async ()=>{
     setLoading(true)
    try{
        await axios.post('https://vibenews-backend-production.up.railway.app/admin/CreateNews',{
            uuid: `admin-${Date.now()}`,
            title,
            description,
            url,
            image_url,
            categories: categories.split(/[ ,]/).map(c => c.trim()).filter(c => c !=='')
        },{headers: {Authorization: localStorage.getItem('usertoken')}})
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
   const res = await axios.get('https://vibenews-backend-production.up.railway.app/admin/readnews',{headers: {Authorization: localStorage.getItem('usertoken')}})
   const newresponse = res.data.readadminNews
   setAdminGetNews(newresponse)

    }catch(err){
       
    }finally{
        setLoading(false)
    }
}

useEffect(()=>{
    readnews()
},[])
const handleupdate = ()=>{
           const updatenews = async()=>{
                    try{
                  await  axios.put(`https://vibenews-backend-production.up.railway.app/admin/updatenews/${editId}`,{
                        title, description, image_url, url, categories: typeof categories === 'string'? categories.split(/[, ]/).map(c => c.trim()).filter(c => c !== ""): categories
                    },{headers: {Authorization: localStorage.getItem('usertoken')}})
                    setAlert(true)
                    setSuccessMessage('News Updated')
                }catch(err){
                    setAlert(true)
                    setSuccessMessage('Some thing went wrong')

                }
                }
                updatenews()
                setUpdateBtn(false)
}
 
  return (
    <>
    <Navbar/>
     {alert && <div className="alertmessage">{successMessage}</div>}
       <div className={darkMode?'bgnone padding':'homepageparrent padding'}>
    <div className={`adminnews-parent ${darkMode?'':'dark-admin-parent'}`}>
       <label htmlFor="title">Title</label>
    <input type="text"  id="title" value={title} onChange={e => setTitle(e.target.value)}/>  
     <label htmlFor="description">description</label>
    <input type="text"  id="description" value={description} onChange={e => setdescription(e.target.value)}/>
     <label htmlFor="image-Url">image-Url</label>
    <input type="text"  id="image-Url" value={image_url} onChange={e => setimage_url(e.target.value)} />
     <label htmlFor="Url">Url</label>
    <input type="text"  id="Url" value={url} onChange={e => setUrl(e.target.value)}/>
     <label htmlFor="category">category</label>
    <input type="text"  id="category" value={categories} onChange={e => setcategory(e.target.value)}/>
  {!updatebtn && <button className="admin-submit-btn" onClick={handlepost}>{loading? "Saving...":"Post News"}</button>}
  {updatebtn && <button className="admin-submit-btn"  onClick={handleupdate}>{loading? "Updating...":"Update News"}</button>}
   
    </div>
    <div className="allcardparent">
    {admingetNews.map((e: any) =>(
        <div className={`readcard ${darkMode? '':'dark-card'}`} key={e._id}>
            <h2> <strong>Title</strong> = {e.title}</h2>
            <p> <strong>discription</strong> = {e.description.substring(0,100)}...</p>
            <h3> <strong>ImageUrl</strong> = {e.image_url}</h3>
            <h3><strong>Url</strong> = {e.url}</h3>
            <h3><strong>Category</strong> = {e.categories}</h3>
            <div className="card-action">
            <button onClick={()=>{
                    const deletnews = async()=>{
    try{
        await axios.delete(`https://vibenews-backend-production.up.railway.app/admin/deletenews/${e._id}`,{headers: {Authorization: localStorage.getItem('usertoken')}})
        setAdminGetNews(admingetNews.filter((item: any) => item._id !== e._id))
        setAlert(true)
        setSuccessMessage('Deleted')
    }catch(err){
        setAlert(true)
        setSuccessMessage('Not Found')
    }
}
deletnews()
            }}>Delete</button>
            <button onClick={()=>{
                setTitle(e.title)
                setdescription(e.description)
                setimage_url(e.image_url)
                setUrl(e.url)
                setcategory(e.categories.join(', '))
                setEditId(e._id)
                window.scrollTo(0,0)
               setUpdateBtn(true)
            }}>Edit</button>
            </div>
        </div>
        
    ))}
    
    </div>
    </div>
    </>
  )
}

export default AdminNews
