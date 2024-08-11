import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types/customer';

// Function to generate a random string
const generateRandomString = (length: number) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a luctus felis. Praesent ut odio vitae justo venenatis tempor vitae ac felis. Aenean sagittis massa in est varius, eu cursus nisi auctor. Morbi aliquet orci vel dignissim mollis. Nulla ultricies sagittis ipsum in consectetur. Nunc lacus tortor, auctor ut iaculis id, commodo ut eros. Suspendisse elementum porttitor placerat. Morbi vulputate laoreet velit, quis varius orci aliquam in';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// Function to generate random customer data
const generateCustomers = (numCustomers: number): Customer[] => {
  const customers: Customer[] = [];
  for (let i = 1; i <= numCustomers; i++) {
    customers.push({
      id: i,
      name: `Customer ${i} ${generateRandomString(2)}`, // Unique name for each customer
      title: `titile:${generateRandomString(100)}`, // Random title
      address: `address:-${i} ${generateRandomString(10)} St`,
      photos: [],
    });
  }
  return customers;
};

const App: React.FC = () => {
  // Generate 1,000 customers
  const [customers] = useState<Customer[]>(generateCustomers(1000));
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
    null
  );

  const selectedCustomer =
    customers.find((customer) => customer.id === selectedCustomerId) || null;

  return (
    <div className='app-container'>
      <h1>Customer Portal</h1>
      <div className='content'>
        <CustomerList
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onSelectCustomer={setSelectedCustomerId}
        />
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default App;
