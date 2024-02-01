import { problemData } from '@/utils/problems/problemData/problemData';
import { useRouter } from 'next/router';
import React, { useReducer } from 'react';
import { GrStatusGood } from "react-icons/gr"

const ProblemTable = () => {
  const router = useRouter()
    const data = [
        { data1: 'Row 1, Data 1', data2: 'Row 1, Data 2', data3: 'Row 1, Data 3', data4: 'Row 1, Data 4', data5: 'Row 1, Data 5' },
        { data1: 'Row 2, Data 1', data2: 'Row 2, Data 2', data3: 'Row 2, Data 3', data4: 'Row 2, Data 4', data5: 'Row 2, Data 5' },
        { data1: 'Row 2, Data 1', data2: 'Row 2, Data 2', data3: 'Row 2, Data 3', data4: 'Row 2, Data 4', data5: 'Row 2, Data 5' },
        { data1: 'Row 2, Data 1', data2: 'Row 2, Data 2', data3: 'Row 2, Data 3', data4: 'Row 2, Data 4', data5: 'Row 2, Data 5' },
        { data1: 'Row 2, Data 1', data2: 'Row 2, Data 2', data3: 'Row 2, Data 3', data4: 'Row 2, Data 4', data5: 'Row 2, Data 5' },
        { data1: 'Row 2, Data 1', data2: 'Row 2, Data 2', data3: 'Row 2, Data 3', data4: 'Row 2, Data 4', data5: 'Row 2, Data 5' },
        // Add more sample data as needed
      ];

      const gotoProblem=(id:string)=> {
         return router.push(`problems/${id}`)

      }
      
  return (
    <div className='flex align-middle justify-center bg-gradient-to-black bg-black z-10 opacity-70'>
  <div className="bg-black text-white p-5 rounded-lg shadow-lg h-screen w-3/4">
    <table className="w-full border-collapse">
      <thead>
        <tr className='flex justify-start '>
          <th className="py-2 px-4 border-b border-dark-yellow w-1/4">NO.</th>
          <th className="py-2 px-4 border-b border-dark-yellow w-1/4">TITLE</th>
          <th className="py-2 px-4 border-b border-dark-yellow w-1/4">DIFFICULTY</th>
          <th className="py-2 px-4 border-b border-dark-yellow w-1/4">CATEGORY</th>
          <th className="py-2 px-4 border-b border-dark-yellow w-1/4">
            STATUS
          </th>
        </tr>
      </thead>
      <tbody>
        {problemData.map((row, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? 'bg-dark-fill-3 flex justify-between' : 'bg-dark-fill-4 flex justify-between' } // Apply different background colors to even and odd rows
          >
            <td className="py-6 px-4 w-1/5">{row.order}</td>
            <td className="py-4 px-4 w-1/5 hover:text-blue-400 hover:cursor-pointer" onClick={()=>gotoProblem(row.id)}>{row.title}</td>
            <td className="py-6 px-4 w-1/5">{row.difficulty}</td>
            <td className="py-6 px-4 w-1/5">{row.category}</td>
            <td className="py-6 px-4 w-1/5">
              <div className='text-green-500'>
              <GrStatusGood />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    
  )
}

export default ProblemTable