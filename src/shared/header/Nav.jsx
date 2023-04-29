import React, { useContext } from 'react';
import { MdAccountCircle } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Nav = () => {
    const {user,setUser,logoutUser,loading} = useContext(AuthContext);
    // console.log('loading: ',loading);
    // console.log('user: ',user?'true':'false');
    const navigate = useNavigate();

    const logout = () => {
        logoutUser()
        .then(result => {
            console.log(result);
            setUser(null);
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-600">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><a>About</a></li>
                        <li><a>Career</a></li>
                    </ul>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-gray-600">
                    <li><Link to={'/'}>Home</Link></li>
                        <li><a>About</a></li>
                        <li><a>Career</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-2 items-center">
                    
                    {/* {user && <MdAccountCircle className='text-5xl'></MdAccountCircle>} */}
                    {
                        user && 
                        <div className="dropdown relative">
                            {/* <label tabIndex={0} className="btn m-1">Click</label> */}
                            <MdAccountCircle tabIndex={0} className='text-5xl cursor-pointer'></MdAccountCircle>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 absolute right-0">
                                <li><a>Profile</a></li>
                                <li onClick={logout}><a>Logout</a></li>
                            </ul>
                        </div>
                    }
                    {/* {
                        if(!user){

                        }
                    } */}
                    {(!user && !loading) && <button className="btn" onClick={()=>{navigate('/login')}}>Login</button>}
                </div>
            </div>
        </div>
    );
};

export default Nav;