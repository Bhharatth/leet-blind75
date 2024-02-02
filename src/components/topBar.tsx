import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import Link from "next/link";

type TopBarProps ={
	handleChangeProblem:(nextProblem:boolean)=> void;
}

const TopBar:React.FC<TopBarProps> = ({handleChangeProblem}) => {
	const problemPage = true;
	return (
		<div>
			{problemPage && (
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
					<div
						className='flex text-yellow-300 items-center justify-center  bg-dark-fill-3 rounded-2xl hover:bg-black h-8 w-8 cursor-pointer'
					>
						<FaChevronLeft onClick={()=> handleChangeProblem(false)}/>
					</div>
					<div
						className='flex  text-yellow-300 items-center justify-center rounded-2xl bg-dark-fill-3 hover:bg-black h-8 w-8 cursor-pointer'

					>
						<FaChevronRight onClick={()=> handleChangeProblem}/>
					</div>
				</div>
			)}

		</div>
	)
}

export default TopBar