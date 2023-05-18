import axios from "axios";
import { useDispatch } from "react-redux";
import missionSlice from "./missionSlice";
import { toast } from "react-toastify";
import { getConfigUrl } from "@/utils/getConfig";

const useMisison = () => {
  const dispatch = useDispatch();

  const getMissionDatas = async () => {
    const apiHost = await getConfigUrl();
    try {
      dispatch(missionSlice.actions.setMissionLoading());
      const res = await axios.get(`${apiHost}api/Campaign/getallclient`);
      dispatch(missionSlice.actions.setMissionSuccess(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  const postMissionVideoUser = async ({
    Active,
    CreateDate,
    CreateUser,
    UserId,
    CampaignId,
    token,
  }) => {
    const apiHost = await getConfigUrl();
    const data = {
      Active: Active,
      CreateDate: CreateDate,
      CreateUser: CreateUser,
      UserId: UserId,
      CampaignId: CampaignId,
    };

    try {
      dispatch(missionSlice.actions.setMissionLoading());
      const res = await axios.post(`${apiHost}api/UserCampaign/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res !== undefined) {
        toast.success("Nhận điểm thành công!!", {
          position: toast.POSITION.TOP_CENTER,
        });
        getMissionByUser({ userId: UserId, token: token });
      }
    } catch (error) {
      {
        error.response.data.Message ===
        "Authorization has been denied for this request."
          ? toast.error(
              "Phiên đăng nhập của bạn đã kết thúc. Xin hãy đăng nhập lại!!",
              {
                position: toast.POSITION.TOP_CENTER,
              }
            )
          : toast.error(error?.response?.data, {
              position: toast.POSITION.TOP_CENTER,
            });
      }
      dispatch(missionSlice.actions.setMissionFailure(error.response.data));
    }
  };

  const getMissionByUser = async ({ userId, token }) => {
    const apiHost = await getConfigUrl();
    try {
      dispatch(missionSlice.actions.setMissionLoading());
      const res = await axios.get(
        `${apiHost}api/UserCampaign/getallclientbyuserid/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(missionSlice.actions.setMissionByUserSuccess(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return { getMissionDatas, postMissionVideoUser, getMissionByUser };
};

export default useMisison;
