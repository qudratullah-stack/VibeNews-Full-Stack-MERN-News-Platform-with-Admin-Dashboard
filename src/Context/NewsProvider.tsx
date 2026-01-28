import { useEffect, useState } from "react";
import axios from "axios";

import { UserContext } from "./UserContext";
export const NewsProvider = ({children}:{children: React.ReactNode}) =>{
    const [allNews, setAllNews] = useState([])
    const [allNewsCategory, setallNewsCategory] = useState([])
    const [loading , setLoading] = useState(false)
    const [darkMode , setDarkMode] = useState(false)
    const [userName, setUserName] = useState('')
    const [alert , setAlert] = useState(false)
     const [successMessage, setSuccessMessage] = useState('')
    const allNewsData = async()=> {
        try{
        setLoading(true)
        const res = await axios.get('https://vibenews-backend-production.up.railway.app/News/readallnews/allProduct')
        setAllNews(res.data.allProduct)
    }catch(error){
        console.error('Api Error')
    }finally{
        setLoading(false)
    }
}
const categoriesNewsData = async(categorynews:string , page = 1)=>{
    try{
        setLoading(true)
      
        const CategoryResponse = await axios.get(`https://vibenews-backend-production.up.railway.app/News/readProduct/${encodeURIComponent(categorynews)}`,{
            params:{page, limit:10}
        })
        const totalNews = CategoryResponse.data.response
        setallNewsCategory(prev => (page === 1? totalNews:[...prev , ...totalNews]))
    }catch(err){
        console.log('Not get category news', err)
    }finally{
        setLoading(false)
    }
}
   useEffect(()=>{
    const intervel = setInterval(() => {
        setAlert(false)
    }, 8000);
    return ()=> clearInterval(intervel)
   },[])
    return(
        <UserContext.Provider value={{allNews, loading , allNewsData,categoriesNewsData, allNewsCategory, darkMode, setDarkMode,setUserName,userName, alert , setAlert, successMessage, setSuccessMessage, setLoading}}>
            {children}
        </UserContext.Provider>
    )
}