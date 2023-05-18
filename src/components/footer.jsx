import React from "react";
import Image from "next/image";
import footerBg from "../../public/images/missionbg.jpg";
import logo from "../../public/images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="w-full relative h-[50vh] bg-black">
      <div className="bg-black w-full h-full top-0 left-0 absolute bg-opacity-80 flex flex-col items-center justify-around pt-[2%] px-[3%]">
        <Image src={logo} alt="" className="h-20 w-52" />
        <div className="footer__icons">
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
        <div className="text-white flex justify-around footer__contact">
          <div className="footer__contact--container">
            <p className="flex">
              <LocationOnIcon />
              Địa chỉ: Số 52 Đường 10, Khu dân cư Nam Long, Phường Tân Nhuận
              Đông, Quận 7, TP.HCM, VN9
            </p>
            <div className="flex flex-col">
              <p>
                <LocalPhoneIcon />
                Phone: 0968236915 - 0988666415
              </p>
              <p>
                <EmailIcon />
                Email: info@fusoft.vn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
