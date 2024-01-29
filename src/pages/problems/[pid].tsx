import NavBar from '@/components/navBar';
import TopBar from '@/components/topBar';
import WorkSpace from '@/components/workSpace/workSpace';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problemTypes';
import React from 'react';

type ProblempageProps = {
    problem: Problem

}

// const problem = jumpGameHandler;


const ProblemPage: React.FC<ProblempageProps> = ({ problem }) => {


    return (
        <div className="bg-slate-600">
            <NavBar />
            <WorkSpace problem={problem} />
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