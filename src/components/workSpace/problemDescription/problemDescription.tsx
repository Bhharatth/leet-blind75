import { ProblemData, problemData } from '@/utils/problems/problemData/problemData';
import { Problem } from '@/utils/types/problemTypes';
import { useRouter } from 'next/router';
import React from 'react';

type ProblemDescriptionProps = {
    problem: Problem,
}
;


const ProblemDescription:React.FC<ProblemDescriptionProps> = ({problem}) => {
  const router = useRouter();
  const routerpath = router.asPath.split("/")[2]?.toString()
  // console.log(routerpath);
  // const problemSurfaceData = problemData;
  const problemCurrentData = problemData.find((x)=> x.id === routerpath)
  console.log(problemCurrentData)
    // console.log(problemSurfaceData)
    return (
      <div className='h-screen bg-black opacity-70 relative overflow-auto text-white pt-4 pl-4'>
        <div>
          <p className='font-medium text-white text-2xl mb-4'>{problem.title}</p>
          <div className='mb-2'>
            {problemCurrentData?.difficulty === 'Easy' ? (
              <div className='bg-green-500 text-green-900 font-bold rounded-full p-1 flex justify-center text-xs min-w-0.5 w-9'>
                {problemCurrentData.difficulty}
              </div>
            ) : problemCurrentData?.difficulty === 'Medium' ? (
              <div className='bg-orange-500 text-orange-900 font-bold rounded-full p-1 flex justify-center text-xs min-w-0.5 w-12 px-8'>
                {problemCurrentData.difficulty}
              </div>
            ) : problemCurrentData?.difficulty == 'Hard' ? (
              <div className='bg-red-500 text-black font-bold rounded-full p-1 flex justify-center text-xs min-w-0.5 w-9'>
                {problemCurrentData.difficulty}
              </div>
            ) : "hi"}
          </div>
          {/* <div className='bg-red-500 text-black font-bold rounded-full p-1 flex justify-center text-xs min-w-0.5 w-9'>
                Hard
              </div> */}
          <div className='mb-4 w-11/12 text-sm'>
            <div dangerouslySetInnerHTML={{__html: problem.problemStatement}}/>
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
    
          <div className='mb-4 mt-8'>
            <p className='text-white text-sm font-medium'>Constraints:</p>
            <ul className='list-disc pl-4'>
              <div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
            </ul>
          </div>
        </div>
      </div>
    );
                    }
    
export default ProblemDescription;