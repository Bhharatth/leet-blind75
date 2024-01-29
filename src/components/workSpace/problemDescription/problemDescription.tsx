import React from 'react';


const ProblemDescription = () => {
    return (
        <div className='h-screen bg-black opacity-70 relative overflow-auto text-white pt-4 pl-4'>
        <div>
          <p className='font-medium text-white text-2xl mb-4'>1. Two Sum</p>
          <div className='mb-2'>
            <div className='bg-green-500 text-green-900 font-bold rounded-full p-1 flex justify-center text-xs min-w-0.5 w-9 '>
              easy
            </div>
          </div>
          <div className='mb-4 w-11/12'>
            <p>
              Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
            </p>
            <p>
              You may assume that each input would have exactly one solution, and you may not use the same element twice.
            </p>
            <p>
              You can return the answer in any order.
            </p>
          </div>


          <div className='max-w-fit'>
          <div className='mb-4 mt-8 w-11/12 overflow-x-hidden'>
            <p className='font-bold text-xl mb-2'>Example 1:</p>
            <div className='bg-gray-800 rounded p-4'>
              <p className='text-white'>
                Input: nums = [2,7,11,15], target = 9
                Output: [0,1]
                Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
              </p>
            </div>
          </div>

          <div className='mb-4 mt-8 w-11/12 overflow-x-hidden'>
            <p className='font-bold text-xl mb-2'>Example 1:</p>
            <div className='bg-gray-800 rounded p-4'>
              <p className='text-white'>
                Input: nums = [2,7,11,15], target = 9
                Output: [0,1]
                Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
              </p>
            </div>
          </div>

          <div className='mb-4 mt-8 w-11/12 overflow-x-hidden'>
            <p className='font-bold text-xl mb-2'>Example 1:</p>
            <div className='bg-gray-800 rounded p-4'>
              <p className='text-white'>
                Input: nums = [2,7,11,15], target = 9
                Output: [0,1]
                Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
              </p>
            </div>
          </div>
          </div>
  
       
  
          {/* Repeat for other examples if needed */}
  
          <div className='mb-4 mt-8'>
            <p className='text-white text-sm font-medium'>Constraints</p>
            <ul className='list-disc pl-4'>
              <li>1. Constraint 1</li>
              <li>2. Constraint 2</li>
              <li>3. Constraint 3</li>
              <li>4. Constraint 4</li>
            </ul>
          </div>
  
        </div>
      </div>
    )
}

export default ProblemDescription