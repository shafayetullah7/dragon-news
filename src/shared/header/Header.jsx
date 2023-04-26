import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import Nav from './Nav';

const Header = () => {
    return (
        <div className='mt-10'>
            <img className='w-fit block mx-auto' src={logo} alt="logo" />
            <p className='text-center text-gray-500 mt-7'>Journalism Without Fear or Favour</p>
            <p className='text-center mt-1 text-lg text-gray-600'>{moment().format('dddd, MMMM DD, YYYY')}</p>
            <div className='flex items-center bg-gray-100 p-4 mt-10'>
                <button className="px-10 text-lg bg-rose-600 text-white font-bold py-3">Latest</button>
                <Marquee>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam sequi libero vero, provident molestiae...</p>
                </Marquee>
            </div>
            <div className='mt-5'>
                <Nav></Nav>
            </div>
        </div>
    );
};

export default Header;