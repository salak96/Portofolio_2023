/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const About = () => {
    return (
        <div name='about' id='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center w-full h-full'>
                <div className='py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-full'>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4'>
                        <div className='sm:text-right pb-8 pl-4'>
                            <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
                                About
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-5xl font-bold'>
                            <p> Web Mastery, Lifelong Learner</p>
                        </div>
                        <div>
                            <p>
                                An experienced web programmer with approximately 1 year of experience in developing innovative web solutions.
                                Possesses a deep understanding of the latest web technologies and the skills to design, develop, and optimize web
                                applications to meet client needs. Committed to creating exceptional user experiences and continuously enhancing web
                                development skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
