import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import right1 from '../../../assets/right1.png'
import right2 from '../../../assets/right2.png'
import right3 from '../../../assets/right-3.png'
import bg from '../../../assets/bg.png'
import { Link } from 'react-router-dom';


const RightSideNav = () => {
    return (
        <div className='space-y-5'>
            <div className='space-y-3 p-3'>
                <h2 className='font-semibold text-2xl'>Login With</h2>
                <button className='w-full btn text-[16px]'>
                    <FaGoogle />
                    Login With Google
                </button>
                <button className='w-full btn text-[16px]'>
                    <FaGithub />
                    Login With GitHub
                </button>
            </div>
            <div>
                <h2 className='text-2xl font-semibold p-2'>Find Us On</h2>
                <div className='border'>
                    <Link>
                        <div className='flex items-center space-x-2 p-4 border-b'>
                            <FaFacebookF className='text-[18px]' />
                            <p className='text-[18px] font-semibold text-[#000000bf]'>Facebook</p>
                        </div>
                    </Link>
                    <Link>
                        <div className='flex items-center space-x-2 p-4 border-b'>
                            <FaTwitter className='text-[18px]' />
                            <p className='text-[18px] font-semibold text-[#000000bf]'>Twitter</p>
                        </div>
                    </Link>
                    <Link>
                        <div className='flex items-center space-x-2 p-4 border-b'>
                            <FaInstagram className='text-[18px]' />
                            <p className='text-[18px] font-semibold text-[#000000bf]'>Instagram</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='bg-[#f3f3f3] flex flex-col justify-center items-center'>
                <h2>Q-Zone</h2>
                <img src={right1} alt="" />
                <img src={right2} alt="" />
                <img src={right3} alt="" />

            </div>
            <div className={`flex flex-col justify-center items-center bg-[url('../../../assets/bg.png')]`}>
                <h2 className='text-4xl text-center  font-poppins leading-tight'>Create an Amazing Newspaper</h2>
                <p className=' text-[18px] text-center'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='btn'>Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNav;
