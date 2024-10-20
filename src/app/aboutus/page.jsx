"use client";

import React from "react";
import "../../app/globals.css";
import Image from "next/image";

export default function Aboutus() {
  return (
    <div>
      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/aboutUs_img/aboutUsBanner.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 p-4 pt-20">
          <h1 className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold">
            關於我們
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white pb-20 mb-10">
        <div className="p-10 md:pr-10">
          <Image
            src="/images/aboutUs_img/aboutUsIcon.jpg"
            alt="bookstore concept"
            width={1000}
            height={1000}
            className="w-full max-w-md"
            style={{
              maxWidth: "800px",
            }}
          />
        </div>
        <div className="px-12 w-full md:w-[800px] text-lg">
          <p>
            2024年10月，品誠由香港邁出第一步。一個月來，懷抱著對於善、愛、美、終身學習的生命理念，並以「人文、藝術、創意、生活」為核心價值，由推廣閱讀出發，致力在「書與非書之間」複合創新，發展至今已成為涵蓋書店、畫廊、藝文展演、零售通路、文化創意品牌、藝文行旅、人文住宅、餐酒美食等以文化內容為基底的複合式文化場域。目前於台灣、香港、蘇州及東京共計有逾40個服務據點，每年平均舉辦超過5,000場藝文表演活動，吸引來自世界各地逾2億人次造訪。誠品期許成為全球華人社會最具影響力且獨具一格之文化創意產業領導品牌，並對提升人文氣質積極貢獻！
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/aboutUs_img/aboutUs.png"
          alt="bookstore concept"
          width={1000}
          height={1000}
          style={{
            width: "400px",
            textAlign: "center",
          }}
        />
      </div>
      <h2
        style={{
          textAlign: "center",
          padding: "50px",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        品誠期許持續深耕閱讀，將人文、藝術、創意融入生活
      </h2>
    </div>
  );
}
