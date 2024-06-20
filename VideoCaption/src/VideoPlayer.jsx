/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react';

function VideoPlayer({ videoUrl, captions }) {
  const [currentCaption, setCurrentCaption] = useState('');
  const [showCaptionBackground, setShowCaptionBackground] = useState(false);
  const videoRef = useRef(null); //* taking refrence from video player to listen the event

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = videoRef.current.currentTime;
      const caption = captions.find(
        (c) => parseFloat(c.timestamp) === Math.floor(currentTime)
      );
      if (caption) {
        setCurrentCaption(caption.captionText);
        setShowCaptionBackground(true);
      } else {
        setCurrentCaption('');
        setShowCaptionBackground(false);
      }
    };

    videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    //* cleanup process for event listener
    return () => {
      videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [captions]);

  return (
    <div className='video-player'>
      <video ref={videoRef} controls>
        <source src={videoUrl} type='video/mp4' />
      </video>
      <div className={`caption ${showCaptionBackground ? 'active' : ''}`}>
        {currentCaption}
      </div>
    </div>
  );
}

export default VideoPlayer;
