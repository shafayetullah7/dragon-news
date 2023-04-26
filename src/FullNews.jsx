import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import RightNav from './home/RightNav';

const FullNews = () => {
    const news = useLoaderData();
    return (
        <div className='grid grid-cols-4 gap-4'>

            <div className='col-span-3'>
                <p className='text-xl text-gray-400 font-bold'>Dragon News</p>
                <div className='border mt-5 p-7 rounded-xl'>
                    <img src={news.image_url} alt="" />
                    <h2 className='text-2xl font-bold my-5'>{news.title}</h2>
                    <p className='text-gray-500'>{news.details}</p>
                    <Link className='px-5 py-2 bg-rose-600 text-white my-5 w-fit text-lg flex items-center gap-2' to={`/categories/${news.category_id}`}><AiOutlineArrowLeft className='text-xl'></AiOutlineArrowLeft>All news in this category</Link>
                </div>
            </div>
            <div>
                <RightNav></RightNav>
            </div>
        </div>
    );
};

export default FullNews;