"use client";

import React from "react";
import { Snackbar } from "@mui/material";
import { useState } from "react";
import '../globals.css';

const ContactUs = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="container mx-auto pt-36 py-40 px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-6">線上客服中心</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">聯絡我們</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="姓名*"
                oninvalid="this.setCustomValidity('Enter User Name Here')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="電郵*"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="內容說明"
                style={{
                  resize: "none",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            >
              確認送出
            </button>
          </form>
        </div>
        <br />
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.354737950032!2d114.16533597776329!3d22.307815290255625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400ea8c23a1c1%3A0xfa8998cd665f0e12!2z5rK56bq75Zyw5buf6KGXMTIz6Jmf!5e1!3m2!1szh-TW!2shk!4v1729151265442!5m2!1szh-TW!2shk" 
            width="450"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">地址:</h2>
          <div>
            <p className="text-gray-700">廟街123號</p>
            <p className="text-gray-700">油麻地, 香港</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">電話:</h3>
            <p className="text-gray-700">(852) 4564-7890</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">服務時間;</h3>
            <p className="text-gray-700">週一~週五08:00-19:00</p>
            <p className="text-gray-700">週六~週日及假日 09:00~18:00</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">電郵:</h3>
            <p className="text-gray-700">info@example.com</p>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="表單已提交"
      />
    </div>
  );
};

export default ContactUs;