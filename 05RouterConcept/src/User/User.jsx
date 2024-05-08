// import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  return (
    <div className='bg-gray-300 text-black-700 p-1 m-2 h-12 flex  justify-center'>
      User:{userId}
    </div>
  );
}

export default User;
