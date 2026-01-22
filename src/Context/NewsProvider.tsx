import { useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
export const NewsProvider = ({children}:{children: React.ReactNode}) =>{
    const [allNews, setAllNews] = useState([])
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
console.log(allNews)
   
    return(
        <UserContext.Provider value={{allNews, loading , allNewsData}}>
            {children}
        </UserContext.Provider>
    )
}