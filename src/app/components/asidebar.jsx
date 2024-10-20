"use client";

import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useRouter } from "next/navigation";

export default function Asidebar({ onClick, isOpen }) {
  const router = useRouter();

  return (
    <>
      <div
        className="flex lg:hidden items-center"
        style={{
          padding: "0.25rem",
          borderRadius: "9999px",
          backgroundColor: isOpen ? "#fb7185" : "transparent",
          cursor: "pointer",
          width: "10%",
        }}
        onClick={onClick}
      >
        <img
          src="/images/icon_img/menu-bar.png"
          alt="hamburger-menu"
          className="w-8 brightness-0 invert"
          style={{
            margin: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>
      <div
        className={`asidebar fixed z-50 top-0 left-0 h-full bg-sky-500 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-full md:w-1/2 lg:w-1/4`}
        style={{ height: "90vh", top: "10vh", border: "3px solid #fff" }}
      >
        <ul className="tracking-widest text-xl font-semibold ">
        <li
            className="flex items-center justify-center space-x-6 hover:underline cursor-pointer h-[10vh] hover:bg-orange-500"
            style={{ borderBottom: "3px solid #fff" }}
            onClick={() => {router.push("/"); onClick();}}
          >
            <HomeIcon className="text-white" />
            <span className="ml-2">主頁</span>
          </li>
          <li
            className="flex items-center justify-center space-x-6 hover:underline cursor-pointer h-[10vh] hover:bg-orange-500"
            style={{ borderBottom: "3px solid #fff" }}
            onClick={() => {router.push("../books/"); onClick();}}
          >
            <MenuBookIcon className="text-white" />
            <span className="ml-2">書藉</span>
          </li>
          <li
            className="flex items-center justify-center space-x-6 hover:underline cursor-pointer h-[10vh] hover:bg-orange-500"
            style={{ borderBottom: "3px solid #fff" }}
            onClick={() => {router.push("../login"); onClick();}}
          >
            <LockOpenRoundedIcon className="text-white" />
            <span className="ml-2">登錄</span>
          </li>
          <li
            className="flex items-center justify-center space-x-6 hover:underline cursor-pointer h-[10vh] hover:bg-orange-500"
            style={{ borderBottom: "3px solid #fff" }}
            onClick={() => {router.push("../register"); onClick();}}
          >
            <HowToRegRoundedIcon className="text-white" />
            <span className="ml-2">註冊</span>
          </li>
          <li
            className="flex items-center justify-center space-x-6 hover:underline cursor-pointer h-[10vh] hover:bg-orange-500"
            style={{ borderBottom: "3px solid #fff" }}
            onClick={() => {router.push("../shoppingcart"); onClick();}}
          >
            <ShoppingCartIcon className="text-white" />
            <span className="ml-2">購物車</span>
          </li>
          <li
            className="flex items-center justify-center space-x-6 hover:underline cursor-pointer h-[10vh] hover:bg-orange-500"
            style={{ borderBottom: "3px solid #fff" }}
            onClick={() => {router.push("../orders"); onClick();}}
          >
            <ReceiptIcon className="text-white" />
            <span className="ml-2">訂單</span>
          </li>
          {/* <li
            className="flex items-center justify-center space-x-6 hover:underline cursor-pointer h-[10vh] hover:bg-orange-500"
            style={{ borderBottom: "3px solid #fff" }}
            onClick={() => router.push("../favourite")}
          >
            <ReceiptIcon className="text-white" />
            <span className="ml-2">收藏</span>
          </li> */}
        </ul>
      </div>
    </>
  );
}
