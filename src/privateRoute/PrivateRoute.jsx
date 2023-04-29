import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('pr: ',location);
    if(loading){
        return <div>
            <h1 className='text-6xl my-10 text-center font-bold'>Loading...</h1>
        </div>
    }
    else{
        if(user)return children;
        else return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    }
    // return (
    //     <div>
    //         {user && children}
    //         {!user && <Navigate to={'/login'} state={{from:location}} replace></Navigate>}
    //     </div>
    // );
};

export default PrivateRoute;