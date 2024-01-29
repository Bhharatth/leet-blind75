import { Problem } from '@/utils/types/problemTypes';
import React from 'react';

type ProblemDescriptionProps = {
    problem: Problem
}


const ProblemDescription:React.FC<ProblemDescriptionProps> = ({problem}) => {
    console.log({problem})
    return (
        <div className='h-screen bg-black opacity-70 relative overflow-auto text-white pt-4 pl-4'>
        <div>
          <p className='font-medium text-white text-2xl mb-4'>{problem.title}</p>
          <div className='mb-2'>
            <div className='bg-green-500 text-green-900 font-bold rounded-full p-1 flex justify-center text-xs min-w-0.5 w-9 '>
              easy
            </div>
          </div>
          <div className='mb-4 w-11/12 text-sm'>
            <div dangerouslySetInnerHTML={{__html: problem.problemStatement}}/>
            {/* <p>
              Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
            </p>
            <p>
              You may assume that each input would have exactly one solution, and you may not use the same element twice.
            </p>
            <p>
              You can return the answer in any order.
            </p> */}
          </div>


          <div className='max-w'>

            {problem.examples.map((example, index)=> (
                 <div className='mb-4 mt-8 w-11/12 overflow-x-hidden' key={example.id}>
                 <p className='font-bold text-xl mb-2'>Example {index + 1}:</p>
                 <div className='bg-gray-800 rounded p-4'>
                   <p className='text-white'>
                   <strong className='text-white'>Input: </strong> {example.inputText}
                   <br/>
                   <strong>Output:</strong>
                   {example.outputText} <br />
                   {example.explanation && (
                    <>
                    <strong>Explentaion:</strong>{example.explanation}</>
                   )}
                   </p>
                 </div>
               </div>

            ))}
          </div>
  
       
  
          {/* Repeat for other examples if needed */}
  
          <div className='mb-4 mt-8'>
            <p className='text-white text-sm font-medium'>Constraints:</p>
            <ul className='list-disc pl-4'>
            <div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
            </ul>
          </div>
  
        </div>
      </div>
    )
}

export default ProblemDescription