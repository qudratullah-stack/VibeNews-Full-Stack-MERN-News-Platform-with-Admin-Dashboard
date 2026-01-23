import { useState } from "react";
import axios from "axios";

import { UserContext } from "./UserContext";
export const NewsProvider = ({children}:{children: React.ReactNode}) =>{
    const [allNews, setAllNews] = useState([])
    const [allNewsCategory, setallNewsCategory] = useState([])
    const [loading , setLoading] = useState(false)
    const allNewsData = async()=> {
        try{
        setLoading(true)
        const res = await axios.get('http://localhost:9000/News/readallnews/allProduct')
        setAllNews(res.data.allProduct)
    }catch(error){
        console.error('Api Error')
    }finally{
        setLoading(false)
    }
}
const categoriesNewsData = async(categorynews:string)=>{
    try{
        setLoading(true)
      
        const CategoryResponse = await axios.get(`http://localhost:9000/News/readProduct/${encodeURIComponent(categorynews!)}`)
        setallNewsCategory(CategoryResponse.data.response)
    }catch(err){
        console.log('Not get category news', err)
    }finally{
        setLoading(false)
    }
}
   
    return(
        <UserContext.Provider value={{allNews, loading , allNewsData,categoriesNewsData, allNewsCategory}}>
            {children}
        </UserContext.Provider>
    )
}