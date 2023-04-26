import React from 'react';
import { AiOutlineGoogle,AiOutlineGithub } from "react-icons/ai";
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";

const RightNav = () => {
    return (
        <div>
            <div className='mt-2'>
                <p className='text-xl text-gray-400 font-bold'>Login With</p>
                <div className='mt-5'>
                    <button className="btn btn-outline btn-info w-full my-1 normal-case flex justify-center items-center gap-2"><AiOutlineGoogle className='text-3xl'></AiOutlineGoogle>Login with Google</button>
                    <button className="btn btn-outline w-full my-1 normal-case flex justify-center items-center gap-2"><AiOutlineGithub className='text-3xl'></AiOutlineGithub>Login with Github</button>
                </div>
            </div>
            <div className='mt-10'>
                <p className='text-xl text-gray-400 mt-2 font-bold'>Find Us On</p>
                <div className="btn-group btn-group-vertical mt-5 w-full">
                    <button className="btn btn-outline btn-primary flex justify-start items-center gap-2 normal-case"><BsFacebook className='text-2xl'></BsFacebook>Facebook</button>
                    <button className="btn btn-outline btn-info flex justify-start items-center gap-2 normal-case"><BsTwitter className='text-2xl'></BsTwitter>Twitter</button>
                    <button className="btn btn-outline btn-error flex justify-start items-center gap-2 normal-case"><BsInstagram className='text-2xl'></BsInstagram>Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;