import { useState } from 'react';
// import './App.css';
import './InputCaption.css';
function InputCaption({ onAddCaption }) {
  //* states for input data
  const [videoUrl, setVideoUrl] = useState('');
  const [captionText, setCaptionText] = useState('');
  const [timestamp, setTimestamp] = useState('');

  //* handler for caption add on the basis of url and timestamp
  const handleAddCaption = () => {
    if (videoUrl && captionText && timestamp) {
      onAddCaption({ videoUrl, captionText, timestamp });
      setCaptionText('');
      setTimestamp('');
    }
  };

  return (
    <div className='main'>
      <div className='main-input-url'>
        <input
          style={{
            width: '15rem',
            height: '2.4rem',
            gap: '1rem',
            border: '0px solid',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            backgroundColor: '#000',
            color: '#fff',
            opacity: '0.5',
          }}
          type='text'
          placeholder='Video URL'
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </div>
      <div className='main-input-caption'>
        <textarea
          style={{
            width: '15rem',
            height: '2.4rem',
            border: '0px solid',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            backgroundColor: '#000',
            color: '#fff',
            opacity: '0.5',
          }}
          placeholder='Caption Text'
          value={captionText}
          onChange={(e) => setCaptionText(e.target.value)}
        ></textarea>
      </div>
      <div className='main-input-timestamp'>
        <input
          style={{
            width: '15rem',
            height: '2.4rem',
            border: '0px solid',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            backgroundColor: '#000',
            color: '#fff',
            opacity: '0.5',
          }}
          type='text'
          placeholder='Timestamp (in seconds)'
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
        />
      </div>
      <button className='caption-btn' onClick={handleAddCaption}>
        Generate Caption
      </button>
    </div>
  );
}

export default InputCaption;
