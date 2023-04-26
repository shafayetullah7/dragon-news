import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';


import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Newses from './Newses';

const Home = () => {
    
    return (
        <div className='grid grid-cols-4 gap-4'>
            <div>
                <LeftNav></LeftNav>
            </div>
            <div className='col-span-2'>
                <Outlet></Outlet>
            </div>

            <div>
                <RightNav></RightNav>
            </div>
        </div>
    );
};

export default Home;