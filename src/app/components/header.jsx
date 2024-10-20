"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Asidebar from "./asidebar";
import React, { useContext, useState } from "react";
import Image from "next/image";
import MyContext from "../contextUser";
import IconContext from "../contextUserIcon";

export default function Header() {
  const router = useRouter();
  const {userName,setUserName} = useContext(MyContext)
  const [userIcon, setUserIcon] = useContext(IconContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AppBar
        className="fixed z-50 top-0 border-orange-500 border-solid border-t-4 max-w-full truncate hover:bg-sky-500 flex justify-center h-[10vh]"
        // style={{ marginBottom:"10vh" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" className="flex items-center w-10 no-underline">
              <Image
                src="/images/icon_img/bookstoreLogov2.png"
                alt="bookstore-icon"
                className="w-8 mx-4 brightness-0 invert"
                width={500}
                height={500}
              />
              <p className="text-3xl inline-block">品誠 {!userName ? <></>:<>with {userName}</>}
              {userIcon && <img src={userIcon} alt="User Icon" className="w-[24%] h-[9vh] inline-block" style={{width:'24%',height:'9vh',marginLeft:'10px'}}/>}
              </p>
            </Link>
          </Typography>

          <div className="hidden lg:flex">
          <Button
              className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
              color="inherit"
              onClick={() => router.push("/")}
              style={{ fontSize: "1.25rem" }}
            >
              主頁
            </Button>
            <Button
              className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
              color="inherit"
              onClick={() => router.push("../books")}
              style={{ fontSize: "1.25rem" }}
            >
              書藉
            </Button>
            <Button
              className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
              color="inherit"
              onClick={() => router.push("../shoppingcart")}
              style={{ fontSize: "1.25rem" }}
            >
              購物車
            </Button>
            {
              userName ? 
              <>
              <Button
              className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
              color="inherit"
              onClick={() => router.push("../orders")}
              style={{ fontSize: "1.25rem" }}
              >
              訂單
              </Button> 
              <Button
              className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
              color="inherit"
              onClick={() => router.push("../logout")}
              style={{ fontSize: "1.25rem" }}>
                Log Out
              </Button>
              </>
            :
            <>
            <Button
              className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
              color="inherit"
              onClick={() => router.push("../login")}
              style={{ fontSize: "1.25rem" }}
            >
              登錄
            </Button>
            <Button
              className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
              color="inherit"
              onClick={() => router.push("../register")}
              style={{ fontSize: "1.25rem" }}
            >
              註冊
            </Button>
          </>
            }
            
            {/* <Button
              className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
              color="inherit"
              onClick={() => router.push("../favourite")}
              style={{ fontSize: "1.25rem" }}
            >
              收藏
            </Button> */}
          </div>

          <Asidebar onClick={handleClick} isOpen={isOpen} />
        </Toolbar>
      </AppBar>
    </>
  );
}