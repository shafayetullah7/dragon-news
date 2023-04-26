import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div>
            <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                <li className="menu-title">
                    <span className='text-xl'>All Categories</span>
                </li>
                {
                    categories.map(category=><li key={category.id} className='pl-4'><Link to={`/categories/${category.id}`}>{category.name}</Link></li>)
                }
                
                
            </ul>
        </div>
    );
};

export default Categories;