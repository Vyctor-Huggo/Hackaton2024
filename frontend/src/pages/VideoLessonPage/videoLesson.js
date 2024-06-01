import React from 'react';

const VideoLesson = ({ videoSrc }) => {
  return (
    <div className="video-lesson">
      <iframe 
        width="100%" 
        height="500" 
        src={videoSrc} 
        title="Video Lesson" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoLesson;
