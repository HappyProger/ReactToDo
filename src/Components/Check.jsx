import React from 'react';
import { FaCheck } from "react-icons/fa6";

const Check = ({ isCompleted }) => {
  return (
    <div className={`border-2 rounded-md border-pink-400 w-5 h-5 mr-3 ${isCompleted ? 'bg-pink-400' : ''} flex items-center justify-center`}>
      {isCompleted && <FaCheck size={17} className='text-gray-100' />}
    </div>
  );
}

export default Check;
