// "use client";
// import React, { useEffect, useRef } from "react";
// import dynamic from "next/dynamic";

// const ReactPlayer = dynamic(() => import("react-player/youtube"), {
//   ssr: false,
// });

// const CurrentVideo = ({ newMission, setIsPaused }) => {
//   const playerRef = useRef(null);

//   useEffect(() => {
//     handleReady();
//     handlePlaying();
//   }, []);

//   const handleReady = () => {
//     const player = playerRef.current;
//     if (player) {
//       player.seekTo(0);
//     }
//   };

//   const handlePause = () => {
//     setIsPaused(true);
//   };

//   const handlePlaying = (playing) => {
//     setIsPaused(!playing);
//   };

//   return (
//     <div className="w-full">
//       <ReactPlayer
//         url={`https://www.youtube.com/embed/${newMission?.Link}`}
//         width="100%"
//         playing
//         onReady={handleReady}
//         onPause={handlePause}
//         onPlay={() => handlePlaying(true)}
//         onEnded={() => handlePlaying(false)}
//         refs={playerRef}
//         controls
//       />
//     </div>
//   );
// };

import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";

const CurrentVideo = ({ newMission, setIsPaused }) => {
  const videoId = newMission?.Link;
  const apiKey = "AIzaSyABQ1XL8zIK2BcXNtqMDWviJsnyPnF2yFA";

  const opts = {
    playerVars: {
      origin: "https://www.youtube.com",
    },
  };

  const handlePlayerReady = (event) => {
    setIsPaused(true);
  };

  const handlePlayerStateChange = (event) => {
    const playerState = event.data;

    if (playerState === YouTube.PlayerState.PAUSED) {
      setIsPaused(true);
    } else if (playerState === YouTube.PlayerState.PLAYING) {
      setIsPaused(false);
    }
  };

  return (
    <>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={handlePlayerReady}
        onStateChange={handlePlayerStateChange}
        apiKey={apiKey}
      />
    </>
  );
};

export default CurrentVideo;
