import React from 'react';
import Categories from './Categories';

const LeftNav = ({categories}) => {
    return (
        <div>
            <Categories categories={categories}></Categories>
        </div>
    );
};

export default LeftNav;