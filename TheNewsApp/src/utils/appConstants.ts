export const categories: CatType[] = [
    {id: 1, category: 'Business'},
    {id: 2, category: 'Entertainment'},
    {id: 3, category: 'General'},
    {id: 4, category: 'Health'},
    {id: 5, category: 'Science'},
    {id: 6, category: 'Sports'},
    {id: 7, category: 'Technology'},
]

export type CatType = {
    id: number,
    category: string
}

export type CatItems = {
    title: string,
    author: string,
    description: string,
    content: string,
    publishedAt: string,
    urlToImage: string,
    url: string
}