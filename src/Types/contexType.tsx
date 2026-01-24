import {type Dispatch ,type SetStateAction } from "react"
export interface NewsContestType{
    loading: boolean,
    darkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
    allNews: any[],
    allNewsCategory: any[],
    allNewsData:() => Promise<void>,
    categoriesNewsData:(categorynews:string) => Promise<void>
}