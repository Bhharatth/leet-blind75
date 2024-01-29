import React from 'react'

const ProblemTable = () => {
    const data = [
        { data1: 'Row 1, Data 1', data2: 'Row 1, Data 2', data3: 'Row 1, Data 3', data4: 'Row 1, Data 4', data5: 'Row 1, Data 5' },
        { data1: 'Row 2, Data 1', data2: 'Row 2, Data 2', data3: 'Row 2, Data 3', data4: 'Row 2, Data 4', data5: 'Row 2, Data 5' },
        { data1: 'Row 2, Data 1', data2: 'Row 2, Data 2', data3: 'Row 2, Data 3', data4: 'Row 2, Data 4', data5: 'Row 2, Data 5' },
        { data1: 'Row 2, Data 1', data2: 'Row 2, Data 2', data3: 'Row 2, Data 3', data4: 'Row 2, Data 4', data5: 'Row 2, Data 5' },
        { data1: 'Row 2, Data 1', data2: 'Row 2, Data 2', data3: 'Row 2, Data 3', data4: 'Row 2, Data 4', data5: 'Row 2, Data 5' },
        { data1: 'Row 2, Data 1', data2: 'Row 2, Data 2', data3: 'Row 2, Data 3', data4: 'Row 2, Data 4', data5: 'Row 2, Data 5' },
        // Add more sample data as needed
      ];
      
  return (
    <div className='flex align-middle justify-center bg-gradient-to-black bg-black z-10 opacity-70'>
  <div className="bg-black text-white p-5 rounded-lg shadow-lg h-screen w-3/4">
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-dark-yellow">Title 1</th>
          <th className="py-2 px-4 border-b border-dark-yellow">Title 2</th>
          <th className="py-2 px-4 border-b border-dark-yellow">Title 3</th>
          <th className="py-2 px-4 border-b border-dark-yellow">Title 4</th>
          <th className="py-2 px-4 border-b border-dark-yellow">Title 5</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? 'bg-dark-fill-3 ' : 'bg-dark-fill-4' } // Apply different background colors to even and odd rows
          >
            <td className="py-6 px-4 ">{row.data1}</td>
            <td className="py-4 px-4 ">{row.data2}</td>
            <td className="py-6 px-4 ">{row.data3}</td>
            <td className="py-6 px-4 ">{row.data4}</td>
            <td className="py-6 px-4 ">{row.data5}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    
  )
}

export default ProblemTable