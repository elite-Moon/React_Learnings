// src/components/CustomerCard.tsx
import React from 'react';
import { Customer } from '../types/customer';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onSelectCustomer: (id: number) => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  isSelected,
  onSelectCustomer,
}) => {
  return (
    <div
      className={`customer-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectCustomer(customer.id)}
    >
      <h1>{customer.name}</h1>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
