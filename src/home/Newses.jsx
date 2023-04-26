import React from 'react';
import News from './News';
import { useLoaderData } from 'react-router-dom';

const Newses = () => {
    const newses = useLoaderData();
    console.log(newses);
    return (
        <div className='mt-2'>
            <p className='text-xl text-gray-400 font-bold'>Dragon News Home</p>
            <div className='mt-5'>
                {
                    newses.map(news => <News key={news._id} news={news}></News>)
                }
            </div>
        </div>
    );
};

export default Newses;