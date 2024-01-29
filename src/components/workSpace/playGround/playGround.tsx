import React from 'react';
import Split from 'react-split';
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

const PlayGround = () => {
    return (
        <div style={{ height: '100vh' }} className='flex flex-col  bg-black opacity-70 relative overflow-x-hidden'>
            <Split className='h-full' direction='vertical' sizes={[0, 100]} minSize={60} >
                <div className='w-full overflow-auto'>
                    <CodeMirror
                        value={'const a = 1'}
                        theme={vscodeDark}
                        onChange={() => { }}
                        extensions={[javascript()]}
                        style={{ fontSize: 16 }}
                    />
                </div>
                <div className='w-full overflow-auto'>
                    <div className='flex-row'>
                        <div className='white  text-white underline font font-extrabold ml-4 mb-3 mt-3'>Testcases</div>
                        <div className=' flex flex-row pl-5'>
                            <div className='rounded-xl p-1 text-black bg-white opacity-90 h-8 w-12 font-medium mr-4'>Case1</div>
                            <div className='rounded-xl p-1 text-black bg-white opacity-90 h-8 w-12 font-medium mr-4'>Case2</div>
                            <div className='rounded-xl p-1 text-black bg-white opacity-90 h-8 w-12 font-medium mr-4 '>Case3</div>

                        </div>

                        <div className='mb-3 mx-auto mt-10 w-11/12 overflow-x-hidden'>
                            <p className='font-bold text-l mb-2 text-white'>Input:</p>
                            <div className='bg-gray-800 rounded p-4'>
                                <p className='text-white'>
                                [0,1]
                                </p>
                            </div>
                        </div>

                        <div className='mb-3 mx-auto mt-10 w-11/12 overflow-x-hidden'>
                            <p className='font-bold text-l mb-2 text-white'>Output:</p>
                            <div className='bg-gray-800 rounded p-4'>
                                <p className='text-white'>
                                nums = [3,3], target = 6
                                </p>
                            </div>
                        </div>

                        <div className='flex-row justify-end ml-6 mt-10 '>
                            <button className='rounded p-1 text-black bg-white opacity-90 h-8 w-12 font-medium mr-4'>Run</button>
                            <button className='rounded p-1 text-white hover:bg-green-400 hover:text-black bg-green-600 opacity-90 h-8 w-20 font-medium mr-4 '>Submit</button>
                        </div>

                    </div>
                </div>
            </Split>
        </div>
    )
}

export default PlayGround