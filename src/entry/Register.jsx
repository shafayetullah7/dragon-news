import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Nav from '../shared/header/Nav';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const [error,setError] = useState('');
    const {createUser,setUser} = useContext(AuthContext);
    const location = useLocation();
    const from = location?.state?.from?.pathname;
    console.log('reg location: ',location);
    console.log('reg from: ',from);
    const navigate = useNavigate();

    
    const handleSubmit = e =>{
        e.preventDefault();
        setError('');

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if(!email || !password || !name){
            setError('All fields must be filled');
            return;
        }
        else{
            console.log(email,password);
            createUser(email,password)
            .then(result => {
                console.log(result.user)
                form.reset();
                navigate(from||'/',{replace:true});
                // alert('Successfully registered. Please Login!');
            })
            .catch(err=>{
                setError(`Error: ${err.message}`);
            })
        }
    }
    return (
        <div>
            <Nav></Nav>
            <div className='border rounded-xl w-[400px] mx-auto mt-16 p-10'>
                <h1 className='text-4xl font-bold text-center pb-10 border-b'>Register your account</h1>
                <form onSubmit={handleSubmit}>
                <div className="form-control w-full mt-10">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">What is your email?</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full mt-2">
                        <label className="label">
                            <span className="label-text">What is your password?</span>
                        </label>
                        <input type="password" name='password' placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <input type='submit' className="btn w-full block mt-10" value='Register'/>
                </form>
                <p className='text-xs text-red-500 my-5'>{error}</p>
                <p className='mt-10 text-center'>Already have an account? <Link to={'/login'} className="link link-primary">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;