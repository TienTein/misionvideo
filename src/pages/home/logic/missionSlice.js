import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "mission",
  initialState: {
    loading: false,
    data: {
      allMissions: [],
      missionByUser: [],
    },
    error: null,
  },
  reducers: {
    setMissionLoading: (state) => {
      state.loading = true;
    },
    setMissionSuccess: (state, action) => {
      state.loading = false;
      state.data.allMissions = action.payload;
      state.error = null;
    },
    setMissionByUserSuccess: (state, action) => {
      state.loading = false;
      state.data.missionByUser = action.payload;
      state.error = null;
    },
    setMissionFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearMissionData: (state) => {
      state.loading = false;
      state.data = {
        allMissions: [],
        missionByUser: [],
      };
      state.error = null;
    },
  },
});
