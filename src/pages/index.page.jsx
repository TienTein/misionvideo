import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { checkLoadingSelector, selectMissions } from "@/redux/selector";

import Loading from "@/components/loading";
import MissionItems from "./home/ui/missionItems";
import HomeTitle from "./home/ui/homeTitle";
import useMisison from "./home/logic/useMission";
import unMissionBg from "../../public/images/unmissionbg.png";
import missionBg from "../../public/images/bgFumeli.png";

export default function Home() {
  const { getMissionDatas } = useMisison();
  const isLoading = useSelector(checkLoadingSelector);
  const missions = useSelector(selectMissions);
  const newMissions = missions?.data?.allMissions?.filter(
    (item) => item.CategoriesCampaignId === 4
  );
  useEffect(() => {
    getMissionDatas();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="text-white overflow-hidden relative z-10">
          {newMissions?.length == 0 ? (
            <div className="w-full h-[100vh] text-4xl text-white flex justify-center items-center relative z-10 uppercase font-bold px-[10%]">
              <Image
                src={unMissionBg}
                alt="unmisison"
                className=" absolute w-full h-full -z-10 opacity-50"
              />
              Hiện tại nhiệm vụ Video đang không có nhiệm vụ nào!!!
            </div>
          ) : (
            <>
              <Image
                src={missionBg}
                alt="unmisison"
                className="absolute w-full h-full -z-10 opacity-50"
              />
              <HomeTitle />
              <MissionItems />
            </>
          )}
        </div>
      )}
    </>
  );
}
