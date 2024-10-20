"use client";

import "./globals.css";
import React, { useContext, useState } from "react";
import Importimg from "./components/importimg";
import BookFilter from "./components/bookFilter";
import MyContext from "./contextUser";

export default function Home() {
  const { userName, setUserName } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const books = [
    {
      id: "5",
      title: "《金瓶梅》",
      author: "蘭陵笑笑生",
      price: 259,
      publication_year: 1610,
      genre: ["Fiction", "Adventure"],
      description:
        "《金瓶梅》，又名《金瓶梅詞話》，中國古代小說，四大奇書之一，中國歷史上第一部文人獨立創作的長篇中州韻白話文世情章回小說，亦是明代流行的艷情小說。作者姓名不詳，只知筆名為蘭陵笑笑生。由於詳細描述了古代市井平民的生活和社會現實，歷來研究的學說不少，統稱為金瓶梅學。",
      cover_image: "/images/book-ch-05.png",
    },
    {
      id: "6",
      title: "《中國春宮祕畫》",
      author: "唐伯虎",
      price: 388,
      publication_year: "明朝",
      genre: ["Fantasy", "Adventure"],
      description:
        "春宮圖，又名「秘戲圖」、「春宮畫」、「春宮兒」、「春畫」、「春冊」，是描述人類性主題的傳統繪畫[1]，在東亞文化圈民間常用作性教育的啟蒙教具。",
      cover_image: "/images/book-ch-06.png",
    },
  ];

  return (
    <>
      <h1>{userName}</h1>
      
      <div className="relative container top-0 mb-20 border-dotted border-orange-500 border-y-2 min-w-full truncate shadow-md shadow-gray-500/50 hover:border-purple-600 hover:border-y-4 sm:h-[80vh] md:h-[80vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[80vh] h-[240vh]" style={{ top: "10vh" }}>
        {/* import輪播圖 */}
        <div className="flex flex-col md:flex-row truncate sm:h-[80vh] md:h-[80vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[80vh] h-[231vh]" style={{ width: "100%"}}>
          <Importimg className="object-cover w-full" style={{ maxHeight: "80vh" }} />
          {/* 熱門書籍 */}
          <div className="hotbooks w-full" style={{ height: "80vh" }}>
            <h1 className="font-bold text-2xl underline text-center tracking-widest mt-2">熱門書籍</h1>
            <BookFilter books={books} initialBooks={books} showFilter={false} customGridCols="md:grid-cols-2" customBorder="shadow-red-500" customGap="gap-0" />
          </div>
        </div>
      </div>

      {/* 廣告優惠 */}
      <div className="max-w-full h-[22vh] mb-2 font-semibold text-xl text-sky-600 truncate">
        <h3 className="fixed pl-11 backdrop-blur-2xl">
          簡介：品誠書店，您的閱讀天堂，提供各類書籍，滿足您的閱讀需求。
        </h3>
        <h3 className="fixed mt-7 pl-11 backdrop-blur-2xl">
          活動優惠：新會員首單享9折優惠，購滿500元免運費！
        </h3>
        <div className="circle slogan">
          <h1>歡迎來到</h1>
          <h2>品誠書店</h2>
        </div>
      </div>

      <div className="bg-white">
        <div className="relative">
          <img
            src="/images/economicBooks_img/white-paper-background.jpg"
            className="w-full h-80 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 font-semibold p-4">
            <h1 className="text-center text-white sm:text-2xl md:text-3xl lg:text-4xl">
              2022年度日經・經濟圖書文化賞得獎作
              <br />
              《週刊Diamond》經濟類十大好書No.1
              <br />
              《日本經濟新聞》經濟學者所選．經濟類十大好書No.1
              <br />
              《週刊東洋經濟》2022年最佳經濟類．經營類書No.1
              <br />
              <br />
              哈佛大學博士，曾任職日本央行、現任東大經濟學教授
              <br />
              日本物價理論與實證研究第一人──渡邊努　生涯力作
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center p-10">
            <img
              className="w-90"
              src="/images/economicBooks_img/econBook1.webp"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div>
              <h1 className="text-3xl font-bold">
                物價跟你想的不一樣: 從日常出發, 東大教授帶你揭開物價波動的祕密,
                透過物價看見經濟的真實全貌
              </h1>
            </div>

            <div className="mt-8 text-xl">
              <ul className="leading-10">
                <li>作者 : 渡邊努</li>
                <li>譯者 : 劉格安</li>
                <li>出 版 社： 臉譜出版社</li>
                <li>出版日期 : 2024/10/10</li>
                {/* <li>$356</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
