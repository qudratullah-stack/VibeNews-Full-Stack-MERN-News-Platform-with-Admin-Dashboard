import { createContext } from "react";
import {type NewsContestType} from '../Types/contexType'
export const UserContext = createContext<NewsContestType>({
    loading: false,
    allNews: [],
    allNewsData:async() => {},
    categoriesNewsData:async() => {},
    allNewsCategory:[]

})