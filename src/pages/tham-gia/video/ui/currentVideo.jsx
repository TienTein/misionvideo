"use client";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const CurrentVideo = ({ newMission, setIsPaused }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    handleReady();
    handlePlaying();
  }, []);

  const handleReady = () => {
    const player = playerRef.current;
    if (player) {
      player.seekTo(0);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlaying = (playing) => {
    setIsPaused(!playing);
  };

  return (
    <div className="w-full">
      <ReactPlayer
        url={`https://www.youtube.com/embed/${newMission?.Link}`}
        width="100%"
        playing
        onReady={handleReady}
        onPause={handlePause}
        onPlay={() => handlePlaying(true)}
        onEnded={() => handlePlaying(false)}
        refs={playerRef}
        controls
      />
    </div>
  );
};

export default CurrentVideo;
