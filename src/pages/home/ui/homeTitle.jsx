import React from "react";
import Image from "next/image";
import misionbg from "../../../../public/images/missionbg.jpg";

const HomeTitle = () => {
  return (
    <div className="w-full h-[40vh] relative">
      <Image src={misionbg} alt="" className="w-full h-full" />
      <div className="bg-black w-full h-full absolute top-0 left-0 bg-opacity-60 flex justify-center items-center">
        <p className="text-6xl text-center">Nhiệm vụ xem Video</p>
      </div>
    </div>
  );
};

export default HomeTitle;
