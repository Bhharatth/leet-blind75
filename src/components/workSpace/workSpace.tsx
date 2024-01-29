import React from 'react'
import Split from "react-split";
import ProblemDescription from './problemDescription/problemDescription';
import PlayGround from './playGround/playGround';
import { Problem } from '@/utils/types/problemTypes';

type WorkspaceProps = {
  problem: Problem

}

const WorkSpace: React.FC<WorkspaceProps>  = ({problem}) => {
  return (
    <Split className='split'>
      <ProblemDescription problem={problem}/>
      <div>
        <PlayGround/>
      </div>

    </Split>
   
  )
}

export default WorkSpace;