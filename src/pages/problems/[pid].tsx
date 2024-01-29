import NavBar from '@/components/navBar';
import TopBar from '@/components/topBar';
import WorkSpace from '@/components/workSpace/workSpace';
import React from 'react';

type ProblempageProps={

}

const ProblemPage: React.FC<ProblempageProps>=()=> {

    return (
        <div className="bg-slate-600">
            <NavBar/>
            <WorkSpace/>
        </div>
    )

};

export default ProblemPage;