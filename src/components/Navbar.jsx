import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

import { HiOutlineMail } from 'react-icons/hi';
import { BsDownload } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1c285642] text-gray-300'>
            <div className='md:flex gap-x-8'>
             <h6><a href="/" className='text-2xl font-bold text-cyan-500'>SLK</a></h6>
            </div>
            <ul className='hidden md:flex gap-x-8'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        <h6 text-4xl className='text-cyan-500'>Home</h6>
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                    <h6 text-4xl className='text-cyan-500'>About</h6>
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                    <h6 text-4xl className='text-cyan-500'>Skills</h6>
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                    <h6 text-4xl className='text-cyan-500'>Works</h6>
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                    <h6 text-4xl className='text-cyan-500'>Contact</h6>
                    </Link>
                </li>
            </ul>
            {/* Hamburger menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-blue-600 rounded-r-lg '>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/sasangka-lambang-12172b293/'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-black rounded-r-lg'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/salak96'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-[#d13838] rounded-r-lg'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='mailto:lambangsasangka0@gmail.com'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-[#21ffb1e7] rounded-r-lg'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1h7CajYJgPb_e_4SHvCm0uyy-dVtW31m6/view?usp=sharing'>
                            Resume <BsDownload size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
