import React from 'react';
import Modal from './Modal';
import { Formik, Form, Field } from 'formik';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';

const AddAndupdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, 'contacts');
      await addDoc(contactRef, contact);
      toast.success('Operation Done');
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, 'contacts');
      await updateDoc(contactRef, contact);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: '',
                  email: '',
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className='flex flex-col  gap-3 font-medium text-xl'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='name'>Name</label>
              <Field name='name' className='border h-8' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email'>Email</label>
              <Field type='email' name='email' className='border h-8  ' />
            </div>
            <button className='bg-yellow-500 w-[270px] h-8  my-7 p-auto'>
              {isUpdate ? 'Update ' : 'Submit'} data
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndupdateContact;
