import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import me from '../assets/me.png';

const Home = () => {
    return (
        <div name='home' className='h-screen w-full bg-[#0a192f]'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-2xl sm:text-3xl font-bold text-white'>
                         Hello, I'm Sasangka <br></br>Front end Developer
                    </h2>
                    <p className='text-gray-500 py-5 max-w-md'>
                       Hallo, perkenalkan nama saya Sasangka. Saya adalah seorang programmer web yang berpengalaman dengan lebih dari 1 tahun pengalaman dalam mengembangkan solusi web yang inovatif.
                    </p>
                    <div>
                        <Link
                            to='about'
                            smooth
                            duration={500}
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                        >
                            About Me
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight size={25} className='ml-3' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={me} alt="me" className='object-scale-down h-48 w-full
                    ' />
                </div> 
            </div>
        </div>
    );
};

export default Home;
