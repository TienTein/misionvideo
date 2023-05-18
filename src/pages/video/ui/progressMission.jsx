import React, { useState, useEffect } from "react";
import useMisison from "../../home/logic/useMission";
import moment from "moment/moment";
import { selectMissions } from "@/redux/selector";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const ProgressMission = ({ isPaused, newMission }) => {
  const pathname = usePathname();
  const [count, setCount] = useState(0);
  const [loginUser, setLoginUser] = useState(null);
  const missions = useSelector(selectMissions);
  const { postMissionVideoUser, getMissionByUser } = useMisison();

  useEffect(() => {
    setCount(0);
  }, [pathname]);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user != null && user != undefined) {
        if (
          missions?.data?.missionByUser.length == 0 &&
          missions?.data?.missionByUser != "not data yet"
        ) {
          getMissionByUser({
            userId: user?.userid,
            token: user?.access_token,
          });
        }
        setLoginUser(user);
      }
    } catch (error) {
      console.log("Error parsing user from local storage:", error);
    }
  }, []);

  const progressWidth = `${(count / 30) * 100}%`;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => {
        if (count < 30 && isPaused === false) {
          return count + 1;
        } else {
          clearInterval(intervalId);
          return count;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handleClick = () => {
    const now = moment()
      .utcOffset("+07:00")
      .format("YYYY-MM-DDTHH:mm:ss.SSSSSSSZ");

    postMissionVideoUser({
      Active: true,
      CreateDate: now,
      CreateUser: loginUser.username,
      UserId: loginUser.userid,
      CampaignId: newMission.Id,
      token: loginUser.access_token,
    });
  };
  const existUser =
    missions?.data?.missionByUser != "not data yet"
      ? missions?.data?.missionByUser?.find(
          (u) => u.CampaignId === newMission?.Id
        )
      : null;

  return (
    <div className="w-full flex justify-center">
      {existUser ? (
        <h1 className="py-4 text-[#FFBD59] font-bold">{`Tài khoản này đã nhận Fpoint của video này.`}</h1>
      ) : (
        <>
          {count < 30 ? (
            <div className="w-full h-5 bg-gray-500 rounded-lg">
              <div
                className="h-full bg-[#FFBD59] max-w-full rounded-lg"
                style={{
                  width: progressWidth,
                }}
              ></div>
            </div>
          ) : (
            <button className="bg-[#FFBD59] mb-4 text-green-200 my-2 font-bold rounded-md border-2 border-[#FFBD59] hover:scale-105 hover:[&>*]:border-[#FFBD59] transition duration-500">
              <div
                className="w-full h-full py-2 px-4 border-2 border-black rounded-md"
                onClick={handleClick}
              >
                Nhận Fpoint
              </div>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ProgressMission;
