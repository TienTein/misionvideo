import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="wrapper">
      <CircularProgress className="text-4xl" />
    </div>
  );
};

export default Loading;
