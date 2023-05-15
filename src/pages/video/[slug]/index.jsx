import React from "react";
import MissionVideo from "../ui/missionVideo";
import RelatedVideos from "../ui/relatedVideos";

export default function Video() {
  return (
    <div>
      <MissionVideo />
      <div className="w-full flex justify-around bg-[#FCB711] bg-opacity-60">
        <RelatedVideos />
      </div>
    </div>
  );
}
