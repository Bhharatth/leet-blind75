import Image from 'next/image'
import React from 'react'
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between bg-black opacity-60 text-white h-12">
        <div className='flex align-middle justify-center mt-3 ml-3  ' > 
       <p className="decoration-current font-mono font-weight: 900 ont-bold">LEET BLIND</p>

          </div>
        <div>b</div>
        <div className='flex flex-row justify-between'>
          <div>
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-stone-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-green-700">Light</button>
          </div>
          <div>
          <div style={{ color: 'white', fontSize: '2rem', marginTop:'8px', display:"felx", alignItems:"center",justifyContent:"center" /* Add any other styles you need */ }}>
      <CgProfile />
    </div>
          </div>
        </div>
    </div>
  )
}

export default NavBar