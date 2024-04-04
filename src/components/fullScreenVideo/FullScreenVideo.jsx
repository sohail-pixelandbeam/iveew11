import React, { useState, useEffect } from 'react';
import videoPath from '../../assets/videos/Iveew.mp4'

const FullScreenVideo = ({ isVideoPlaying, setIsVideoPlaying }) => {
 
  // const handlePause = () => {
  //   setIsVideoPlaying(false)
  // };

  const handleEnded = () => {
    setIsVideoPlaying(false)
  };


  return (
    <>
      {isVideoPlaying && (
        <div className="fullscreen-video" data-aos="fade-left" >
          <video
            controls
            autoPlay
            onEnded={handleEnded}
          >
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
};

export default FullScreenVideo;
