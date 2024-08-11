// src/components/PhotoGrid.tsx
import React, { useEffect, useState } from 'react';
import { fetchPhotos } from '../services/photoService';

const PhotoGrid: React.FC = () => {
  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchInitialPhotos = async () => {
      const photos = await fetchPhotos();
      setCurrentPhotos(photos);
    };

    fetchInitialPhotos();

    const interval = setInterval(async () => {
      const newPhotos = await fetchPhotos();
      setCurrentPhotos(newPhotos);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='photo-grid'>
      {currentPhotos.map((photo, index) => (
        <img key={index} src={photo} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;
