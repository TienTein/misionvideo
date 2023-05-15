import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-black text-white flex justify-center items-center">
      <CircularProgress className="text-4xl" />
    </div>
  );
};

export default Loading;
