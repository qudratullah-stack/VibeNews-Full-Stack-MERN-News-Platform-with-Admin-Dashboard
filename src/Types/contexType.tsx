export interface NewsContestType{
    loading: boolean,
    allNews: any[],
    allNewsData:() => Promise<void>
}