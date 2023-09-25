import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_afm0afs', 'template_g5ks3bk', form.current, 'sY9mWDj-1RcErjIZt').then(
            (result) => {
                console.log(result.text);
                console.log('Message sent!');
                toast.success('Email sent!'); // Tampilkan pop-up setelah pesan terkirim
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <div className='flex flex-col max-w-[600px] w-full bg-white rounded-lg p-8 shadow-md'>
                <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                    <p className='text-4xl font-bold text-cyan-500'>Contact</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
                    <label htmlFor='user_name' className='text-gray-700 font-semibold'>
                        Name
                    </label>
                    <input
                        type='text'
                        id='user_name'
                        name='user_name'
                        placeholder='PT. ABC'
                        className='border border-gray-300 rounded-lg py-2 px-3'
                    />

                    <label htmlFor='user_email' className='text-gray-700 font-semibold'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='user_email'
                        name='user_email'
                        placeholder='PT_ABC@example.com'
                        className='border border-gray-300 rounded-lg py-2 px-3'
                    />

                    <label htmlFor='message' className='text-gray-700 font-semibold'>
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        placeholder='Saya ingin mengajukan permintaan pengembangan front-end untuk proyek website kami.'
                        className='border border-gray-300 rounded-lg py-2 px-3 h-32'
                    ></textarea>
                    <button
                        type='submit'
                        className='bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50'
                    >
                        Send
                    </button>
                </form>
            </div>
            <Toaster position="bottom-right" reverseOrder={false} /> {/* Pindahkan Toaster di luar form */}
        </div>
    );
};

export default Contact;
