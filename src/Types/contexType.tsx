import {type Dispatch ,type SetStateAction } from "react"
export interface NewsContestType{
    loading: boolean,
    darkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
    setUserName: Dispatch<SetStateAction <string>>
    allNews: any[],
    allNewsCategory: any[],
    allNewsData:() => Promise<void>,
    categoriesNewsData:(categorynews:string, page?:number) => Promise<void>
    userName: string,
    alert : boolean,
     setAlert:  Dispatch<SetStateAction <boolean>>,
     successMessage: string,
     setSuccessMessage : Dispatch<SetStateAction <string>>,
}