import { useParams } from "react-router-dom";

export const fetchCategories = async ()=>{
    const res = await fetch('http://localhost:5000/categories');
    const data = await res.json();
    return data;
}
export const fetchNews = async ()=>{
    const res = await fetch('http://localhost:5000/news');
    const data = await res.json();
    return data;
}
export const fetchCategoryNews = async ({params})=>{
    const res = await fetch(`http://localhost:5000/categories/${params.id}`);
    const data = await res.json();
    return data;
}
export const fetchSingleNews = async ({params})=>{
    const res = await fetch(`http://localhost:5000/news/${params.id}`);
    const data = await res.json();
    return data;
}
export const homePageDataLoader = async ()=>{
    return Promise.all([fetchNews()]);
}