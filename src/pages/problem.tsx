import Description from '@/components/description'
import Playground from '@/components/playground'
import React from 'react';
import Split from 'react-split'

const Problem = () => {
    return (
        <div className='flex flex-row'>
          <Split
    sizes={[25, 75]}
    minSize={100}
    expandToMin={false}
    gutterSize={10}
    gutterAlign="center"
    snapOffset={30}
    dragInterval={1}
    direction="horizontal"
    cursor="col-resize"
>
                <Description />
                <Playground />
            </Split>

        </div>
    )
}

export default Problem