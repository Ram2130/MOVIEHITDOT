import React, { useState } from "react";

function VideoShow() {
    const [isOpen, setIsOpen] = useState(false);
    const [videoId, setVideoId] = useState("dQw4w9WgXcQ"); // Replace with your video ID
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    {/* Open Video Button */}
    <button
      className="bg-red-500 text-white px-4 py-2 rounded-md"
      onClick={() => setIsOpen(true)}
    >
      Play YouTube Video
    </button>

    {/* Modal */}
    {isOpen && (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        onClick={() => setIsOpen(false)}
     style={{width:"338px",margin:"auto"}}
     >
        <div
          className="bg-grey p-4 rounded-lg shadow-lg w-full max-w-lg relative"
          onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-600 text-xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          {/* Embedded YouTube Video */}
          <iframe
            className="w-full h-64"
            src={`https://www.youtube.com/embed/_qC4mq13crc`}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )}
  </div>

    
  )
}

export default VideoShow