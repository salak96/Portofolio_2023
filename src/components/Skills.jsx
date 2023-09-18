import React from 'react';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=' w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
                    <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#dbe075] hover:scale-110 duration-500 bg-orange-600'>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#a7b361] hover:scale-110 duration-500 bg-blue-600'>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#ffffff] hover:scale-110 duration-500 bg-black'>
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#c8f2ce] hover:scale-110 duration-500 bg-green-500'>
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#ffffff] hover:scale-110 duration-500 bg-blue-500'>
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#a19a4eb8] hover:scale-110 duration-500 bg-yellow-600'>
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Skills;
