import React from 'react';
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Video = () => {
  const divRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(divRef.current);
  }, []);


    const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
      <div ref={divRef} className='relative top-10 w-full h-content '> 
      {isVisible && (
        <video ref={videoRef} 
          autoPlay
        muted
        loop
        playsInline
        className=" object-contain w-full h-full mb-10 mt-5" 
       preload="none"
       poster="thumbnail.jpg"
      
      
        >
          <source src="index-reel.mp4" type="video/mp4" />
          
        </video>
      )}

        {/* Custom Mute Button */}
      <div
        onClick={toggleMute}
        className='cursor-pointer absolute z-10 lg:text-xl text-sm  md:text-lg top-2 left-2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 hover:bg-yellow-500 transition-opacity duration-300'
      >
        {isMuted ? "🔇 " : " 🔊"}
      </div>
    
    </div>
    
  )
}

export default Video