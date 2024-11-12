"use client";
import React, { useEffect } from "react";
// import "flowbite/dist/flowbite.min.js";
import ModalDemo from "@/app/components/dashboard/ModalDemo";
import DrawerDemo from "@/app/components/dashboard/DrawerDemo";
import DashBanner from "@/app/components/dashboard/DashBanner";
import DashTabs from "@/app/components/dashboard/DashTabs";
import { useState } from "react";
import FullCard from "@/app/components/dashboard/FullCard";


const Page = () => {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     import("flowbite/dist/flowbite.min.js");
  //   }
  // }, []);
  // useEffect(() => {
  //   if (typeof window !== "undefined" && window.Flowbite) {
  //     window.Flowbite.init();
  //   }
  // }, []);

  const [activeTab, setActiveTab] = useState(0);
  const cardData = [
    {
      cardUserName: "Mathew Hems",
      cardUserRole: "Neurology Specialist",
      cardUserImg: "/images/profile/user-1.jpg",
      cardTopic:
        "Intro to Neuroanatomy | Neurophysiology | Neuroscience | Central Nervous System",
      cardViews: "453",
      cardStreamingTime: "12:10",
      cardStatus: true,
      cardBackgroundImage: "/images/backgrounds/cardback.jpeg",
    },
    {
      cardUserName: "Mathew Hems",
      cardUserRole: "Neurology Specialist",
      cardUserImg: "/images/profile/user-1.jpg",
      cardTopic:
        "Intro to Neuroanatomy | Neurophysiology | Neuroscience | Central Nervous System",
      cardViews: "453",
      cardStreamingTime: "12:10",
      cardStatus: false,
      cardBackgroundImage: "/images/backgrounds/cardack1.jpeg",
    },
    {
      cardUserName: "Mathew Hems",
      cardUserRole: "Neurology Specialist",
      cardUserImg: "/images/profile/user-1.jpg",
      cardTopic:
        "Intro to Neuroanatomy | Neurophysiology | Neuroscience | Central Nervous System",
      cardViews: "453",
      cardStreamingTime: "12:10",
      cardStatus: false,
      cardBackgroundImage: "/images/backgrounds/cardack3.jpeg",
    },
    {
      cardUserName: "Mathew Hems",
      cardUserRole: "Neurology Specialist",
      cardUserImg: "/images/profile/user-1.jpg",
      cardTopic:
        "Intro to Neuroanatomy | Neurophysiology | Neuroscience | Central Nervous System",
      cardViews: "453",
      cardStreamingTime: "12:10",
      cardStatus: true,
      cardBackgroundImage: "/images/backgrounds/cardback2.jpeg",
    },
    {
      cardUserName: "Mathew Hems",
      cardUserRole: "Neurology Specialist",
      cardUserImg: "/images/profile/user-1.jpg",
      cardTopic:
        "Intro to Neuroanatomy | Neurophysiology | Neuroscience | Central Nervous System",
      cardViews: "453",
      cardStreamingTime: "12:10",
      cardStatus: true,
      cardBackgroundImage: "/images/backgrounds/cardback3.jpeg",
    },
    {
      cardUserName: "Mathew Hems",
      cardUserRole: "Neurology Specialist",
      cardUserImg: "/images/profile/user-1.jpg",
      cardTopic:
        "Intro to Neuroanatomy | Neurophysiology | Neuroscience | Central Nervous System",
      cardViews: "453",
      cardStreamingTime: "12:10",
      cardStatus: true,
      cardBackgroundImage: "/images/backgrounds/cardack3.jpeg",
    },
  ];

  const tabs = [
    {
      id: 0,
      label: "Cardiology",
      content: (
        <>
          <div className="cardiologySetting">
            {cardData
              .sort((a, b) => Number(b.cardStatus)- Number(a.cardStatus))
              .map((element, index) => (
                <FullCard
                  key={index}
                  cardUserName={element.cardUserName}
                  cardUserRole={element.cardUserRole}
                  cardUserImg={element.cardUserImg}
                  cardTopic={element.cardTopic}
                  cardViews={element.cardViews}
                  cardStreamingTime={element.cardStreamingTime}
                  cardStatus={element.cardStatus}
                  cardBackgroundImage={element.cardBackgroundImage}
                />
              ))}
          </div>
        </>
      ),
    },
    {
      id: 1,
      label: "Dermatology",
      content: "Here’s some different content for Tab 2",
    },
    { id: 2, label: "Endocrinology", content: <>Endocrinology</> },
    { id: 3, label: "Gastroenterology", content: <>Gastroenterology</> },
    { id: 4, label: "Hematology", content: <>Hematology</> },
    { id: 5, label: "Immunology", content: <>Immunology</> },
    { id: 6, label: "Infectious Disease", content: <>Infectious Disease</> },
    { id: 7, label: "Ophthalmology", content: <>Ophthalmology</> },
  ];

  return (
    <>
      <DashBanner />
      <div className="mt-3">
        <DashTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          headinNav="Trending Live Streamings"
        />
      </div>
    </>
  );
};

export default Page;
