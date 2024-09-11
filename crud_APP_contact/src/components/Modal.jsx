import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // If modal is not open, don't render anything

  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop blur-4'>
        <div className='bg-white p-4 rounded-md shadow-md w-[300px] min-h-[300px]'>
          <div className='flex justify-end'>
            <button onClick={onClose} className='text-red-500 text-lg'>
              X
            </button>
          </div>
          <div className='mt-2'>{children}</div>
        </div>
      </div>
      <div onClick={onClose} className='backdrop-blur-3xl z-40 absolute' />
    </>
  );
};

export default Modal;
