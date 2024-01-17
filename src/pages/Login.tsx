import LoginForm from '@/components/loginform'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from 'next/image';


const Signup = () => {
    return (
        <div>
            <div className='flex flex-row h-screen'>
            <div className='bg-gray-950 md:flex-1/3 w-0 md:w-1/3 lg:flex-1/3 lg:w-1/3  relative md:overflow-hidden lg:overflow-hidden'>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50"></div>
    <Image src="/logo-7.jpg" className="rounded-md" width={600} height={300} alt='logo' />
    {/* <div className='flex flex-wrap ml-4 bg-gray-950 text-lime-600 relative text-5xl font-mono font-extrabold decoration-black decoration-8 antialiased'>
        Solve, Learn, Achieve, Repeat, Master...
    </div> */}
</div>


                <div className='bg-zinc-900 flex-1 md:flex-2/3 lg:flex-2/3  w-sceen md:w-2/3 lg:w-2/3  flex flex-col justify-start items-center'>
                    <div>
                        <LoginForm/>
                    </div>


                    <div className="flex items-center mt-5">
                        <div className="w-9 h-0.5 bg-gray-500"></div>

                        <hr className="flex flex-col border-gray-500" />
                        <span className=" flex justify-center text-gray-500 text-xs uppercase"> Or Sign UP with</span>
                        <div className="w-9 h-0.5 bg-gray-500"></div>

                    </div>


                    <div className='flex flex-row gap-5 justify-center mt-4'>
                        <FaGithub className='text-white' style={{ fontSize: '4rem' }} />

                        <FcGoogle className='text-white' style={{ fontSize: '4rem' }} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup