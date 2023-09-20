import React from 'react';

const About = () => {
    return (
        <div name='about' id='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center w-full h-full'>
                <div className='py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-full'>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4'>
                        <div className='sm:text-right pb-8 pl-4'>
                            <p className='sm-text-right pb-8 pl-4'>About</p>
                        </div>
                        <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-5xl font-bold'>
                            <p>Hello I'm Sasangka a Front end Developer </p>
                        </div>
                        <div>
                            <p>
                            Profil Profesional
                            Seorang programmer web berpengalaman dengan lebih dari 1 tahun pengalaman dalam mengembangkan solusi web yang inovatif.
                            Memiliki pemahaman yang kuat tentang teknologi web terkini dan kemampuan untuk merancang, mengembangkan, dan mengoptimalkan aplikasi web yang memenuhi kebutuhan klien. 
                            Berkomitmen untuk menciptakan pengalaman pengguna yang menakjubkan dan terus meningkatkan keterampilan dalam pengembangan web.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
