import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import TopBar from './topBar';
import { Problem } from '@/utils/types/problemTypes';
import { useRouter } from "next/router";
import { string } from 'zod';
import { problems } from '@/utils/problems';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import Link from "next/link";
import next from 'next';

type ProblemPageNavProps = {
  // ProblemPage: boolean;
}

const ProblemPageNav: React.FC<ProblemPageNavProps> = () => {
  const router = useRouter();
  const problemQuery = router.query.pid as string;

  useEffect(()=> {
    const { order  } = problems[router.query.pid as string] as Problem;
    console.log("order:",order)

  },[])
  const { order } = problems[router.query.pid as string] as Problem;

  const handleChangeProblem = (isNext: boolean) => {
		const { order } = problems[router.query.pid as string] as Problem;
		const direction = isNext ? 1 : -1;
		const nextProblemOrderId = order + direction;
		const nextProblemId = Object.keys(problems).find((key) => problems[key]?.order === nextProblemOrderId);

		if (isNext && !nextProblemId) {
			const firstProblemKey = Object.keys(problems).find((key) => problems[key]?.order === 1);
			router.push(`/problems/${firstProblemKey}`);
		} else if (!isNext && !nextProblemId) {
			const lastProblemKey = Object.keys(problems).find(
				(key) => problems[key]?.order === Object.keys(problems).length
			);
			router.push(`/problems/${lastProblemKey}`);
		} else {
			router.push(`/problems/${nextProblemId}`);
		}
	};

  return (
    <div className="flex flex-row justify-between bg-black opacity-60 text-white h-12">
      <div className='flex align-middle justify-center mt-3 ml-3  ' >
        <p className="decoration-current font-mono font-black ont-bold text-yellow-400  text-2xl">
          <Link href={"/"}> LEET BLIND</Link>
        </p>

      </div>
      <div className='mt-1'>
        <div className='flex items-center gap-4 flex-1 justify-center mt-1 hover:bg-gray-900 rounded-xl transition duration-300 ease-in-out'>

          <Link
            href='/'
            className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
          >
            <div className='text-yellow-300'>
              <BsList />
            </div>
            <p>Problem List</p>
          </Link>
          {/* <div
            className='flex text-yellow-300 items-center justify-center  bg-dark-fill-3 rounded-2xl hover:bg-black h-8 w-8 cursor-pointer'
            >
            {order === 1 || 2 ?"": (
            <FaChevronLeft onClick={() => handleChangeProblem(false)} />
            )}
          </div> */}
          <div
            className='flex  text-yellow-300 items-center justify-center rounded-2xl bg-dark-fill-3 hover:bg-black h-8 w-8 cursor-pointer'

          >
             {order !== 1 && (
    <FaChevronRight onClick={() => handleChangeProblem(true)} />
  )}
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between align-middle'>
        <div className='mt-1'>
          <button type="button" className="text-gray-900 bg-white border border-gray-300 
              focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium 
              rounded-md text-sm px-5 py-2 me-2 mb-2 dark:bg-stone-600 dark:text-white dark:border-gray-600
               dark:hover:bg-gray-700 dark:hover:border-gray-600">Light</button>
        </div>
        <div>
          <div style={{
            color: 'white', fontSize: '2rem', marginTop: '8px', display: "felx", alignItems: "center",
            justifyContent: "center" /* Add any other styles you need */
          }}>
            <CgProfile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemPageNav