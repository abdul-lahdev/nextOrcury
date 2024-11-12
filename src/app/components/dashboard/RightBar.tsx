"use client";
import React from "react";
import Image from 'next/image'
import NetworkCard from "@/app/components/dashboard/NetworkCard";

const sideBarData: any[] =[
    {
        userImage:'/images/profile/user-1.jpg',
        userName:'Dianne Russell',
        userRole:'Neurology Specialist',
        liveStatus:true,
    },
    {
        userImage:'/images/profile/user-2.jpg',
        userName:'Jacob Jones',
        userRole:'Neurology Specialist',
        liveStatus:false,
    },
    {
        userImage:'/images/profile/user-3.jpg',
        userName:'Ralph Edwards',
        userRole:'Neurology Specialist',
        liveStatus:true,
    },  {
        userImage:'/images/profile/user-4.jpg',
        userName:'Darrell Steward',
        userRole:'Neurology Specialist',
        liveStatus:true,
    },

]




const RightBar = () => {
    return (
        <>
            <h1 className='MainHeadingNotification mb-3'>
                Your Network
            </h1>
            {
                sideBarData
                    .sort((a, b) => b.liveStatus - a.liveStatus)
                    .map((ele, index) => (
                        <NetworkCard
                            key={index}
                            userImage={ele.userImage}
                            userName={ele.userName}
                            userRole={ele.userRole}
                            liveStatus={ele.liveStatus}
                        />
                    ))
            }

            {/*for Note.sort((a, b) => b.liveStatus - a.liveStatus) sorts the array so that all liveStatus: true items come first.*/}







        </>
    );
};

export default RightBar;
