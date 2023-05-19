import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectMissions } from "@/redux/selector";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useMediaQuery, useTheme } from "@mui/material";
import { toast } from "react-toastify";
import Pagination from "./pagination";

import Image from "next/image";

export default function MissionItems() {
  const router = useRouter();
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchLG = useMediaQuery(theme.breakpoints.down("lg"));
  const missions = useSelector(selectMissions);
  const { data: session } = useSession();
  useEffect(() => {
    if (session !== null && session !== undefined) {
      toast.success("Đăng nhập thành công", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, []);

  const handleClick = (item) => {
    const user = localStorage.getItem("user");

    if ((user && user != "") || session) {
      router.push(`/tham-gia/video/${item.TitleLink}-${item.Id}`);
    } else {
      router.push("/dang-nhap");
    }
  };

  const newMissions = missions?.data?.allMissions?.filter(
    (item) => item.CategoriesCampaignId === 4
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(18);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const newDatas = newMissions?.slice(start, end);
  const totalPages = Math.ceil(newMissions?.length / itemsPerPage);

  return (
    <div className="px-[10vw] py-[10vh]">
      <div
        className={`grid gap-6 transition-all duration-500 [&>*]:mb-4 ${
          isMatchMD ? "grid-cols-1" : isMatchLG ? "grid-cols-2" : "grid-cols-3"
        }`}
      >
        {newDatas &&
          newDatas.map((item) => (
            <div
              key={item.Id}
              className={`bg-black p-2 rounded-md ${
                isMatchMD ? "border-b border-white  pb-5 rounded-b-none" : ""
              }`}
            >
              <div className={`h-[60%]`}>
                <Image
                  src={item?.ImagePath}
                  alt=""
                  className="h-full w-full hover:scale-105 hover:transition hover:duration-500 transition duration-500  cursor-pointer rounded-md"
                  width={500}
                  height={500}
                  onClick={() => handleClick(item)}
                />
              </div>

              <div className={`flex flex-col justify-between h-[40%]`}>
                <p
                  className="pt-2 px-2 cursor-pointer hover:text-[#FFBD59]"
                  onClick={() => handleClick(item)}
                >
                  {item.Title}
                </p>

                <div className="flex justify-between items-end pb-2 px-2">
                  <span className="text-[#E88F08] font-bold">
                    {item.FpointValue} Fpoint
                  </span>
                  <button
                    className="text-black p-[1px] rounded-md border border-[#FFBD59]  hover:text-white hover:bg-[#E88F08]  hover:-translate-y-1 hover:transition hover:duration-500 transition duration-500 hover:inputhover"
                    onClick={() => handleClick(item)}
                  >
                    <div className="bg-[#FFBD59] rounded-md border border-black px-4 py-1 hover:bg-[#E88F08] w-full h-full">
                      Xem video
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
