import React from 'react';
import Rating from 'react-rating';
import { AiFillStar,AiOutlineStar,AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';

const News = ({news}) => {
    const date = new Date(news?.author?.published_date);
    return (
        <div className='rounded-lg border mb-5'>
            <div className='bg-gray-100 rounded-t-lg p-4'>
                <div className='flex gap-3 items-center'>
                    <img className='w-11 h-11 rounded-full' src={news?.author?.img} alt="author image" />
                    <div>
                        <p className='font-bold'>{news?.author?.name}</p>
                        <p className='text-sm text-gray-500'>{date.toDateString()}</p>
                    </div>
                </div>
            </div>

            <div className='m-5'>
                <p className='text-xl font-bold'>{news.title}</p>
                <img className='w-full my-7' src={news.image_url} alt="" />
                <p className='text-sm text-gray-500'>{news.details.slice(0,250)}...<Link to={`/news/${news._id}`} className='text-md text-orange-500 font-bold'>See More</Link></p>
            </div>
            <div className='mx-5 border-t py-3 flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <Rating
                    className='text-amber-500 mt-1'
                    readonly
                    placeholderRating={news.rating.number}
                    emptySymbol={<AiOutlineStar></AiOutlineStar>}
                    placeholderSymbol={<AiFillStar></AiFillStar>}
                    fullSymbol={<AiFillStar></AiFillStar>} 
                    ></Rating>
                    <p className='text-sm text-gray-500'>{news.rating.number}</p>
                </div>
                <div className='flex gap-1 items-center text-gray-500'>
                    <p className='text-sm'>{news.total_view}</p>
                    <AiFillEye className='text-xl'></AiFillEye>
                </div>
            </div>
        </div>
    );
};

export default News;