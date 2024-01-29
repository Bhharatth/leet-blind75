import React from 'react'
import Split from "react-split";
import ProblemDescription from './problemDescription/problemDescription';
import PlayGround from './playGround/playGround';

const WorkSpace = () => {
  return (
    <Split className='split'>
      <ProblemDescription/>
      <div>
        <PlayGround/>
      </div>

    </Split>
   
  )
}

export default WorkSpace;