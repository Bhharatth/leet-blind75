import Image from 'next/image'
import React from 'react'
import { CgProfile } from "react-icons/cg";
import TopBar from './topBar';
import Link from "next/link";
import { Problem } from '@/utils/types/problemTypes';

type NavbarProps ={
  // problem: Problem
}

const NavBar: React.FC<NavbarProps> = ({  }) => {
  return (
    <div className="flex flex-row justify-between bg-black opacity-60 text-white h-12">
        <div className='flex align-middle justify-center mt-3 ml-3  ' > 
       <p className="decoration-current font-mono font-black ont-bold text-yellow-400  text-2xl">
        <Link href={"/"}> LEET BLIND</Link>
       </p>

          </div>
        <div className='mt-1'>
        </div>
        <div className='flex flex-row justify-between align-middle'>
          <div className='mt-1'>
          <button type="button" className="text-gray-900 bg-white border border-gray-300 
          focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium 
          rounded-md text-sm px-5 py-2 me-2 mb-2 dark:bg-stone-600 dark:text-white dark:border-gray-600
           dark:hover:bg-gray-700 dark:hover:border-gray-600">Light</button>
          </div>
          <div>
          <div style={{ color: 'white', fontSize: '2rem', marginTop:'8px', display:"felx", alignItems:"center",
          justifyContent:"center" /* Add any other styles you need */ }}>
      <CgProfile />
    </div>
          </div>
        </div>
    </div>
  )
}

export default NavBar