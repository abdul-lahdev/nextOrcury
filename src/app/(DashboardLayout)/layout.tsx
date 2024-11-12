"use client";
import React from "react";
import Sidebar from "./layout/vertical/sidebar/Sidebar";
import Header from "./layout/vertical/header/Header";
import RightBar from "@/app/components/dashboard/RightBar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full min-h-screen headerColor">
      <div className="page-wrapper flex w-full">
        {/* Header/sidebar */}
        <Sidebar />
        <div className="body-wrapper w-full bg-transparent">
          <Header />
          {/* Body Content  */}
          <div className="setHeight setBackground mr-3 rounded-page min-h-[90vh]">
            <div
              className={`setcontainerWidth ms-auto setHeightHud`}
            >
             <div className='setMainDiv'>
            <div className='allChildDiv'>
              {children}
            </div>
               <div className='rightBarSetting'>
                 <RightBar/>
               </div>
             </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
