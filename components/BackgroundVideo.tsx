import React from 'react'

const BackgroundVideo = () => {
  return (
   <video
  
   autoPlay muted loop
   style={{
    position:'absolute',
    width:'100%',
    height:'100%',
    top:'0px',
    left:'0px',
    objectFit: 'cover',
    
    
    
        
   }}>
  <source src="/video1.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;