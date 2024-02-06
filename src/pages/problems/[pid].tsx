import NavBar from '@/components/navBar';
import ProblemPageNav from '@/components/problemPageNav';
import TopBar from '@/components/topBar';
import WorkSpace from '@/components/workSpace/workSpace';
import { problems } from '@/utils/problems';
import { ProblemData, problemData} from '@/utils/problems/problemData/problemData';
import { Problem } from '@/utils/types/problemTypes';
import React from 'react';

type ProblempageProps = {
    problem: Problem,
    problemSurfaceData: ProblemData

}

// const problem = jumpGameHandler;


const ProblemPage: React.FC<ProblempageProps> = ({ problem,problemSurfaceData }) => {


    return (
        <div className="bg-slate-600">
            <ProblemPageNav />
            <WorkSpace problem={problem} problemData={problemSurfaceData}/>
        </div>
    )

};

export default ProblemPage;




export async function getStaticPaths() {

    const paths = Object.keys(problems).map((key) => ({
        params: { pid: key }
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { pid: string } }) {
    const { pid } = params;
    const problem = problems[pid];

    if (!problem) {
        console.log('not found');
        return {
        }
    }

    problem.handlerFunction = problem.handlerFunction.toString();

    return {
        props: {
            problem,
        }
    }
};