import React from 'react'
import Split from "react-split";
import ProblemDescription from './problemDescription/problemDescription';
import PlayGround from './playGround/playGround';
import { Problem } from '@/utils/types/problemTypes';
import { ProblemData } from '@/utils/problems/problemData/problemData';

type WorkspaceProps = {
  problem: Problem
  problemData: ProblemData

}

const WorkSpace: React.FC<WorkspaceProps>  = ({problem, problemData}) => {
  return (
    <Split className='split'>
      <ProblemDescription problem={problem} />
      <div>
        <PlayGround problem={problem}/>
      </div>

    </Split>
   
  )
}

export default WorkSpace;