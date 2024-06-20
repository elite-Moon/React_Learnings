import { useState } from 'react';
import './App.css';
import InputCaption from './InputCaption';
import VideoPlayer from './VideoPlayer';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);

  const handleAddCaption = ({ videoUrl, captionText, timestamp }) => {
    if (!videoUrl) {
      alert('Please enter a video URL');
      return;
    }
    setVideoUrl(videoUrl);
    setCaptions([...captions, { captionText, timestamp }]);
  };

  return (
    <>
      <div className='caption-box'>
        <h3></h3>
        <InputCaption onAddCaption={handleAddCaption} />
        {videoUrl && <VideoPlayer videoUrl={videoUrl} captions={captions} />}
      </div>
    </>
  );
}

export default App;
