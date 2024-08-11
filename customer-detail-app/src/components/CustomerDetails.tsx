import React, { useEffect, useState } from 'react';
import { Customer } from '../types/customer';
// import { fetchRandomPhotos } from '../services/photoService'; // Import the service

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>(Array(9).fill('')); // Initialize with empty strings

  useEffect(() => {
    if (!customer) return;

    // Function to update a single photo at a given index
    const updatePhotoAtIndex = async (index: number) => {
      const newPhotoUrl = `https://picsum.photos/200/200?random=${Math.random()}`;
      setPhotos((prevPhotos) => {
        const newPhotos = [...prevPhotos];
        newPhotos[index] = newPhotoUrl;
        return newPhotos;
      });
    };

    // Set up intervals to update each photo individually every 3 seconds
    const intervals = photos.map((_, index) =>
      setInterval(() => updatePhotoAtIndex(index), 10000)
    );

    // Initial load of photos
    photos.forEach((_, index) => updatePhotoAtIndex(index));

    // Clear intervals on component unmount
    return () => {
      intervals.forEach(clearInterval);
    };
  }, [customer]);

  if (!customer) return <div>Select a customer to see details</div>;

  return (
    <div className='customer-details'>
      <h1>{customer.name}</h1>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <div className='photo-grid'>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Customer ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
