import React from 'react';

import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import useDisclose from '../hooks/useDisclose';
import AddAndupdateContact from './AddAndupdateContact';

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen, isUpdate } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex gap-6 justify-center items-center align-middle'>
      <div
        key={contact.id}
        className='flex flex-col w-[320px] text-white ml-5 bg-yellow-500 rounded-md '
      >
        <h1 className='text-2xl'>{contact.name}</h1>
        <h2>{contact.email}</h2>
      </div>
      <div>
        <FaEdit onClick={onOpen} className='text-3xl cursor-pointer' />
        <MdDelete
          onClick={(id) => deleteContact(contact.id)}
          className='text-3xl cursor-pointer'
        />
      </div>
      <AddAndupdateContact
        contact={contact}
        isOpen={isOpen}
        onClose={onClose}
        isUpdate={isUpdate}
      />
    </div>
  );
};

export default ContactCard;
