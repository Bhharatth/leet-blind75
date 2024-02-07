import React from 'react';

// model problemDetails {
//     id         Int   @id @default(autoincrement())
//     title      String
//     category   String
//     difficulty String
//     likes      Int
//     dislikes   Int
//     order      Int
//   }

const ProblemCard = () => {
  return (
  <div className="border border-gray-600 p-4 rounded-lg mt-5 hover:cursor-pointer">
    <div className="text-white mb-2">Title</div>
    <div className="text-white mb-2">Category</div>
    <div className="text-white mb-2">Difficulty</div>
    <div className="text-white mb-2">Likes</div>
    <div className="text-white mb-2">Dislikes</div>
    <div className="text-white mb-2">Order</div>
</div>

  )
}

export default ProblemCard