import React, { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import ProblemCard from '@/components/problemCard';
import AdminProblemFormCreate from '@/components/adminProblemCreateForm';

type AdminPageProps = {

}

// model problemDetails {
//   id         Int   @id @default(autoincrement())
//   title      String
//   category   String
//   difficulty String
//   likes      Int
//   dislikes   Int
//   order      Int
// }

const AdminPage: React.FC<AdminPageProps> = () => {
    const [problemInput, setProblemInput] = useState({
        title: "",
        difficulty: "",
        category: "",
        order: 0,
        likes: 0,
        dislikes: 0
    });

    return (
        <div>
            <div className='flex flex-row h-screen'>
                <div className='bg-gray-950 md:flex-1/3 w-0 md:w-1/3 lg:flex-1/3 lg:w-1/3  relative md:overflow-hidden lg:overflow-hidden  overflow-y-scroll'>
                    <div className="relative h-screen overflow-y-scroll">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50"></div>
                        {/* <Image src="/logo-7.jpg" className="rounded-md" width={600} height={300} alt='logo' /> */}
                        <div className="p-4">
                            <ProblemCard />
                            <ProblemCard />
                            <ProblemCard />
                            <ProblemCard />
                            <ProblemCard />
                            <ProblemCard />
                            <ProblemCard />
                            <ProblemCard />
                        </div>
                    </div>
                </div>


                <div className='bg-zinc-900 flex-1 md:flex-2/3 lg:flex-2/3  w-sceen md:w-2/3 lg:w-2/3  flex flex-col justify-start items-center'>
                    <div>
                        <div className='flex col justify-around'>
                            <div className='font-bold font-mono text-base box-border w-full text-violet11  inline-flex h-[35px] items-center justify-center rounded-full bg-sky-700 px-[15px] font-medium leading-none   mt-[10px] border-gray-200 text-white  disabled:opacity-50 mx-5'>CREATE PROBLEM</div>
                            <div className='font-bold font-mono text-base box-border w-full text-violet11  inline-flex h-[35px] items-center justify-center rounded-full bg-sky-700 px-[15px] font-medium leading-none   mt-[10px] border-gray-200 text-white  disabled:opacity-50 mx-5'>UPDATE PROBLEM</div>

                        </div>
                        <div>
                            <AdminProblemFormCreate problemInput={problemInput} setProblemInput={setProblemInput}/>
                        </div>
                    </div>


                    <div className="flex items-center mt-5">
                        <div className="w-9 h-0.5 bg-gray-500"></div>

                        <hr className="flex flex-col border-gray-500" />
                        {/* <span className=" flex justify-center text-gray-500 text-xs uppercase"> Or Sign UP with</span> */}
                        <div className="w-9 h-0.5 bg-gray-500"></div>

                    </div>


                    <div className='flex flex-row gap-5 justify-center mt-4'>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdminPage