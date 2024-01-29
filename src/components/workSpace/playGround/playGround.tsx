import React from 'react';
import Split from 'react-split'

const PlayGround = () => {
  return (
    <div style={{ height: '100vh' }} className='flex flex-col  bg-black opacity-70 relative overflow-x-hidden'>
      <Split className='h-full' direction='vertical' sizes={[0,100]} minSize={60} >
        <div className='w-full overflow-auto'>playground-1</div>
        <div className='w-full overflow-auto'>platground-2</div>
    </Split>
    </div>
  )
}

export default PlayGround