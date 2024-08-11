// src/services/photoService.ts
import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'YOUR_ACCESS_KEY';

// PhotoService.ts
export const fetchPhotos = async (count: number = 9): Promise<string[]> => {
  const photos: string[] = [];
  for (let i = 0; i < count; i++) {
    // Fetch a random photo for each slot in the grid
    const randomPhotoUrl = `https://picsum.photos/200/200?random=${Math.random()}`;
    photos.push(randomPhotoUrl);
  }
  return photos;
};

