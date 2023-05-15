import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../pages/dang-nhap/logic/authSlice";
import missionSlice from "../pages/home/logic/missionSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    mission: missionSlice.reducer,
  },
});

export default store;

export var RootState = store.getState;
export var AppDispatch = store.dispatch;
