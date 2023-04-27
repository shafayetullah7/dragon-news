import React, { useState } from 'react';
import Nav from '../shared/header/Nav';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error,setError] = useState('');
    const handleSubmit = e =>{
        e.preventDefault();
        setError('');

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if(!email || !password){
            setError('All fields must be filled');
            return;
        }
        else{
            console.log(email,password);
            form.reset();
        }
    }
    return (
        <div>
            <Nav></Nav>
            <div className='border rounded-xl w-[400px] mx-auto mt-16 p-10'>
                <h1 className='text-4xl font-bold text-center pb-10 border-b'>Login your account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full mt-10">
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
                    <input type='submit' className="btn w-full block mt-10" value='Login'/>
                </form>
                <p className='text-xs text-red-500 my-5'>{error}</p>
                <p className='mt-10 text-center'>Do not have an account? <Link to={'/register'} className="link link-primary">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;