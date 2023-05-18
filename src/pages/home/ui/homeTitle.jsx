import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const HomeTitle = () => {
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="w-full mt-[10vh] flex justify-center items-center">
      <p className={`font-bold ${isMatchMD ? "text-4xl" : "text-6xl"}`}>
        Nhiệm vụ xem Video
      </p>
    </div>
  );
};

export default HomeTitle;
