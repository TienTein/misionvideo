import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { checkLoadingSelector } from "@/redux/selector";
import Loading from "@/components/loading";

import MissionVideo from "../ui/missionVideo";
import RelatedVideos from "../ui/relatedVideos";
import useMisison from "../../../home/logic/useMission";

export default function Video() {
  const { getMissionDatas } = useMisison();
  const isLoading = useSelector(checkLoadingSelector);
  useEffect(() => {
    getMissionDatas();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MissionVideo />
          <div className="w-full flex justify-around bg-[#FCB711] bg-opacity-60">
            <RelatedVideos />
          </div>
        </>
      )}
    </div>
  );
}
