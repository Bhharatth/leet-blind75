import React from 'react';
import * as Form from '@radix-ui/react-form';

type ProblemInputType ={
    title: string,
    category: string,
    difficulty: string,
    order: any,
    likes: any,
    dislikes: any,
  }

type AdminProblemUpdateProps={
    problemInput: ProblemInputType,
    setProblemInput: React.Dispatch<React.SetStateAction<ProblemInputType>>
  }
  

const AdminProblemUpdateForm:React.FC<AdminProblemUpdateProps> = ({problemInput, setProblemInput}) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProblemInput(prevState => ({
          ...prevState,
          [name]: value
        }));
    
        console.log(problemInput);
      };
  return (
    <div className="w-[260px]">
    <div className='text-white text-xl font-bold font-mono mt-16'>UPDATE PROBLEM</div>
    <div className="grid mb-[10px] mt-7">
      <label className="text-[15px] font-medium leading-[35px] text-white font-sans">Title</label>
      <input
        className="box-border hover:outline-green-300 w-full shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[black] selection:color-sky-400 selection:bg-black bg-black"
        type="text"
        name='title'
        required
        value={problemInput.title}
        onChange={handleInputChange}
      />
    </div>
    <div className="grid mb-[10px] mt-7">
      <label className="text-[15px] font-medium leading-[35px] text-white font-sans">Category</label>
      <input
        className="box-border hover:outline-green-300 w-full shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[black] selection:color-sky-400 selection:bg-black bg-black"
        type="text"
        name='category'
        required
        value={problemInput.category}
        onChange={handleInputChange}
      />
    </div>
    <div className="grid mb-[10px] mt-7">
      <label className="text-[15px] font-medium leading-[35px] text-white font-sans">Difficulty</label>
      <input
        className="box-border hover:outline-green-300 w-full shadow-black inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[black] selection:color-sky-400 selection:bg-black bg-black"
        type="text"
        name='difficulty'
        required
        value={problemInput.difficulty}
        onChange={handleInputChange}
      />
    </div>
    <div className="mt-7">
      <button className="font-bold font-mono text-base box-border w-full text-violet-11 inline-flex h-[35px] items-center justify-center rounded-full bg-sky-700 px-[15px] font-medium leading-none mt-[10px] border-gray-200 text-white disabled:opacity-50">
        Update
      </button>
    </div>
  </div>
  )
}

export default AdminProblemUpdateForm