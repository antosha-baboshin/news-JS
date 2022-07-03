export interface Source {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}
export interface ResponseObject {
    status: string;
    sources: Source[];
}
export interface Data {
    status: string;
    totalResults: number;
    articles: NewsInterface[];
}
export interface NewsInterface {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
export interface Callback<T> {
    (data: T): void;
}
