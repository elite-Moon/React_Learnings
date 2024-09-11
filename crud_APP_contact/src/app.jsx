import './app.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { CiSearch } from 'react-icons/ci';
import { FaPlusCircle } from 'react-icons/fa';
import {
  collection,
  getDocs,
  onSnapshot,
  snapshotEqual,
} from 'firebase/firestore';
import { db } from './config/firebase';
import Modal from './components/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactCard from './components/ContactCard';
import AddAndupdateContact from './components/AddAndupdateContact';
import useDisclose from './hooks/useDisclose';

export function App() {
  const [contacts, setContacts] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactsCollection = collection(db, 'contacts');
        // const contactSnapshot = await getDocs(contactsCollection);
        onSnapshot(contactsCollection, (snapshotEqual) => {
          const contactData = snapshotEqual.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactData);
          return contactData;
          console.log(contactSnapshot);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContact();
  }, []);

  const filterContact = (e) => {
    const values = e.target.value;
    const contactsCollection = collection(db, 'contacts');
    // const contactSnapshot = await getDocs(contactsCollection);
    onSnapshot(contactsCollection, (snapshotEqual) => {
      const contactsCollection = snapshotEqual.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filterContactData = contactsCollection.filter((contact) =>
        contact.name.toLowerCase().includes(values.toLowerCase())
      );

      setContacts(filterContactData);
      return filterContactData;
      // console.log(contactSnapshot);
    });
  };

  return (
    <>
      <div className='mx-auto max-w-[440px] px-4'>
        <div className=' border-2 border-black rounded-md h-[90vh]'>
          <NavBar />
          <div className='bg-cyan-400 w-[400px]  items-center flex gap-2  '>
            <div className='relative flex items-center text-white '>
              <CiSearch className='absolute text-2xl ml-2' />
              <input
                onChange={filterContact}
                className='bg-transparent border-2 border-white rounded-md h-9 pl-9  items-center w-fit'
                type='text'
                name=''
                id=''
              />
            </div>
            <FaPlusCircle
              onClick={onOpen}
              className='text-4xl flex cursor-pointer text-white'
            />
          </div>
        </div>
        <div className='flex flex-col bottom-99 absolute top-1/4 left-1/7 mt-4'>
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <div
        className='flex flex-coloum justify-items-center pl-[300px]  absolute  top-3/4 left-1/7
      '
      >
        <AddAndupdateContact isOpen={isOpen} onClose={onClose} />
        <ToastContainer />
      </div>
    </>
  );
}
