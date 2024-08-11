// CustomerList.tsx
import React from 'react';
import { Customer } from '../types/customer';
import '../App.css';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  selectedCustomerId,
  onSelectCustomer,
}) => {
  return (
    <div className='customer-list'>
      {customers.map((customer) => (
        <div
          key={customer.id}
          className={`customer-card ${
            selectedCustomerId === customer.id ? 'selected' : ''
          }`}
          onClick={() => onSelectCustomer(customer.id)}
        >
          <h1>{customer.name}</h1>
          <p>{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
