export interface NewsContestType{
    loading: boolean,
    allNews: any[],
    allNewsCategory: any[],
    allNewsData:() => Promise<void>,
    categoriesNewsData:(categorynews:string) => Promise<void>
}