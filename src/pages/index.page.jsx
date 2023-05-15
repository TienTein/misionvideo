import { useEffect } from "react";
import { useSelector } from "react-redux";
import { checkLoadingSelector } from "@/redux/selector";

import Loading from "@/components/loading";
import MissionItems from "./home/ui/missionItems";
import HomeTitle from "./home/ui/homeTitle";
import useMisison from "./home/logic/useMission";

export default function Home() {
  const { getMissionDatas } = useMisison();
  const isLoading = useSelector(checkLoadingSelector);
  useEffect(() => {
    getMissionDatas();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="text-white overflow-hidden">
          <HomeTitle />
          <MissionItems />
        </div>
      )}
    </>
  );
}
