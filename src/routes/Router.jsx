import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import { fetchCategories, fetchCategoryNews, fetchNews, fetchSingleNews, homePageDataLoader } from "../utilities/fetcher";
import Newses from "../home/Newses";
import FullNews from "../FullNews";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                children:[
                    {
                        path:'/',
                        element:<Newses></Newses>,
                        loader:fetchNews
                    },
                    {
                        path:'/categories/:id',
                        element:<Newses></Newses>,
                        loader:fetchCategoryNews
                    }
                ]
            },
            {
                path:'/news/:id',
                element:<FullNews></FullNews>,
                loader:fetchSingleNews
            }
        ]
    }
])